import renderWithProviders from '@/tests';
import Header from './';

test('The header should contain a semantic HTML5 "header" element for toasts to attach', () => {
  renderWithProviders(<Header />);

  const headers = document.getElementsByTagName('header');

  expect(headers.length).toBe(1);
});
