import React from 'react';
import { pratos } from '../data/pratos';
import CardPrato from '../components/CardPrato';

// Recebemos a função 'adicionarAoCarrinho' via props do App.jsx
function Home({ adicionarAoCarrinho }) {
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Cardápio Digital</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pratos.map((prato) => (
          <CardPrato 
            key={prato.id} 
            prato={prato} 
            adicionarAoCarrinho={adicionarAoCarrinho} 
          />
        ))}
      </div>
    </div>
  );
}

export default Home;