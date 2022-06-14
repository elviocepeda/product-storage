import React from 'react';
import HeaderContainer from '../../components/organisms/Header/HeaderContainer';
import Title from '../../components/atoms/Title';

const ProductsPage = () => {

  const style = {
    width: '100%'
  }

  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    //height: '10em',
    borderRadius: '.5em',
    boxShadow: '0 0 7px rgba(0, 0, 0, 0.3)',
    marginBottom: '1em'
  }

  return (
    <div style={style}>
      <HeaderContainer />
      <Title title='ADMINISTRAR PRODUCTOS' />
      <div style={styles}>
        <div style={{
          width: '50%',
          backgroundColor: '#eee',
          margin: '1em'
        }}>
          Subir foto
        </div>
        <div style={{
          width: '50%',
          margin: '1em'
        }}>
          Producto
        </div>
      </div>
    </div>
  )
};

export default ProductsPage;