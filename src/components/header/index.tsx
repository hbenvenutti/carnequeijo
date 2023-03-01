import { HeaderStyles } from './styles';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function Header(): ReactElement {
  return (
    <>
      <HeaderStyles />
      <header>Carne e Queijo</header>
    </>
  );
}

// * ---------------------------------------------------------------------- * //

export { Header };
