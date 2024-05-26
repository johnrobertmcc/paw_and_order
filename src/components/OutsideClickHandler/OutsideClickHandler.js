import { createElement, ReactElement, useLayoutEffect, useState } from 'react';

/**
 * Function used to watch the document for mousedown events and activeElement
 * to determine if the active element is inside of the approved zone.
 * @author  johnrobertmcc
 * @param   {object}              props                The component as props.
 * @param   {string}              props.tag            The element to compose.
 * @param   {Array<ReactElement>} props.children       The children of the component.
 * @param   {Function}            props.onOutsideClick Function to invoke outside of the zone.
 * @param   {HTMLElement}         props.triggerNode    The ref of the trigger to ignore.
 * @returns {ReactElement}                             The element as described.
 */
export default function OutsideClickHandler({
  tag = 'div',
  children = null,
  onOutsideClick = () => {},
  triggerNode = null,
  ...rest
}) {
  const [childNode, setChildNode] = useState();

  /**
   * Function invoked on the onBlur to determine if the document's activeElement is inside of the zone.
   */
  function onBlur() {
    requestAnimationFrame(() => {
      if (!childNode?.contains(document.activeElement)) {
        onOutsideClick();
      }
    });
  }

  /**
   * React.useLayoutEffect used to assign and remove a listener to mousedown.
   */
  useLayoutEffect(() => {
    /**
     * Function used to be assigned to mousedown.
     * @param {Event} e The click event.
     */
    function outsideClick(e) {
      e?.stopPropagation();
      requestAnimationFrame(() => {
        if (!childNode?.contains(e?.target) && e.type === 'mousedown') {
          if (document.activeElement !== triggerNode) {
            onOutsideClick();
          }
        }
      });
    }

    /**
     * Function used to determine if the escape key is pressed.
     * @param {Event} e The keydown event.
     */
    function onEscape(e) {
      if (e?.key === 'Escape') {
        e?.preventDefault();
        onOutsideClick();
      }
    }
    document.addEventListener('mousedown', outsideClick);
    document.addEventListener('keydown', onEscape);

    return () => {
      document.removeEventListener('mousedown', outsideClick);
      document.removeEventListener('keydown', onEscape);
    };
  }, [childNode]);

  return createElement(
    tag,
    { ref: (e) => setChildNode(e), onBlur, ...rest },
    children
  );
}
