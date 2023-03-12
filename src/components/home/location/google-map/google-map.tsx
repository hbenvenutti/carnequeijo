import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function GoogleMap(): ReactElement {
  const source = 'https://www.google.com/maps/' +
    'embed?pb=!1m18!1m12!1m3!1d2820.547655118264!2d-51.02261984715309' +
    '!3d-30.079825467406934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2' + 
    '!1s0x95199f5199370371%3A0x28084e9706253a6d!2sR.%20Lu%C3%ADs%20Carlos' + 
    '%20de%20Azevedo%2C%2083%20-%20Tarum%C3%A3%2C%20Viam%C3%A3o%20-%20RS' +
    '%2C%2094415-600!5e0!3m2!1spt-BR!2sbr!4v1678379936007!5m2!1spt-BR!2sbr';

  // *** --- TSX -------------------------------------------------------- *** //

  return ( 
    <iframe 
      src={ source } 
      width="600" 
      height="450" 
      style={{ border: 0 }} 
      allowFullScreen={true} 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

// * ---------------------------------------------------------------------- * //

export { GoogleMap };
