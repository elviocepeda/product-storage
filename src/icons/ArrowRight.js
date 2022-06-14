import React from 'react';

const ArrowRight = ({color}) => {

  const style = {
    display: 'flex',
    justifyContent: 'flexEnd',
    alignItems: 'center',
    fill: `${color}`,
    width: '1.2em',
    height: '1.2em',
    marginLeft: '1em'
  };

  return (
    <svg style={style} viewBox="0 0 24 24" width="512" height="512">
      <path d="M6.079,22.5a1.5,1.5,0,0,1,.44-1.06l7.672-7.672a2.5,2.5,0,0,0,0-3.536L6.529,2.565A1.5,1.5,0,0,1,8.65.444l7.662,7.661a5.506,5.506,0,0,1,0,7.779L8.64,23.556A1.5,1.5,0,0,1,6.079,22.5Z" />
    </svg>
  )
};

export default ArrowRight;