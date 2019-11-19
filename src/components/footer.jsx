import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className='footerAll'>
        <div className='l-footer first-footer'>
          <div className='footerSec footer-logo'>
            <a href='/' className='footerLink no-decoration'>
              <svg
                fill='#fff'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 291.4 1280 217.2'
              >
                <path d='M0 292.1v58.1h39.7v153.2h67.1V292.1M220.1 372.4h-31.4v-22.3h15.8v-58h-82.8v211.3h67v-79.9h31.4v79.9h67.2V292.1h-67.2M302 503.4h124.3v-58.2h-60.2v-24.6h38.3v-48.2h-38.3v-22.2h60.2v-58.1H302M954.8 363.6c0-45.6-33.7-71.5-81.5-71.5h-74.7v211.2h67.1v-54.1l38.4 54.1h75.7l-54.4-81c19.6-10.7 29.4-30.2 29.4-58.7M865.5 387v-39.3c9.3 0 20.7 2.8 24.1 13 .3.9.5 1.9.8 2.9 0 .1 0 .3.1.4.1 1 .3 2.2.3 3.4 0 15.7-14.3 19.6-25.3 19.6M559.2 420.8h-.6l-4.8-17.4-15-53.1h26.4l17.4-58.2h-134l76.8 211.2h68.8l8.3-22.6s36.8-99.8 56.9-154.2v176.8h124.3v-58.2h-60.2v-24.6h38.2v-48.1h-38.2v-22.2h60.2V292H598l-38.8 128.8zM1280 350.3v-58.1h-124.3v211.2H1280v-58.2h-60.3v-24.6h38.3v-48h-38.3v-22.3'></path>
                <path d='M1142.8 459.1V373H1048v48h35.3v17.1c-2.7 2.4-8.5 3.7-14.5 3.7-24.6 0-42.8-19.4-42.8-43.1s17.7-44.7 42.3-44.7c14.9 0 50.2.1 50.2.1v-62.6h-16.1c-30 0-59.9-2.4-87.4 11.8-21.7 11.2-38.9 30.2-48 52.8-5.3 13.3-8 27.7-8 42 0 59.9 47 110.4 107.9 110.4 30.2 0 59.7-11.3 75.8-25.4.1-14.6.1-16.8.1-24'></path>
              </svg>
            </a>
          </div>

          <div className='footerSec c-footer__section-links'>
            <ul className='FooterList'>
              <li>
                <a
                  className='no-decoration'
                  href='https://www.voxmedia.com/legal/terms-of-use'
                >
                  Terms of Use
                </a>
              </li>

              <li>
                <a
                  className='no-decoration'
                  href='https://www.voxmedia.com/legal/privacy-policy'
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  className='no-decoration'
                  href='https://www.voxmedia.com/legal/cookie-policy'
                >
                  Cookie Policy
                </a>
              </li>

              <li>
                <a
                  className='no-decoration'
                  href='https://www.voxmedia.com/legal/gdpr-commitment'
                >
                  GDPR Commitment
                </a>
              </li>

              <li>
                <a
                  className='no-decoration'
                  href='https://www.voxmedia.com/communications-preferences'
                >
                  Communications Preferences
                </a>
              </li>
            </ul>
            <ul className='FooterList'>
              <li>
                <a className='no-decoration' href='/contact-the-verge'>
                  Contact
                </a>
              </li>
              <li>
                <a
                  className='no-decoration'
                  href='https://www.theverge.com/a/tip-us-secure-contact-email'
                >
                  Tip Us
                </a>
              </li>

              <li>
                <a className='no-decoration' href='/community-guidelines'>
                  Community Guidelines
                </a>
              </li>

              <li>
                <a className='no-decoration' href='/about-the-verge'>
                  About
                </a>
              </li>

              <li>
                <a className='no-decoration' href='/ethics-statement'>
                  Ethics Statement
                </a>
              </li>
            </ul>

            <div className='FooterStatus '>
              <span>
                All Systems Operational
                <a
                  className='no-decoration'
                  href='http://status.voxmedia.com'
                  target='_blank'
                >
                  Check out our status page for more details.
                </a>
              </span>
            </div>
          </div>

          <div class='footerSec FooterLast'>
            <a className='footerB no-decoration' href='http://www.voxmedia.com'>
              <span className='FooterTxt'>Vox Media</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 254.42 33.54'
                class='VoxLogo'
                ria-labelledby='title'
                aria-describedby='description'
                role='img'
              >
                <title id='title'>Vox Media</title>
                <desc id='description'>Vox Media logo.</desc>
                <path
                  d='M229.88,262.35a16.77,16.77,0,1,0,16.77,16.77,16.77,16.77,0,0,0-16.77-16.77m0,25.08a8.32,8.32,0,1,1,7.92-8.31,8.12,8.12,0,0,1-7.92,8.31'
                  transform='translate(-179.16 -262.35)'
                ></path>
                <polygon points='0 0.66 16.97 33.38 33.95 0.66 24.05 0.66 17.07 14.31 10.09 0.66 0 0.66'></polygon>
                <rect x='208.65' y='0.66' width='9' height='32.26'></rect>
                <polygon points='170.15 8.74 170.15 0.66 145.41 0.66 145.41 32.92 170.15 32.92 170.15 24.84 154.82 24.84 154.82 20.68 169.01 20.68 169.01 12.91 154.82 12.91 154.82 8.74 170.15 8.74'></polygon>
                <path
                  d='M367.39,263H353.84v32.27h13.55a16.14,16.14,0,1,0,0-32.27m-.71,24.09h-3.74V271.19h3.74a8,8,0,1,1,0,15.91'
                  transform='translate(-179.16 -262.35)'
                ></path>
                <polygon points='131.07 14.94 131.07 32.92 140.17 32.92 140.17 0.66 128.9 0.66 121.92 14.12 114.94 0.66 103.67 0.66 103.67 32.92 112.57 32.92 112.57 14.94 121.82 32.77 131.07 14.94'></polygon>
                <polygon points='83.11 24.43 88.78 32.93 99.44 32.93 88.44 16.79 99.34 0.66 88.88 0.66 83.21 9.16 83.31 9.16 77.63 0.66 67.08 0.66 77.98 16.79 66.98 32.93 77.43 32.93 83.11 24.43'></polygon>
                <path
                  d='M412.55,284.07l4-11.53,4,11.53ZM422,263H411.38l-11.62,32.27h9l1.41-4.15H423l1.4,4.15h9.21Z'
                  transform='translate(-179.16 -262.35)'
                ></path>
              </svg>
            </a>
            <a
              className='footerB no-decoration'
              href='https://www.voxmedia.com/vox-advertising'
            >
              Advertise with us
            </a>
            <a
              className='footerB no-decoration'
              href='https://jobs.voxmedia.com'
            >
              Jobs @ Vox Media
            </a>
            © 2019{' '}
            <a className='no-decoration' href='http://www.voxmedia.com'>
              Vox Media
            </a>
            , LLC. All Rights Reserved
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
