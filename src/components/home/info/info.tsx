
import { GiDeliveryDrone } from 'react-icons/gi';
import { SiIfood } from 'react-icons/si';
import { BsClock } from 'react-icons/bs';

import styles from './info.module.css';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function Info():ReactElement {
  return (
    <section className={styles.info}>
      <div className={styles.sectionItem}>
        <GiDeliveryDrone className={styles.svg} />
        <strong>Delivery</strong>
        <p>Tele-entrega para toda Viamão.</p>
      </div>

      <div className={styles.sectionItem}>
        <BsClock className={styles.svg} />
        <strong>Horário de Atendimento</strong>
        <p>Quarta a Domingo, das 19h às 22:30 </p>
      </div>

      <div className={styles.sectionItem}>
        <SiIfood className={`${styles.svg} ${styles.ifood}`} />
        <strong>Aplicativos</strong>
        <p>Estamos no Ifood!</p>
      </div>
    </section>
  );
}

// * ---------------------------------------------------------------------- * //

export { Info };
