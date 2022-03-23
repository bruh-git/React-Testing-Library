import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('se página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);

  const heading = screen.getByRole('heading',
    { name: /Encountered pokémons/i },
    { level: 2 });
  expect(heading).toBeInTheDocument();
});

test('se é exibido o próximo Pokémon da lista quando é clicado', () => {
  renderWithRouter(<App />);

  const id = screen.getByTestId('pokemon-name');
  const btn = screen.getByRole('button', { name: 'Próximo pokémon' });
  userEvent.click(btn);
  expect(id.innerHTML).toBe('Charmander');
  userEvent.click(btn);
  expect(id.innerHTML).toBe('Caterpie');
  userEvent.click(btn);
  expect(id.innerHTML).toBe('Ekans');
});

test('se é mostrado apenas um Pokémon por vez', () => {
  renderWithRouter(<App />);
  const id = screen.getAllByTestId('pokemon-name').length;
  expect(id).toBe(1);
});

test('se a Pokédex tem os botões de filtro', () => {
  renderWithRouter(<App />);
  const btn = screen.getAllByTestId('pokemon-type-button');
  const type = [
    'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon',
  ];
  // verifica com o type[index] se refere ao elemento correto, matando o mutante
  btn.forEach((types, index) => expect(types.innerHTML).toBe(type[index]));
});

test('se a Pokédex contém um botão para resetar o filtro', () => {
  renderWithRouter(<App />);
  const btn = screen.getByRole('button', { name: 'All' });
  expect(btn).toBeInTheDocument();
  userEvent.click(btn);
  expect(btn.innerHTML).toBe('All');
});
