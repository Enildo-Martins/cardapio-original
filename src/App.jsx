import React, { useState, useEffect } from 'react'; // 1. Importamos useEffect
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';

function App() {
  // 2. CONTEÚDO 4: Local Storage
  // Em vez de começar com [], começamos com uma função que busca os dados salvos
  const [carrinho, setCarrinho] = useState(() => {
    const dadosSalvos = localStorage.getItem('carrinho-cardapio');
    if (dadosSalvos) {
      return JSON.parse(dadosSalvos); // Converte de texto (JSON) para Array
    }
    return []; // Se não tiver nada salvo, começa vazio
  });

  // 3. CONTEÚDO 2: useEffect
  // Toda vez que a variável 'carrinho' mudar, executamos este código
  useEffect(() => {
    // Salvamos no Local Storage convertendo o array para texto (JSON)
    localStorage.setItem('carrinho-cardapio', JSON.stringify(carrinho));
  }, [carrinho]); // O array [carrinho] indica a dependência que dispara o efeito

  // Função para adicionar item
  const adicionarAoCarrinho = (prato) => {
    // Verificação opcional: Evitar duplicados (se quiser)
    setCarrinho([...carrinho, prato]);
    alert(`${prato.nome} adicionado!`);
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
          element={<Carrinho carrinho={carrinho} />} 
        />
      </Routes>
    </div>
  );
}

export default App;