import React/* , { useState }  */from 'react';

const Color = ({ 
  circles, 
  setCircles, 
  color, 
  setColor, 
  setShowColors, 
  setShowCloseBtn, 
  radius, 
  start
}) => {

  const handleMouseUp = (e) => {
    console.log(e.target.id);
    setColor(e.target.style.backgroundColor);
    setShowColors(false);
  };

  return (
    <>
      <div className='color' id='123'>
        <div 
          onMouseUp={handleMouseUp}
          className='filled-circle'
          style={{backgroundColor: `${color}`}}>
        </div>
      </div>
    </>
  );
};

export default Color;