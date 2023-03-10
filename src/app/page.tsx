
import styles from './page.module.css';

import type { ReactElement } from 'react';

import { InstaFeed } from 'COMPONENTS/instagram-feed/instagram-feed';
import { Hero } from 'COMPONENTS/home/hero/hero';
import { Info } from 'COMPONENTS/home/info/info';

// * ---------------------------------------------------------------------- * //

function Home(): ReactElement {
  return (
    <main className={styles.main}>
      <Hero />

      <Info />

      <InstaFeed />
    </main>
  );
}

// * ---------------------------------------------------------------------- * //

export default Home;
