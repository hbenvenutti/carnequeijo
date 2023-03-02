import styles from './page.module.css';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function Home(): ReactElement {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
    </main>
  );
}

// * ---------------------------------------------------------------------- * //

export default Home;
