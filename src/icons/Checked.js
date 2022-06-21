import React from 'react';

const Checked = ({color}) => {

  const style = {
    position: 'absolute',
    width: '1.4em',
    height: '1.4em',
    fill: `${color}`,
  };

  return (
    <svg style={style} viewBox="0 0 24 24">
      <g id="_01_align_center" data-name="01 align center">
        <path d="M7.8,20.53a2.99,2.99,0,0,1-2.121-.877L.086,14.061,1.5,12.646l5.593,5.593a1,1,0,0,0,1.414,0L22.5,4.246,23.914,5.66,9.921,19.653A2.99,2.99,0,0,1,7.8,20.53Z" />
      </g>
    </svg>

  )
};

export default Checked;