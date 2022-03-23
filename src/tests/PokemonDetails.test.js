import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
// import { Pokemon } from '../components';
import pokemons from '../data';
import renderWithRouter from '../renderWithRouter';

const pikachu = pokemons[0];

test('se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25');

  const nameDetails = screen.getByText(`${pikachu.name} Details`);
  expect(nameDetails).toBeInTheDocument();
  const link = screen.queryByText(/More details/i);
  expect(link).not.toBeInTheDocument();
  const headingEl = screen.getByRole('heading', { name: /Summary/i }, { level: 2 });
  expect(headingEl).toBeInTheDocument();
  const pTag = screen.getByText(`${pikachu.summary}`);
  expect(pTag).toBeInTheDocument();
});

test('se existe uma seção com os mapas contendo as localizações do pokémon.', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25');

  const headingEl = screen.getByRole('heading',
    { name: `Game Locations of ${pikachu.name}` },
    { level: 2 });
  expect(headingEl).toBeInTheDocument();
});

test('se o usuário pode favoritar um pokémon através da página de detalhes', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/4');

  const favPokemon = screen.getByLabelText(/Pokémon favoritado?/i);
  expect(favPokemon).toBeInTheDocument();
});
