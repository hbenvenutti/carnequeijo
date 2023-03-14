import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

import styles from './footer.module.scss';

import type { ReactElement } from 'react';

import { Logo } from 'ASSETS/logo';

// * ---------------------------------------------------------------------- * //

function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <div className={styles.sectionItem}>
          <strong>Contato</strong>
          <p>
            <a
              className={styles.whats}
              target="_blank"
              href="https://wa.me/555185970427"
              rel="noreferrer"
            >
              <BsWhatsapp />
            </a>
            (51) 98597-0427
          </p>
        </div>

        <div className={styles.sectionItem}>
          <strong>Redes Sociais</strong>
          <p>
            <a href="https://www.instagram.com/burgercarnequeijo/">
              <BsInstagram />
            </a>

            <a href="">
              <BsFacebook />
            </a>
          </p>
        </div>

        <div className={styles.sectionItem}>
          <strong>Trabalhe conosco</strong>
          <p>Fique de olho nas oportunidades que postamos nas redes sociais.</p>
        </div>

        <div className={styles.sectionItem}>
          <strong>Parceiros</strong>
          <p>Parceiros do CQ aqui</p>
        </div>
      </section>

      <section className={styles.logo}>
        <Logo />
      </section>

      <section className={styles.legal}>
        <p>Razão Social: Carne e Queijo | CNPJ: 00.000.000/0001-00</p>

        <p>(51) 98597-0427</p>

        <p>Rua Luiz Carlos de Azevedo, 83, Centro, Viamão, RS, Brasil</p>
      </section>
    </footer>
  );
}

// * ---------------------------------------------------------------------- * //

export { Footer };
