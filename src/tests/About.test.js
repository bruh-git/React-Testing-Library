import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

test('se a página contém as informações sobre a Pokédex', () => {
  const { history } = renderWithRouter(<About />);
  history.push('/about');

  const Title = screen.getByRole('heading', { name: /About Pokédex/i }, { level: 2 });
  expect(Title).toBeInTheDocument();
});

test('se a página contém um heading h2 com o texto About Pokédex', () => {
  renderWithRouter(<About />);
  const headingEl = screen.getByRole('heading', { name: /About Pokédex/i }, { level: 2 });
  expect(headingEl).toBeInTheDocument();
});

test('se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
  renderWithRouter(<About />);
  const pTag = screen.getAllByText(/Pokémons/i);
  expect(pTag.length).toBe(2);
});

test('se a página contém a imagem de uma Pokédex.', () => {
  renderWithRouter(<About />);
  const imgEl = screen.getByRole('img', { name: /pokédex/i });
  expect(imgEl).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
