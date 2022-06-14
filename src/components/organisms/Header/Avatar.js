import React from 'react';
import userImage from '../../../images/default-user.png';

const Avatar = () => {

  const style = {
    width: '3em',
  height: '3em',
  borderRadius: '50%',
  backgroundImage: `url('${userImage}')`,
  backgroundSize: 'cover'
  }

  return (
    <div style={style}></div>
  )
};

export default Avatar;