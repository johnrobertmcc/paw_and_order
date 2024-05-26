'use client';
import PropTypes from 'prop-types';
/**
 * A donation form to donate through Stripe.js
 *
 * @author  johnrobertmcc
 * @since   05/26/2024
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.component The name of the component.
 * @return  {Element}                 The DonationForm component.
 */
export default function DonationForm({ component }) {


  return (
      <button type="submit">Donate</button>
  );
}
DonationForm.propTypes = {
  component: PropTypes.string
};
DonationForm.defaultProps = {
  component: 'DonationForm'
};
