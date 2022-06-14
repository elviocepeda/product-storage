import React from 'react';

const Paragraph = ({ title }) => {

  const style = {
    fontSize: '.8em',
    marginTop: '.5em'
  }

  return (
    <p style={style}>{title}</p>
  )
};

export default Paragraph;