import React from 'react';
import SearchGlass from '../../../icons/SearchGlass';

const SearchField = () => {

  const style = {
    display: 'flex',
    width: '100%',
    height: '3em',
    alignItems: 'center',
    borderRadius: '.5em',
    boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.3)'
  }

  const inputStyle = {
    width: '80%',
    height: '2.5em',
    outline: 'none',
    borderStyle: 'none',
    borderRadius: '.5em',
  }

  return (
    <div style={style}>
      <SearchGlass />
      <input
        style={inputStyle}
        type='text'
        placeholder='Buscar...'
      >
      </input>
    </div>
  )
}

export default SearchField;