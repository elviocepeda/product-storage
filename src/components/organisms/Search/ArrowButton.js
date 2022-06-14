import React from 'react';
import ArrowRight from '../../../icons/ArrowRight';

const ArrowButton = () => {

  const style = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '2.5em',
    height: '2.5em',
    borderStyle: 'none',
    borderRadius: '.5em',
    backgroundColor: '#FFF'
  }

  return (
    <button style={style}>
      <ArrowRight />
    </button>
  )
};

export default ArrowButton;