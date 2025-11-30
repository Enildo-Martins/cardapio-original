import React from 'react';

// Recebemos 'prato' e a função 'adicionarAoCarrinho' como props
function CardPrato({ prato, adicionarAoCarrinho }) {
  return (
    <div style={styles.card}>
      <img src={prato.imagem} alt={prato.nome} style={styles.img} />
      <div style={styles.info}>
        <h3>{prato.nome}</h3>
        <p>{prato.descricao}</p>
        <p><strong>R$ {prato.preco.toFixed(2)}</strong></p>
        
        {/* Ao clicar, chamamos a função passando o prato atual */}
        <button 
          onClick={() => adicionarAoCarrinho(prato)}
          style={styles.botao}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

// Estilos simples em linha (CSS-in-JS básico) para não gastar tempo com CSS agora
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    width: '250px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  img: {
    width: '100%',
    borderRadius: '4px'
  },
  info: {
    marginTop: '10px'
  },
  botao: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '10px',
    borderRadius: '4px'
  }
};

export default CardPrato;