import type { ReactElement } from 'react';
import type { LayoutProps } from 'TYPES/next';

import { Header } from 'COMPONENTS/header/header';
import { roboto } from 'FONTS/roboto';

import 'STYLES/globals.css';

// * ---------------------------------------------------------------------- * //

export const metadata = {
  title: 'Carne e Queijo',
  description: 'CARNE E QUEIJO | Viamão \n\
  Hamburgueria\n\
  • Delivery de burgers & porções •\n\
  ⚡️ Funcionamento de quarta a domingo, das 19h às 22h30'
};

// -------------------------------------------------------------------------- //

function RootLayout({ children }: LayoutProps): ReactElement {
  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <html lang="pt-br">

      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

// * ---------------------------------------------------------------------- * //

export default RootLayout;
