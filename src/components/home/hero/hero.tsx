import styles from './hero.module.css';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function Hero(): ReactElement {
  return (
    <section className={styles.hero}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          O melhor hamburguer de Viamão
        </h1>

        <p 
          className={styles.hero}
        >
          Prezamos pela qualidade e pelo bom atendimento.
        </p>  
      </div>
    </section>

  ); 
}

// * ---------------------------------------------------------------------- * //

export { Hero };
