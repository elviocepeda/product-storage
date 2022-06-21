import React from 'react';
import Bell from '../../../icons/Bell';
import Lamp from '../../../icons/Lamp';

const Notifications = () => {

  const style = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '20%'
  }

  return (
    <div style={style}>
      <Lamp color='#4c7a94' marginLeft='1em' />
      <Bell color='#4c7a94' marginLeft='1em' />
    </div>
  )
};

export default Notifications;