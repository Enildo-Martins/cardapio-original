import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ qtdItens }) {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Cardápio</Link>
      <Link to="/carrinho" style={styles.link}>
        Carrinho ({qtdItens})
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    background: '#333',
    padding: '15px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px'
  }
};

export default Navbar;