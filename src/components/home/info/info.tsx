import { GiDeliveryDrone } from 'react-icons/gi';
import { BsClock } from 'react-icons/bs';

import styles from './info.module.css';

import type { ReactElement } from 'react';

import { IfoodLogo } from 'ASSETS/ifood-logo';

// * ---------------------------------------------------------------------- * //

function Info():ReactElement {
  return (
    <section className={styles.info}>
      <div className={styles.sectionItem}>
        <GiDeliveryDrone className={styles.svg} />
        <strong>Tele-entrega</strong>
        <p>Atendemos em Viamão.</p>
      </div>

      <div className={styles.sectionItem}>
        <BsClock className={styles.svg} />
        <strong>Horário de Atendimento</strong>
        <p>Quarta a Domingo, das 19h às 22:30. </p>
      </div>

      <div className={styles.sectionItem}>
        <IfoodLogo className={`${styles.svg} ${styles.ifood}`} />
        <strong>Aplicativos</strong>
        <p>Peça pelos apps parceiros.</p>
      </div>
    </section>
  );
}

// * ---------------------------------------------------------------------- * //

export { Info };
