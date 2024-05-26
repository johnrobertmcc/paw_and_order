import PropTypes from 'prop-types';
import styles from './Footer.module.css';

/**
* A semantic HTML5 footer used to shared additional details and SEO strategies
*
* @author  johnrobertmcc
* @since   05/26/2024
* @version 1.0.0
* @param   {object}  props           The component destructured as props.
* @param   {string}  props.component The name of the component.
* @return  {Element}                 The Footer component.
*/
export default function Footer({component}) {
  return <footer className={styles.footer}>  Footer</footer>
}
Footer.propTypes = {
component: PropTypes.string
};
Footer.defaultProps = {
component: 'Footer'
};
1