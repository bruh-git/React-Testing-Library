import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
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

// test('se é exibido o próximo Pokémon da lista quando é clicado', () => {
//   renderWithRouter(<App />);
//   const btn = screen.getAllByRole('button', { name: 'Próximo pokémon' });
//   const nextPokemon = screen.getByTestId('pokemon-type-button');
//   userEvent.click(btn);
//   userEvent.click(nextPokemon);
// });

// test('se é mostrado apenas um Pokémon por vez', () => {
//   renderWithRouter(<Pokedex />);
// });

// test('se a Pokédex tem os botões de filtro', () => {
//   renderWithRouter(<Pokedex />);
// });

// test('se a Pokédex contém um botão para resetar o filtro', () => {
//   renderWithRouter(<Pokedex />);
// });
