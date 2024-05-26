import Footer from '@/layout/Footer';
import cn from 'classnames';
import { ReactElement } from 'react';
import PageHeader from './Head';
import Header from './Header';
import styles from './Layout.module.css';

/**
 * General layout of the _app, complete with semantic helmet, Header, Main children, and Footer.
 * @author  johnrobertmcc
 * @param   {object}              props                The component as props.
 * @param   {Array<ReactElement>} props.children       The children of the component.
 * @param   {object}              props.head           The optional head elements from pageProps.
 * @returns {ReactElement}                             The element as described.
 */
export default function Layout({ children, head = {}, options = {} }) {
  return (
    <>
      <PageHeader {...head}>
        <link rel="icon" href="/favicon.png" />
      </PageHeader>
      <Header />
      <main className={cn(styles.main)}>{children}</main>
      <Footer />
    </>
  );
}
