import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

const MenuContainer = () => {

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }

  const aStyle = {
    width: '48%',
    textDecoration: 'none',
    color: '#000'
  }

  return (
    <div style={style}>
      <Link style={aStyle} to='/products'>
        <MenuItem svg='tag' />
      </Link>
      <Link style={aStyle} to='/alarm'>
        <MenuItem svg='alarm' />
      </Link>
      <Link style={aStyle} to='/notice'>
        <MenuItem svg='bolt' />
      </Link>
      <Link style={aStyle} to='/stats'>
        <MenuItem svg='stats' />
      </Link>
    </div>
  )
};

export default MenuContainer;