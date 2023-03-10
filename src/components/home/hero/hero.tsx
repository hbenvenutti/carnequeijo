import Image from 'next/image';

import styles from './hero.module.css';

import type { ReactElement } from 'react';

import hamburguer from 'ASSETS/images/hamburger.webp';
import { Logo } from 'ASSETS/logo';

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
  
        <Image
          className={styles.hamburger}
          alt='' 
          src={hamburguer}
        />
      </div>
      <Logo />
    </section>

  ); 
}

// * ---------------------------------------------------------------------- * //

export { Hero };
