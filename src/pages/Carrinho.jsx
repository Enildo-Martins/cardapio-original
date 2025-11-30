import React from 'react';
import { Link } from 'react-router-dom';

// Agora recebemos também a função 'removerDoCarrinho'
function Carrinho({ carrinho, removerDoCarrinho }) {
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        🛒 Seu Pedido
      </h1>

      {carrinho.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500 text-xl mb-4">Seu carrinho está vazio.</p>
          <Link to="/" className="text-brand-red font-bold hover:underline">
            Voltar para o cardápio
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {carrinho.map((item, index) => (
              <li key={index} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-gray-50 gap-4">
                
                {/* 1. Área da Imagem e Texto */}
                <div className="flex items-center gap-4 flex-grow">
                  <img 
                    src={item.imagem} 
                    alt={item.nome} 
                    className="w-20 h-20 rounded-lg object-cover shadow-sm border border-gray-100" 
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{item.nome}</h3>
                    <p className="text-gray-500 text-sm line-clamp-1">{item.descricao}</p>
                    <p className="font-bold text-brand-red mt-1">R$ {item.preco.toFixed(2)}</p>
                  </div>
                </div>

                {/* 2. Botão de Remover */}
                <button
                  onClick={() => removerDoCarrinho(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors font-medium text-sm flex items-center gap-1 group"
                  title="Remover item"
                >
                  <span className="group-hover:scale-110 transition-transform">🗑️</span>
                  <span className="hidden sm:inline">Remover</span>
                </button>

              </li>
            ))}
          </ul>

          <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-gray-500">Total do Pedido:</p>
              <p className="text-3xl font-bold text-brand-red">R$ {total.toFixed(2)}</p>
            </div>
            
            <button 
              className="w-full md:w-auto bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition shadow-lg hover:shadow-green-200"
              onClick={() => alert('Pedido enviado com sucesso! (Simulação)')}
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;