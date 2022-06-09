import React from 'react'

const SavedCircles = ({ circles, context, start, radius, color }) => {
  circles.forEach(function (circle) {
    context.beginPath();
    context.arc(
    circle.start.x,
    circle.start.y,
    circle.radius, 0, Math.PI * 2
    );
    context.strokeStyle = `${color}`;
    context.lineWidth = '3';
    context.fillStyle = 'rgba(0, 0, 0, 0)';
    context.stroke();
    context.fill();
  })
}

export default SavedCircles