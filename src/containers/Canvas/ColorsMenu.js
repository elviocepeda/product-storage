import React, {useState} from 'react';
import Color from './Color';

const ColorsMenu = ({ radius, start, circles, setCircles, setColor, setShowColors, setShowCloseBtn }) => {
  
  // POSICION DEL MENU DE COLORES
  const { x, y } = start;
  const left = x + radius + 20;
  const top = y - 55;

  return (
    <div className='colors-menu-container' style={{
      top: top, 
      left: left
    }}>
      <div className='colors-menu'>
        <p>Selecciona el color</p>
        <div className='color-container'>
          <Color 
            circles={circles}
            setCircles={setCircles}
            color={'#F73457'} 
            setColor={setColor} 
            setShowColors={setShowColors} 
            setShowCloseBtn={setShowCloseBtn}
          />
          <Color 
            circles={circles}
            setCircles={setCircles}
            color={'#F6ED1A'} 
            setColor={setColor} 
            setShowColors={setShowColors} 
            setShowCloseBtn={setShowCloseBtn}
          />
          <Color 
            circles={circles}
            setCircles={setCircles}
            color={'#7875FE'} 
            setColor={setColor} 
            setShowColors={setShowColors} 
            setShowCloseBtn={setShowCloseBtn}
          />
          <Color 
            circles={circles}
            setCircles={setCircles}
            color={'#00ACEA'} 
            setColor={setColor} 
            setShowColors={setShowColors} 
            setShowCloseBtn={setShowCloseBtn}
          />
          <Color 
            circles={circles}
            setCircles={setCircles}
            color={'#FE6963'} 
            setColor={setColor} 
            setShowColors={setShowColors} 
            setShowCloseBtn={setShowCloseBtn}
          />
          <Color 
            circles={circles}
            setCircles={setCircles}
            color={'#F2A000'} 
            setColor={setColor} 
            setShowColors={setShowColors} 
            setShowCloseBtn={setShowCloseBtn}
          />
          <Color 
            circles={circles}
            setCircles={setCircles}
            color={'#0085FF'} 
            setColor={setColor} 
            setShowColors={setShowColors} 
            setShowCloseBtn={setShowCloseBtn}
          />
          <Color 
            circles={circles}
            setCircles={setCircles}
            color={'#D0E1E7'} 
            setColor={setColor} 
            setShowColors={setShowColors} 
            setShowCloseBtn={setShowCloseBtn}
          />
          <Color 
            circles={circles}
            setCircles={setCircles}
            color={'#F55800'} 
            setColor={setColor} 
            setShowColors={setShowColors} 
            setShowCloseBtn={setShowCloseBtn}
          />
          <Color 
            circles={circles}
            setCircles={setCircles}
            color={'#7703D1'} 
            setColor={setColor} 
            setShowColors={setShowColors} 
            setShowCloseBtn={setShowCloseBtn}
          />
        </div>
      </div>
      <div className='colors-menu-bulletpoint'></div>
    </div>
  )
};

export default ColorsMenu;