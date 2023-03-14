import styles from './hero.module.scss';

import type { ReactElement } from 'react';

import { stardos } from 'FONTS/stardos';

// * ---------------------------------------------------------------------- * //

function Hero(): ReactElement {
  return (
    <section
      id="hero"
      className={styles.hero}
    >
      <div className={styles.heroWrapper}>
        <div className={styles.text}>
          <h1>O melhor burger de Viamão</h1>

          <p>Delivery de burgers e porções.</p>
        </div>

        <a
          className={`${styles.cta} ${stardos.className}`}
          href=""
        >
          Peça já o seu
        </a>
      </div>
    </section>
  );
}

// * ---------------------------------------------------------------------- * //

export { Hero };
