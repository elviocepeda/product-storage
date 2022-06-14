import React from 'react';
import Notifications from './Notifications';
import User from './User';

const HeaderContainer = () => {

  const style = {
    display: 'flex',
    alignItems: 'flexStart',
    paddingBottom: '1em'
  }

  return (
    <div style={style}>
      <User />
      <Notifications />
    </div>
  )
};

export default HeaderContainer;