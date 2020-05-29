import React from 'react';

import './contact.scss';

import ContactUs from '../../components/contact-us/contact-us';
import Footer from '../../components/footer/footer';

const ContactPage = () => (
  <div className='contact-page'>
    <div className='contact-text'>
      <h1>WELCOME HOME</h1>
      <span>Contact Us Today</span>
    </div>

    <div className='contact-image'></div>
    <ContactUs />
    <Footer />
  </div>
);

export default ContactPage;
