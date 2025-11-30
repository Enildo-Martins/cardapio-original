import React from 'react';
import { pratos } from '../data/pratos';
import CardPrato from '../components/CardPrato';

function Home({ adicionarAoCarrinho }) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-brand-red pl-4">
        Nosso Cardápio
      </h1>
      
      {/* Grid Responsivo do Tailwind */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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