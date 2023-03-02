import type { ReactElement } from 'react';
import styles from './header.module.css';

// * ---------------------------------------------------------------------- * //

function Header(): ReactElement {
  return (
    <>
      <header className={styles.header}>Carne e Queijo</header>
    </>
  );
}

// * ---------------------------------------------------------------------- * //

export { Header };
