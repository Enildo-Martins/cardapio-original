import React from 'react';

function CardPrato({ prato, adicionarAoCarrinho }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Imagem */}
      <div className="h-48 overflow-hidden">
        <img 
          src={prato.imagem} 
          alt={prato.nome} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{prato.nome}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-grow">{prato.descricao}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-green-600 font-bold text-lg">
            R$ {prato.preco.toFixed(2)}
          </span>
          
          <button 
            onClick={() => adicionarAoCarrinho(prato)}
            className="bg-brand-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 active:scale-95 transition-all"
          >
            Adicionar +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPrato;