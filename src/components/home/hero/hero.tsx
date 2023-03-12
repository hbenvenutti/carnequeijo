import styles from './hero.module.css';

import type { ReactElement } from 'react';

import { stardos } from 'FONTS/stardos';

// * ---------------------------------------------------------------------- * //

function Hero(): ReactElement {
  return (
    <section className={styles.hero}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          O melhor burger de Viamão
        </h1>

        <p 
          className={styles.hero}
        >
          Prezamos pela qualidade e pelo bom atendimento.
        </p> 
      
      </div>
      
      <a 
        className={`${styles.cta} ${stardos.className}`} 
        href=""
      >
        Peça já o seu
      </a>
      


    </section>

  ); 
}

// * ---------------------------------------------------------------------- * //

export { Hero };
