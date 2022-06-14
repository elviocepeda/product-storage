import React, { useRef, useState } from 'react'
import './Prueba.css'

const Prueba = () => {

  const [color, setColor] = useState('#F73457')
  const [start, setStart] = useState({})
  const [radius, setRadius] = useState(0)
  const [catetos, setCatetos] = useState(0)
  const [circles, setCircles] = useState([])
  const [show, setShow] = useState(false)

  const handleMouseDown = (e) => {
    console.log('MouseDown')

    setStart({
      x: e.clientX - e.target.getBoundingClientRect().left,
      y: e.clientY - e.target.getBoundingClientRect().top
    });

  }
  const handleMouseMove = (e) => {
    const valueX = (start.x) - e.clientX + e.target.getBoundingClientRect().left
    const valueY = (start.y) - e.clienty + e.target.getBoundingClientRect().top

    setCatetos({
      x: (start.x) - e.clientX + e.target.getBoundingClientRect().left,
      y: (start.y) - e.clientY + e.target.getBoundingClientRect().top
    });
    setRadius(Math.sqrt(catetos.x * catetos.x + catetos.y * catetos.y));
  }

  const handleMouseUp = (e) => {
    radius > 0 && setCircles(
      [...circles, { start, color, catetos, radius, id: Date.now() }]
    )

    // TOQUE ENTRE CIRCULOS
    //circles.map((circle) => {
    //  const distance = Math.sqrt((circle.start.x - start.x) * (circle.start.x - start.x) + (circle.start.y - start.y) * (circle.start.y - start.y));
    //  if (distance < circle.radius + radius) {
    //    console.log('Circles touch...')
    //  }
    //});

  };

  

  return (
    <div className='main'>
      <div
        className='canvas'
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {
          circles.map((circle) => {

            const circleStyle = {
              position: 'absolute',
              left: `${start.x}px`,
              top: `${start.y}px`,
              width: `${-catetos.x}px`,
              height: `${-catetos.y}px`,
              border: `3px solid ${color}`,
              borderRadius: '50%',
            }

            return (
              <div style={circleStyle}></div>
            )
          })}
      </div>
    </div>
  )
}

export default Prueba