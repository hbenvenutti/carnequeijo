
import type { ReactElement } from 'react';

import { GoogleMap } from 'COMPONENTS/google-map/google-map';

// * ---------------------------------------------------------------------- * //

function location(): ReactElement {
  return (
    <main>
      <h1>Localização</h1>
      
      <GoogleMap />
    </main>
  );
}

// * ---------------------------------------------------------------------- * //

export default location;
