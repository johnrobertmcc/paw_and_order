import Container from '@/components/Container';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import styles from './Header.module.css';

/**
 * A semantic HTML5 header with the appropriate logo and Nav menu.
 * @author  johnrobertmcc
 * @returns {ReactElement} Returns a header element.
 */
export default function Header() {
  const pathname = usePathname();

  const [isDetached, setIsDetached] = useState(false);

  useLayoutEffect(() => {
    /**
     * Determine if the body scroll is greater than 120px.
     */
    function handleScroll() {
      const position = window.scrollY;
      setIsDetached(!!(position >= 50));
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container
      tag="header"
      className={cn(styles.header, { [styles.detached]: isDetached })}
    >
      <Link
        href="/"
        className={styles.link}
        aria-label="Label"
        aria-current={pathname === '/'}
      >
        <Logo />
      </Link>
      <Menu />
    </Container>
  );
}
