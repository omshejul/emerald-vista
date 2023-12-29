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
];

const Carousel = () => {
  return (
    <div className={styles.slider}>
    <div className={styles.slidetrack}>
      {companyLogos.map((logo, index) => (
        <div className={styles.slide}>
        <Image className=' object-contain' key={index} src={logo} alt={`Company Logo ${index + 1}`} width={450} height={200} />
        </div>
      ))}
      {companyLogos.map((logo, index) => ( // Duplicate for continuous loop
      <div className={styles.slide}>
        <Image className=' object-contain' key={`duplicate-${index}`} src={logo} alt={`Company Logo ${index + 1}`} width={450} height={200} />
      </div>
      ))}
    </div>
    </div>
  );
};

export default Carousel;

  
//   <div class="slider">
//       <div class="slide-track">
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
//           </div>
//           <div class="slide">
//               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
//           </div>
//       </div>
//   </div>