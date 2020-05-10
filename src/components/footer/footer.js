import React from 'react';

import './footer.scss';

const Footer = () => (
  <div className='footer'>
    {/*     <div className='footer-container'>
      <div className='row'>
        <div className='column-1'>
          <ul className='list-1'>
            <li className='items'>
              <a href='/'>Driveways</a>
            </li>
            <li className='items'>
              <a href='/'>Patios</a>
            </li>
            <li className='items'>
              <a href='/'>Outdoor Living</a>
            </li>
            <li className='items'>
              <a href='/'>Fire Pits</a>
            </li>
            <li className='items'>
              <a href='/'>Pool Patios</a>
            </li>
          </ul>
        </div>
        <div className='column-2'>
          <ul className='list-2'>
            <li className='items'>
              <a href='/'>Steps</a>
            </li>
            <li className='items'>
              <a href='/'>Stoops</a>
            </li>
            <li className='items'>
              <a href='/'>Veneer</a>
            </li>
            <li className='items'>
              <a href='/'>Walkways</a>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
    <div className='contact-us'>Contact Us</div>
    <a href='tel:+1631-872-3865' className='phone'>
      631-872-3865
    </a>
    <div className='divider'></div>
    <div className='copyright'>&copy; 2020 Rock Solid Brick &amp; Masonry</div>
  </div>
);

export default Footer;
