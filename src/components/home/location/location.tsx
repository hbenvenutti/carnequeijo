import { MdLocationOn } from 'react-icons/md';

import { GoogleMap } from './google-map/google-map';
import styles from './location.module.scss';

import type { ReactElement } from 'react';

import { stardos } from 'FONTS/stardos';

// * ---------------------------------------------------------------------- * //

function Location(): ReactElement {
  return (
    <section
      id="location"
      className={styles.location}
    >
      <h2 className={stardos.className}>
        <MdLocationOn />
        Localização
      </h2>

      <div className={styles.card}>
        <div className={styles.text}>
          <strong>Rua Luiz Carlos de Azevedo, 83</strong>
          <p>Centro, Viamão-RS</p>
        </div>

        <div className={styles.text}>
          <strong>Quarta a Domingo</strong>
          <p>19h às 22:30</p>
        </div>
        <GoogleMap />
      </div>
    </section>
  );
}

// * ---------------------------------------------------------------------- * //

export { Location };
