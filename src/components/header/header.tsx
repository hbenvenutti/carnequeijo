import { FaHamburger } from 'react-icons/fa';

import styles from './header.module.css';


import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <FaHamburger />

        <div className={styles.logoText}>
          <p className={styles.carne}>
            Carne e 
          </p>
          <p className={styles.queijo}>
            Queijo
          </p>
        </div>
      </div>
    </header>
  );
}

// * ---------------------------------------------------------------------- * //

export { Header };
