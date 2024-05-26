import renderWithProviders from '@/tests';
import { act, fireEvent, screen } from '@testing-library/react';
import Menu from './';

test('Clicking or focusing outside of the menu should close the menu', async () => {
  renderWithProviders(<Menu />);
  const menu = screen.getByTestId('menu');
  let further_nav = document.getElementsByTagName('nav');
  expect(further_nav.length).toBe(0);

  /**
   * Open the menu
   */
  await act(() => fireEvent.click(menu));

  further_nav = document.getElementsByTagName('nav');
  expect(further_nav.length).toBe(1);

  await act(() => fireEvent.click(menu));
  further_nav = document.getElementsByTagName('nav');
  expect(further_nav.length).toBe(0);
});
