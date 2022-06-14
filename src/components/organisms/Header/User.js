import React from 'react';
import Avatar from './Avatar';

const User = () => {

  const style = {
    display: 'flex',
    width: '80%',
    borderTopLeftRadius: '2em'
  }

  const h2Style = {
    fontSize: '.8em',
    alignSelf: 'center',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    borderRadius: '.5em',
    padding: '0 .4em',
  }

  return (
    <div style={style}>
      <Avatar />
      <h2 style={h2Style}>Hola Papichin!</h2>
    </div>
  )
};

export default User;