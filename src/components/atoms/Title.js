import React from 'react';

const Title = ({title}) => {
  
  const h2Style = {
    fontSize: '.8em',
    padding: '1em 0'
  }

  return (
    <h2 style={h2Style}>{title}</h2>
  )
};

export default Title;