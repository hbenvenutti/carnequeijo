import styles from './footer.module.css';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <section>

        <div className={styles.map}>
          <strong>Mapa do Site</strong>
          <a href="">Cardápio</a>
          <a href="">Nossa Hitória</a>
          <a href="">Localização</a>
        </div>

        <div>
          <strong>Contato</strong>
          Whatsapp: (51) 99999-9999
        </div>
      </section>
      
      <section>
        <p>
          Razão Social: Carne e Queijo | CNPJ: 00.000.000/0001-00 |
          Telefone: (51) 99999-9999 | Endereço: Rua Luiz Carlos de Azevedo, 83, 
          Centro, Viamão, RS, Brazil
        </p>
      </section>
    </footer>
  );
}

// * ---------------------------------------------------------------------- * //

export { Footer };
