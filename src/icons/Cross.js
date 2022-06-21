import React from 'react';

const Cross = ({color}) => {

  const style = {
    width: '1em',
    height: '1em',
    fill: `${color}`,
  };

  return (
    <svg style={style} viewBox="0 0 24 24">
      <g id="_01_align_center" data-name="01 align center">
        <polygon points="24 1.414 22.586 0 12 10.586 1.414 0 0 1.414 10.586 12 0 22.586 1.414 24 12 13.414 22.586 24 24 22.586 13.414 12 24 1.414" />
      </g>
    </svg>
  )
};

export default Cross;