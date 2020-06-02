import React from 'react';

import './contact.scss';

import ContactUs from '../../components/contact-us/contact-us';
import Footer from '../../components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => (
  <div className='contact-page'>
    <div className='hero-text'>
      <h1>WELCOME HOME</h1>
      <span>Contact Us Today</span>
    </div>

    <div className='hero-image'></div>
    <div className='contact-info'>
      <h3>
        Thank you for considering Rock Solid Brick &amp; Masonry for your next
        masonry project. We look forward to hearing from you!
      </h3>
    </div>
    <div className='contact-phone'>
      <FontAwesomeIcon icon={faPhoneAlt} size='lg' />
      <a className='phone-number' href='tel:1-631-872-3865'>
        631-872-3865
      </a>
    </div>

    <ContactUs />
    <Footer />
  </div>
);

export default ContactPage;
