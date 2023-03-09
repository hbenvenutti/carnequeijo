'use client';

import { FaHamburger } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './header.module.css';
import { links } from './links';

import type { ReactElement } from 'react';

import { Logo } from 'ASSETS/logo';
import { stardos } from 'FONTS/stardos';

// * ---------------------------------------------------------------------- * //

function Header(): ReactElement {
  // *** --- Contexts --------------------------------------------------- *** //
  const pathname = usePathname();

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <header className={`${styles.header} ${stardos.className}`}>
      <Link 
        href="/" 
        className={`${styles.logo}`}
      >
        <Logo />
      </Link>

      <nav className={styles.nav}>
        {
          links.map(link => {
            const className = pathname === link.path 
              ? styles.active 
              : styles.inactive;
            
            return (

              <div className={styles.link} key={link.title}>
                <FaHamburger className={className} />
                {/* {className === styles.active && <FaHamburger />} */}
                
                <Link 
                  key={link.title}
                  href={link.path}
                  className={className}
                > 
                  {link.title} 
                </Link>
              </div>
            );
          }
          )
        }
      </nav>
      
      <a className={styles.callToAction} href="">Faça o seu pedido</a>
    </header>
  );
}

// * ---------------------------------------------------------------------- * //

export { Header };
