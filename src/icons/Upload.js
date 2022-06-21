import React from 'react';

const Upload = ({color}) => {

  const style = {
    position: 'absolute',
    margin: 'auto',
    width: '3em',
    fill: `${color}`
  }

  return (
    <svg style={style} viewBox="0 0 24 24">
      <g id="_01_align_center" data-name="01 align center">
        <path d="M17.792,7.212A8,8,0,0,0,2,9a7.9,7.9,0,0,0,.9,3.671A5.49,5.49,0,0,0,5.5,23H12V21H5.5a3.491,3.491,0,0,1-.872-6.874l1.437-.371-.883-1.193A5.942,5.942,0,0,1,4,9a6,6,0,0,1,11.94-.8l.1.758.757.1A5.99,5.99,0,0,1,18,20.65v2.087a7.989,7.989,0,0,0-.208-15.525Z" />
        <path d="M18.293,17.707l1.414-1.414L16.414,13a2,2,0,0,0-2.828,0l-3.293,3.293,1.414,1.414L14,15.414V24h2V15.414Z" />
      </g>
    </svg>
  )
};

export default Upload;