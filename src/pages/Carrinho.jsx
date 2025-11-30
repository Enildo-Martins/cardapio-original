import React from 'react';

function Carrinho({ carrinho }) {
  // Calcula o total somando o preço de cada item
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Seu Pedido</h1>
      
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {carrinho.map((item, index) => (
            // Usamos index aqui como key provisória pois podem ter itens repetidos
            <li key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
              <strong>{item.nome}</strong> - R$ {item.preco.toFixed(2)}
            </li>
          ))}
        </ul>
      )}

      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}

export default Carrinho;