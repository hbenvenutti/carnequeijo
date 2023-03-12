import { FaHamburger } from 'react-icons/fa';

import styles from './header.module.scss';
import { links } from './links';

import type { ReactElement } from 'react';

import { Logo } from 'ASSETS/logo';
import { stardos } from 'FONTS/stardos';

// * ---------------------------------------------------------------------- * //

function Header(): ReactElement {
  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <header className={`${styles.header} ${stardos.className}`}>
      <a
        href="#hero"
        className={`${styles.logo}`}
      >
        <figure>
          <Logo />
        </figure>
      </a>

      <nav className={styles.nav}>
        {links.map(link => {
          return (
            <div
              className={styles.link}
              key={link.title}
            >
              <FaHamburger />

              <a
                key={link.title}
                href={link.path}
              >
                {link.title}
              </a>
            </div>
          );
        })}
      </nav>
    </header>
  );
}

// * ---------------------------------------------------------------------- * //

export { Header };
