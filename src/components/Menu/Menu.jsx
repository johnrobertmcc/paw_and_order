import OutsideClickHandler from '@/components/OutsideClickHandler';
import { usePathname } from 'next/navigation';
import {
  ReactElement,
  createElement,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import styles from './Menu.module.css';
import { NAV_LINKS } from './Menu.utils';

/**
 *
 * @returns {ReactElement}
 */
export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const triggerNode = useRef();

  const pathname = usePathname();

  /**
   * Simple function used to close or click the toggle.
   * @returns {VoidFunction} Triggers react state updates.
   */
  function toggle() {
    return setOpenMenu((prev) => !prev);
  }

  useLayoutEffect(() => {
    if (pathname) {
      setOpenMenu(false);
    }
  }, [pathname]);

  return (
    <>
      <button
        onClick={toggle}
        className={styles.menu}
        ref={triggerNode}
        data-testid="menu"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 8H13.75M5 12H19M10.25 16L19 16"
            stroke="#464455"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {openMenu && (
        <OutsideClickHandler
          tag="nav"
          className={styles.dropdown}
          onOutsideClick={() => setOpenMenu(false)}
          triggerNode={triggerNode?.current}
        >
          <ul>
            {NAV_LINKS.map((link, i) => {
              return (
                <li key={i} data-testid={`link_${i}`}>
                  {createElement(link.type, { ...link }, link.key)}
                </li>
              );
            })}
          </ul>
        </OutsideClickHandler>
      )}
    </>
  );
}
