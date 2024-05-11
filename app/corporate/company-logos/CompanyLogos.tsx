import React from 'react';
import Image from 'next/image';
import styles from './CompanyLogos.module.css';

const companyLogos = [
    '/corporate/company-logos/image-1.png',
    '/corporate/company-logos/image-2.png',
    '/corporate/company-logos/image-3.png',
    '/corporate/company-logos/image-4.png',
    '/corporate/company-logos/image-5.png',
    '/corporate/company-logos/image-6.png',
    '/corporate/company-logos/image-7.png',
    '/corporate/company-logos/image-8.png',
    '/corporate/company-logos/image-9.png',
    '/corporate/company-logos/image-10.png',
    '/corporate/company-logos/image-11.png',
    '/corporate/company-logos/image-12.png',
    '/corporate/company-logos/image-13.png',
    '/corporate/company-logos/image-14.png',
    '/corporate/company-logos/image-15.png',
    '/corporate/company-logos/image-16.png',
    '/corporate/company-logos/image-17.png',
    '/corporate/company-logos/image-18.png',
];

const Carousel = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slidetrack}>
        {companyLogos.map((logo, index) => (
          <div key={index} className={styles.slide}>
            <Image src={logo} alt={`Company Logo ${index + 1}`} width={450} height={200} />
          </div>
        ))}
        {companyLogos.map((logo, index) => (
          <div key={`duplicate-${index}`} className={styles.slide}>
            <Image src={logo} alt={`Company Logo ${index + 1}`} width={450} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};



export default Carousel;

  