import React from 'react';
import Alarm from '../../../icons/Alarm';
import Bolt from '../../../icons/Bolt';
import Stats from '../../../icons/Stats';
import Tag from '../../../icons/Tag';

const MenuItem = ({ svg, label }) => {

  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10em',
    borderRadius: '.5em',
    boxShadow: '0 0 7px rgba(0, 0, 0, 0.3)',
    marginBottom: '1em'
  }

  return (
    <div style={style}>
      {
        svg === 'tag' &&
        <>
          <Tag />
          <h4>Productos</h4>
        </>
      }
      {
        svg === 'alarm' &&
        <>
          <Alarm />
          <h4>Alarma</h4>
        </>
      }
      {
        svg === 'bolt' &&
        <>
          <Bolt />
          <h4>Bolt</h4>
        </>
      }
      {
        svg === 'stats' &&
        <>
          <Stats />
          <h4>Stats</h4>
        </>
      }

    </div>
  )
};

export default MenuItem;