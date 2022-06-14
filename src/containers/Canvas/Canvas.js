import React, { useRef, useState, useEffect } from 'react';
import './Canvas.css'
import ColorsMenu from './ColorsMenu';
import SavedCircles from './SavedCircles';

const defaultCatetos = { x: 0, y: 0 };
const defaultStart = { x: 0, y: 0 };
const defaultColor = '#F73457';

const Canvas = () => {

    const canvas = useRef();

    //DIMENSIONES DINAMICAS
    const [size, setSize] = useState({});

    const [context, setContext] = useState(null);
    const [catetos, setCatetos] = useState(defaultCatetos);
    const [canDraw, setCanDraw] = useState(false);
    const [create, setCreate] = useState(true)
    const [circles, setCircles] = useState([]);
    const [start, setStart] = useState(defaultStart);
    const [isDrawing, setIsDrawing] = useState(false);
    const [showColors, setShowColors] = useState(false);
    const [showCloseBtn, setShowCloseBtn] = useState(false);
    const [showOkBtn, setShowOkBtn] = useState(false)
    const [radius, setRadius] = useState(0);
    const [color, setColor] = useState(defaultColor);
    const { width, height } = size;

    useEffect(() => {
        const ctx = canvas.current.getContext('2d');
        setContext(ctx);
        setSize({ width: '700px', height: '400px' });

    }, []);

    useEffect(() => {
        changeColor()
    }, [color])

    const changeColor = () => {
        if (circles.length > 0) {
            const lastCircle = circles.slice(-1);
            const { x, y } = lastCircle[0].start
            const { radius } = lastCircle[0];
            context.clearRect(x - radius - 4, y - radius - 4, radius * 2, radius * 2);
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.strokeStyle = `${color}`;
            context.lineWidth = '3';
            context.fillStyle = 'rgba(0, 0, 0, 0)';
            context.stroke();
            context.fill();
        }
    }

    const intersection = (x0, y0, r0, x1, y1, r1) => {
        var a, dx, dy, d, h, rx, ry;
        var x2, y2;

        /* dx and dy are the vertical and horizontal distances between
         * the circle centers.
         */
        dx = x1 - x0;
        dy = y1 - y0;

        /* Determine the straight-line distance between the centers. */
        d = Math.sqrt(dy * dy + dx * dx);

        /* Check for solvability. */
        if (d > r0 + r1) {
            /* no solution. circles do not intersect. */
            return false;
        }
        if (d < Math.abs(r0 - r1)) {
            /* no solution. one circle is contained in the other */
            return false;
        }

        /* 'point 2' is the point where the line through the circle
         * intersection points crosses the line between the circle
         * centers.
         */

        /* Determine the distance from point 0 to point 2. */
        a = (r0 * r0 - r1 * r1 + d * d) / (2.0 * d);

        /* Determine the coordinates of point 2. */
        x2 = x0 + (dx * a) / d;
        y2 = y0 + (dy * a) / d;

        /* Determine the distance from point 2 to either of the
         * intersection points.
         */
        h = Math.sqrt(r0 * r0 - a * a);

        /* Now determine the offsets of the intersection points from
         * point 2.
         */
        rx = -dy * (h / d);
        ry = dx * (h / d);

        /* Determine the absolute intersection points. */
        var xi = x2 + rx;
        var xi_prime = x2 - rx;
        var yi = y2 + ry;
        var yi_prime = y2 - ry;

        return [xi, xi_prime, yi, yi_prime];
    }

    const handleMouseDown = (e) => {
        if (canDraw) {
            setStart({
                x: e.clientX - e.target.getBoundingClientRect().left,
                y: e.clientY - e.target.getBoundingClientRect().top
            });
            setIsDrawing(true);
        }
    };

    const handleMouseMove = (e) => {
        if (canDraw) {
            if (!isDrawing) return;
            setCatetos({
                x: (start.x) - e.clientX + e.target.getBoundingClientRect().left,
                y: (start.y) - e.clientY + e.target.getBoundingClientRect().top
            });
            setRadius(Math.sqrt(catetos.x * catetos.x + catetos.y * catetos.y));
        }
    };

    const handleMouseUp = (e) => {
        let existIntersection = false;
        circles.forEach((item) => {
            if (!existIntersection) {
                existIntersection = intersection(
                    item.start.x,
                    item.start.y,
                    item.radius,
                    start.x,
                    start.y,
                    radius
                );
            }
        });



        //debugger
        if ((!existIntersection && canDraw) || circles.length === 0) {

            context.beginPath();
            context.arc(start.x, start.y, radius, 0, Math.PI * 2);
            context.strokeStyle = `${color}`;
            context.lineWidth = "3";
            context.fillStyle = "rgba(0, 0, 0, 0)";
            context.stroke();
            context.fill();
            radius !== 0 &&
            setCircles([...circles, { start, radius, color, id: Date.now() }]);
            setIsDrawing(false);
            setShowColors(true);

        }
    };


    const handleDeleteCircle = (e) => {
        console.log(e.target.id)
        const filteredCircles = circles.filter((item) => item.id != e.target.id);
        setCircles(filteredCircles);
        const deletedCircle = circles.filter((item) => item.id == e.target.id);
        const { x, y } = deletedCircle[0].start;
        const { radius } = deletedCircle[0];
        context.clearRect(x - radius - 4, y - radius - 4, (radius * 2) + 6, (radius * 2) + 6);
        setShowColors(false)
    };

    const handleTickClick = () => {
        setCanDraw(true)
        setShowOkBtn(true)
        setShowCloseBtn(true);
    }

    const handleClick = () => {
        if (isDrawing) {
            setShowColors(false)
        }
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: `${width}`,
        height: `${height}`,
        backgroundColor: '#0000006e',
        border: '2px solid black',
    };

    console.log(circles)

    return (
        <div style={containerStyle}>
            <canvas
                width={width}
                height={height}
                ref={canvas}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            /* onClick={handleClick} */
            />
            <button
                className='tick-btn'
                onClick={handleTickClick}
            >
                <div className='tick-circle'>

                </div>
                <p>
                    MARCAR DETALLE
                </p>
            </button>
            {
                showOkBtn &&
                <button className='ok-btn'>
                    <svg width="45" height="33" viewBox="0 0 45 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.1665 16.5633L16.0554 29.71L41.8332 3.41666" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            }

            {
                showColors
                && !isDrawing && radius !== 0 &&
                <ColorsMenu
                    setShowColors={setShowColors}
                    setShowCloseBtn={setShowCloseBtn}
                    setColor={setColor}
                    start={start}
                    radius={radius}
                    circles={circles}
                    setCircles={setCircles}
                />
            }
            {
                showCloseBtn
                &&
                circles.map((circle) => {

                    const { x, y } = circle.start;
                    const { id } = circle;

                    return (

                        !isDrawing &&
                        <button
                            key={id}
                            id={id}
                            className='colors-close-btn'
                            style={{
                                top: `${y - 35}px`,
                                left: `${(x + circle.radius) - 5}px`
                            }}
                            onClick={handleDeleteCircle}
                        >
                            <div id={id} className='colors-btn-cross'></div>
                        </button>
                    )
                })
            }
        </div>
    );
};

export default Canvas;