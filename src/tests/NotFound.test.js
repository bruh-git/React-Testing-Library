import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

test('se página contém um heading h2 com o texto Page requested not found 😭', () => {
  renderWithRouter(<NotFound />);

  const heading = screen.getByRole('heading',
    { name: /Page requested not found /i },
    { level: 2 });
  expect(heading).toBeInTheDocument();
});

test('se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
  renderWithRouter(<NotFound />);
  // getByAltText pega pelo text alternativo (alt)
  const imgEl = screen.getByAltText(/Pikachu crying because the page requested /i);
  expect(imgEl).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
