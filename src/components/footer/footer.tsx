import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

import styles from './footer.module.css';

import type { ReactElement } from 'react';

import { Logo } from 'ASSETS/logo';

// * ---------------------------------------------------------------------- * //

function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <div className={styles.sectionItem}>
          <strong>Mapa do Site</strong>
          <a href="">Cardápio</a>
          <a href="">Nossa Hitória</a>
          <a href="">Localização</a>
        </div>

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

          <strong>Siga nossas redes</strong>
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
          <p>Fique de olho nas oportunidades que postamos nas redes sociais</p>
        </div>

        <div className={styles.sectionItem}>
          <strong>Parceiros</strong>
          <p>Parceiros do CQ aqui</p>
        </div>

        <div className={`${styles.sectionItem} ${styles.logo}`}>
          <Logo />
        </div>
      </section>

      <section>
        <p>
          Razão Social: Carne e Queijo | CNPJ: 00.000.000/0001-00 | Telefone:
          (51) 98597-0427 | Endereço: Rua Luiz Carlos de Azevedo, 83, Centro,
          Viamão, RS, Brasil
        </p>
      </section>
    </footer>
  );
}

// * ---------------------------------------------------------------------- * //

export { Footer };
