import renderWithProviders from '@/tests';
import { screen } from '@testing-library/react';
import Logo from '.';

test('It renders the logo with a default fill and stroke of black', () => {
  renderWithProviders(<Logo />);

  const logo = screen.getByTestId('logo');

  expect(logo.style.fill).toBe('black');
  expect(logo.style.stroke).toBe('black');
});

test('The fill and stroke can be overwritten', () => {
  const fill = 'green';
  const stroke = 'red';
  renderWithProviders(<Logo {...{ fill, stroke }} />);
  const logo = screen.getByTestId('logo');
  expect(logo.style.fill).toBe(fill);
  expect(logo.style.stroke).toBe(stroke);
});
