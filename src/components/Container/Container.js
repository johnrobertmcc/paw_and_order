import cn from 'classnames';
import { createElement, ReactElement } from 'react';
import styles from './Container.module.css';

/**
 * Function used to contain it's children inside of a predetermined max-width.
 * @author  johnrobertmcc
 * @param   {object}       props          The component as props.
 * @param   {ReactElement} props.children The children of the container.
 * @param   {?string}      props.tag      String of the elment to create. Defaults to article.
 * @returns {ReactElement}                Returns a constructed element using createElement.
 */
export default function Container({ children, tag = 'article', ...rest }) {
  return createElement(
    tag,
    {
      ...rest,
      className: cn(styles.contained, { [rest?.className]: !!rest?.className })
    },
    children
  );
}
