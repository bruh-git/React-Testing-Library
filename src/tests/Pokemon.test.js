import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import { Pokemon } from '../components';
import pokemons from '../data';
import renderWithRouter from '../renderWithRouter';

const charmander = pokemons[1];
const pikachu = pokemons[0];

test('se é renderizado um card com as informações de determinado pokémon', () => {
  renderWithRouter(<App />);

  const { averageWeight: { value, measurementUnit } } = pikachu;

  const name = screen.getByTestId('pokemon-name');
  const type = screen.getByTestId('pokemon-type');
  const weight = screen.getByTestId('pokemon-weight');
  const img = screen.getByAltText(`${pikachu.name} sprite`);

  expect(name.innerHTML).toBe(pikachu.name);
  expect(type.innerHTML).toBe(pikachu.type);
  expect(weight.innerHTML).toBe(`Average weight: ${value} ${measurementUnit}`);
  expect(img.src).toBe(pikachu.image);
});

test('se o card do Pokémon indicado na Pokédex contém um link deste Pokémon.', () => {
  renderWithRouter(<Pokemon pokemon={ charmander } isFavorite />);
  const link = screen.getByText(/More details/i);
  expect(link).toHaveAttribute('href', '/pokemons/4');
  expect(link).toBeInTheDocument();
});

test('se ao clicar no link, o redirecionamento para detalhes de Pokémon', () => {
  renderWithRouter(<App />);
  const moreDetailsBtn = screen.getByText(/More details/i);
  userEvent.click(moreDetailsBtn);
  expect(screen.getByText(/Pikachu Details/i)).toBeInTheDocument();
});

test('se a URL exibida muda para /pokemon/<id>, onde <id> é o id do Pokémon', () => {
  const { history } = renderWithRouter(<App />);
  const moreDetailsBtn = screen.getByText(/More details/i);
  userEvent.click(moreDetailsBtn);
  const { pathname } = history.location;
  expect(pathname).toBe(`/pokemons/${pikachu.id}`);
});

test('se existe um ícone de estrela nos Pokémons favoritados', () => {
  renderWithRouter(<Pokemon pokemon={ charmander } isFavorite />);

  const imgEl = screen.getByAltText(`${charmander.name} is marked as favorite`);
  expect(imgEl.src).toContain('/star-icon.svg');
});
