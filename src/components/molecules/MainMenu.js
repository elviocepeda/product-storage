import React from 'react';

const MainMenu = () => {

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    right: '1em',
    bottom: '1em',
    width: '4em',
    height: '4em',
    borderRadius: '50%',
    backgroundColor: '#4c7a94'
  }

  const line1 = {
    width: '2.5em',
    height: '.3em',
    borderRadius: '.2em',
    backgroundColor: '#fff'
  }

  const line2 = {
    position: 'absolute',
    width: '2.5em',
    height: '.3em',
    backgroundColor: '#fff',
    borderRadius: '.2em',
    transform: 'rotate(90deg)'
  }

  return (
    <div style={style}>
      <div style={line1}></div>
      <div style={line2}></div>
    </div>
  )
};

export default MainMenu;