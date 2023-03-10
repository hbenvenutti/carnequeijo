'use client';

import { FaInstagram } from 'react-icons/fa';

import styles from './instafeed.module.css';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function InstaFeed(): ReactElement {
  return (
    <section className={styles.feed}>
      <FaInstagram width="150px" height="150px" />
      <h2>Acompanhe as nossas Redes Sociais</h2>

      <p>Nessa seção haverá uma galeria de posts do instagram</p>
    </section>
  );
}

// * ---------------------------------------------------------------------- * //

export { InstaFeed };

