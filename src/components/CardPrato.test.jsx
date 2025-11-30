import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardPrato from './CardPrato';
import { describe, it, expect, vi } from 'vitest';

// Dados falsos para o teste
const mockPrato = {
  id: 1,
  nome: 'Teste Burguer',
  descricao: 'Descrição teste',
  preco: 20.00,
  imagem: 'http://site.com/img.png'
};

describe('Componente CardPrato', () => {
  it('deve exibir as informações do prato corretamente', () => {
    // Renderiza o componente
    render(<CardPrato prato={mockPrato} adicionarAoCarrinho={() => {}} />);

    // Verifica se o texto "Teste Burguer" está na tela
    expect(screen.getByText('Teste Burguer')).toBeInTheDocument();
    
    // Verifica se o preço está correto (R$ 20.00)
    expect(screen.getByText('R$ 20.00')).toBeInTheDocument();
  });

  it('deve chamar a função adicionarAoCarrinho quando o botão for clicado', () => {
    // Cria uma função "espiã" (mock) para saber se foi chamada
    const funcaoMock = vi.fn();

    render(<CardPrato prato={mockPrato} adicionarAoCarrinho={funcaoMock} />);

    // Encontra o botão e clica nele
    const botao = screen.getByText('Adicionar');
    fireEvent.click(botao);

    // Verifica se a função foi chamada 1 vez com o prato correto
    expect(funcaoMock).toHaveBeenCalledTimes(1);
    expect(funcaoMock).toHaveBeenCalledWith(mockPrato);
  });
});