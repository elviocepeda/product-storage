import React from 'react';
import ArrowButton from './ArrowButton';
import SearchField from './SearchField';

const SearchContainer = () => {

  const style = {
    display: 'flex',
    alignItems: 'center',
    margin: '1em 0'
  }

  return (
    <div style={style}>
        <SearchField />
        <ArrowButton />
      </div>
  )
};

export default SearchContainer;