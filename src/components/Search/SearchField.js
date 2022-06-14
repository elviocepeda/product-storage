import React from 'react';
import SearchGlass from '../../icons/SearchGlass';
import Input from '../atoms/Input';

const SearchField = () => {

  const style = {
    display: 'flex',
    justifyContent: 'flexStart',
    width: '100%',
    height: '3em',
    alignItems: 'center',
    borderRadius: '.5em',
    boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.3)'
  }

  return (
    <div style={style}>
      <SearchGlass />
      <Input type='text'/>
    </div>
  )
}

export default SearchField;