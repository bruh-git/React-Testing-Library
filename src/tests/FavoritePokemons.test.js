import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import pokemons from '../data';

test('se é exibido No favorite pokemon found, se não tiver pokémons favoritos', () => {
  renderWithRouter(<FavoritePokemons />);

  const fav = screen.getByText(/No favorite pokemon found/i);
  expect(fav).toBeInTheDocument();
});

test('se é exibido todos os cards de pokémons favoritados', () => {
  renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);
  pokemons.forEach((pokemon) => {
    const allPokemons = screen.getByText(pokemon.name);
    expect(allPokemons).toBeInTheDocument();
  });
});
