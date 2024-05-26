import { render } from '@testing-library/react';
import { ReactElement } from 'react';

/**
 * Function used to return the correct context during testing.
 * @param {ReactElement} ui    The selected UI.
 * @param {object}       store Optional stores or other providers.
 * @returns
 */
export default function renderWithProviders(ui, store) {
  /**
   * Function used to return to jest the supplied UI with
   * @param {object} props The component as props.
   * @returns {ReactElement} Returns a single wrapper with language and other providers.
   */
  function Wrapper({ children }) {
    return children;
  }
  return { ...render(ui, { wrapper: Wrapper }) };
}
