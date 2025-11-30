import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ qtdItens }) {
  return (
    <nav className="bg-brand-red text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nome */}
        <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-90 transition">
          🍔 Cardápio<span className="text-yellow-300">Digital</span>
        </Link>

        {/* Link do Carrinho */}
        <Link to="/carrinho" className="flex items-center gap-2 font-semibold hover:bg-white/20 px-4 py-2 rounded-full transition">
          <span>🛒</span>
          <span>Carrinho</span>
          {qtdItens > 0 && (
            <span className="bg-yellow-400 text-red-800 text-xs font-bold px-2 py-0.5 rounded-full">
              {qtdItens}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;