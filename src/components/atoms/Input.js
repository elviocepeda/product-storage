import React from 'react';

const Input = ({type}) => {

  const style = {
    width: '80%',
    height: '2.5em',
    outline: 'none',
    borderStyle: 'none',
    borderRadius: '.5em',
  }

  return (
    <input
      style={style}
      type={type}
      placeholder='Buscar...'
    >
    </input>
  )
};

export default Input;