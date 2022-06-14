import React from 'react';
import Alarm from '../../../icons/Alarm';
import Bolt from '../../../icons/Bolt';
import Stats from '../../../icons/Stats';
import Tag from '../../../icons/Tag';
import Paragraph from '../../atoms/Paragraph';

const MenuItem = ({svg, label}) => {

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
      {svg === 'tag' && <><Tag /><Paragraph title='Productos' /></>}
      {svg === 'alarm' && <><Alarm /><Paragraph title='Alarma' /></>}
      {svg === 'bolt' && <><Bolt /><Paragraph title='Bolt' /></>}
      {svg === 'stats' && <><Stats /><Paragraph title='Stats' /></>}
      
    </div>
  )
};

export default MenuItem;