import React from 'react';

const SearchGlass = ({color}) => {

  const style = {
    width: '1.2em',
    height: '1.2em',
    fill: `${color}`,
    margin: '.5em .5em .5em 1em'
  };

  return (
    <svg style={style} viewBox="0 0 24 24" width="512" height="512">
      <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
    </svg>
  )
};

export default SearchGlass;