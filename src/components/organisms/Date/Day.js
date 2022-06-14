import React from 'react';

const Day = ({number, name, active}) => {

  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '18%',
    height: '100%',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    borderRadius: '.5em'
  }

  const dayNumberStyle = {
  fontWeight: '700',
  fontSize: '1.5em',
  height: '60%',
  padding: '.5em'
}

const dayNameStyle = {
  fontWeight: '400',
  fontSize: '.7em',
  height: '40%',
  padding: '1em .5em 0'
}

  return (
    <div style={style}  className={active? 'active' : ''}>
      <div style={dayNumberStyle}>{number}</div>
      <div style={dayNameStyle}>{name}</div>
    </div>
  )
};

export default Day;