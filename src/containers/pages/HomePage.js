import React from 'react';
import MainMenu from '../../components/molecules/MainMenu';
import DateContainer from '../../components/organisms/Date/DateContainer';
import HeaderContainer from '../../components/organisms/Header/HeaderContainer';
import MenuContainer from '../../components/organisms/Menu/MenuContainer';
import SearchContainer from '../../components/organisms/Search/SearchContainer';

const style = {
  width: '100%'
}

const HomePage = () => {
  return (
    <div style={style}>

      <HeaderContainer />
      <DateContainer />
      <SearchContainer />
      <MenuContainer />
      <MainMenu />

    </div>
  )
};

export default HomePage;