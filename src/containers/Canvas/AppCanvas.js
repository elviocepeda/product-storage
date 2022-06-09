import "./AppCanvas.css";

function AppCanvas() {
  setTimeout(() => {
    document.getElementById("canvas").style.background =
      "url('https://hackercar.com/wp-content/uploads/2019/09/range-rover-evoque-en-promoci%C3%B3n.jpg')";
    var circles = [];
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var radius = 50;
    var nStartX = 0;
    var nStartY = 0;
    var bIsDrawing = false;
    var putPoint = function (e) {
      nStartX = e.clientX;
      nStartY = e.clientY;
      bIsDrawing = true;
      radius = 0;
    };
    var drawPoint = function (e) {
      if (!bIsDrawing) return;
      canvas = document.getElementById("canvas");
      context = canvas.getContext("2d");
      var nDeltaX = nStartX - e.clientX;
      var nDeltaY = nStartY - e.clientY;
      radius = Math.sqrt(nDeltaX * nDeltaX + nDeltaY * nDeltaY);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(nStartX, nStartY, radius, 0, Math.PI * 2);
      context.strokeStyle = "#000000";
      context.fillStyle = "#FFFFFF";
      context.fillStyle = "rgba(0, 0, 0, 0)";
      context.stroke();
      context.fill();
      circles.forEach(function (circle) {
        context.beginPath();
        context.arc(
          circle.nStartX,
          circle.nStartY,
          circle.radius,
          0,
          Math.PI * 2
        );
        context.strokeStyle = "#000000";
        context.fillStyle = "#FFFFFF";
        context.fillStyle = "rgba(0, 0, 0, 0)";
        context.stroke();
        context.fill();
      });
    };
    var stopPoint = function (e) {
      //context.clip();
      //context.clearRect(0, 0, canvas.width, canvas.height);
      bIsDrawing = false;

      var nDeltaX = nStartX - e.clientX;
      var nDeltaY = nStartY - e.clientY;
      radius = Math.sqrt(nDeltaX * nDeltaX + nDeltaY * nDeltaY);
      circles.push({ nStartX: nStartX, nStartY: nStartY, radius: radius });
    };
    canvas.addEventListener("mousedown", putPoint);
    canvas.addEventListener("mousemove", drawPoint);
    canvas.addEventListener("mouseup", stopPoint);
  }, 1000);

  const canvasClick = (event) => {
    const parentContainer = document.getElementById("mainCanvas");

    const radius = 30; // here we can set dynamic radius (may be a input)
    const r = parseInt(radius, 10);
    const offsetTop = event.target.offsetTop;
    const offsetLeft = event.target.offsetLeft;
    console.log("evenx", event.clientX);
    console.log("eveny", event.clientY);
    console.log("evenyy", event.pageY);

    // const xx = event.pageX - this.offsetLeft;
    // var yy = event.pageY - this.offsetTop;

    const y = event.pageY - offsetTop;
    const x = event.pageX - offsetLeft;
    console.log("window", parentContainer.offsetTop);
    const newImg = document.createElement("img");
    // img.className = 'circle';
    newImg.style.position = "absolute";
    newImg.style["clip-path"] = `circle(${radius}px at ${x}px ${y}px)`;
    newImg.src =
      "https://hackercar.com/wp-content/uploads/2019/09/range-rover-evoque-en-promoci%C3%B3n.jpg";
    // document.getElementById('mainCanvas').appendChild(img);

    const mainImage = document.getElementById("mainImage");

    parentContainer.insertBefore(newImg, mainImage);

    // const circleCanvas = document.createElement('div');
    // circleCanvas.innerHTML = '<CloseIcon width="25px" onClick={this.demoC} />';
    // circleCanvas.style.top = `${y}px`;
    // circleCanvas.style.left = `${x}px`;
    // circleCanvas.style.width = `${r * 2}px`;
    // circleCanvas.style.height = `${r * 2}px`;
    // circleCanvas.style.position = 'absolute';
    // // circleCanvas.style.background = 'rgba(255, 0, 0, 0.2)';
    // circleCanvas.style['border-radius'] = '50%';
    // circleCanvas.style.transform = 'translate(-50%, -50%)';
    // circleCanvas.style.transform = 'translate(-50%, -50%)';
    // circleCanvas.style['border-style'] = 'solid';
    // circleCanvas.style['border-color'] = 'red';
    // // circleCanvas.style['clip-path'] = 'circle(50px at 405px 135px)';
    // circleCanvas.onclick = () => {
    //     console.log('cccc');
    // };

    // document.body.appendChild(circleCanvas);

    // const drawCircle = document.getElementsByClassName('canvasDefault');

    // drawCircle[0].style['clip-path'] = 'circle(50px at 405px 135px)';
  };

  return (
    <>
      <div className="AppCanvas">
        <canvas
          id="canvas"
          width="500"
          height="500"
          style={{ border: "1px solid" }}
        ></canvas>
      </div>
      <div id="mainCanvas" className="holder">
        {/* <img
                            alt="circle1"
                            className="circle"
                            src="https://hackercar.com/wp-content/uploads/2019/09/range-rover-evoque-en-promoci%C3%B3n.jpg"
                        />
                        <img
                            alt="circle2"
                            className="circle2"
                            src="https://hackercar.com/wp-content/uploads/2019/09/range-rover-evoque-en-promoci%C3%B3n.jpg"
                        /> */}
        {/* <img
                            alt="circle3"
                            className="circle3"
                            src="https://hackercar.com/wp-content/uploads/2019/09/range-rover-evoque-en-promoci%C3%B3n.jpg"
                        /> */}
        <img
          id="mainImage"
          alt="originalImage"
          className="main"
          src="https://hackercar.com/wp-content/uploads/2019/09/range-rover-evoque-en-promoci%C3%B3n.jpg"
          onClick={canvasClick}
        />
      </div>
    </>
  );
}

export default AppCanvas;
