import PropTypes from 'prop-types';
import styles from './404.module.css';
/**
* A FourOhFour page used for fallback routing
*
* @author  johnrobertmcc
* @since   05/26/2024
* @version 1.0.0
* @param   {object}  props           The component destructured as props.
* @param   {string}  props.component The name of the component.
* @return  {Element}                 The FourOhFour component.
*/
export default function FourOhFour({component}) {
  return <p className={styles.string}>{component} component</p>;
}
FourOhFour.propTypes = {
component: PropTypes.string
};
FourOhFour.defaultProps = {
component: 'FourOhFour'
};
