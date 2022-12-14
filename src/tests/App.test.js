import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Se o primeiro link deve possuir o texto Home', () => {
  renderWithRouter(<App />);
  const routeHome = screen.getByText(/Home/i);
  expect(routeHome).toBeInTheDocument();
});

test('Se o segundo link deve possuir o texto About', () => {
  renderWithRouter(<App />);
  const routeAbout = screen.getByText(/About/i);
  expect(routeAbout).toBeInTheDocument();
});

test('Se terceiro link deve possuir o texto Favorite Pokémons', () => {
  renderWithRouter(<App />);
  const routeFavorite = screen.getByText(/Favorite Pokémons/i);
  expect(routeFavorite).toBeInTheDocument();
});
