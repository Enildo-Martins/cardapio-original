import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';

function App() {
  const [carrinho, setCarrinho] = useState(() => {
    const dadosSalvos = localStorage.getItem('carrinho-cardapio');
    if (dadosSalvos) {
      return JSON.parse(dadosSalvos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('carrinho-cardapio', JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (prato) => {
    setCarrinho([...carrinho, prato]);
    alert(`${prato.nome} adicionado!`);
  };

  // --- NOVA FUNÇÃO AQUI ---
  const removerDoCarrinho = (indexParaRemover) => {
    // Filtra a lista, mantendo apenas os itens que NÃO são o que clicamos
    const novoCarrinho = carrinho.filter((_, index) => index !== indexParaRemover);
    setCarrinho(novoCarrinho);
  };

  return (
    <div>
      <Navbar qtdItens={carrinho.length} />
      
      <Routes>
        <Route 
          path="/" 
          element={<Home adicionarAoCarrinho={adicionarAoCarrinho} />} 
        />
        <Route 
          path="/carrinho" 
          element={
            // Passamos a função nova para a página do Carrinho
            <Carrinho 
              carrinho={carrinho} 
              removerDoCarrinho={removerDoCarrinho} 
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;