import styles from './header.module.css';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function Header(): ReactElement {
  return (
    <header className={styles.header}>Carne e Queijo</header>
  );
}

// * ---------------------------------------------------------------------- * //

export { Header };
