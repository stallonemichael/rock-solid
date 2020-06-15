import React from 'react';

import {
  ContactPageContainer,
  HeroImage,
  HeroText,
  ContactInfo,
  ContactPhone,
  PhoneNumber,
} from './contact.styled';

import ContactUs from '../../components/contact-us/contact-us';
import Footer from '../../components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => (
  <ContactPageContainer>
    <HeroText>
      <h1>WELCOME HOME</h1>
      <span>Contact Us Today</span>
    </HeroText>
    <HeroImage />
    <ContactInfo>
      <h3>
        Thank you for considering Rock Solid Brick &amp; Masonry for your next
        masonry project. We look forward to hearing from you!
      </h3>
    </ContactInfo>
    <ContactPhone>
      <FontAwesomeIcon icon={faPhoneAlt} size='lg' />
      <PhoneNumber href='tel:1-631-872-3865'>631-872-3865</PhoneNumber>
    </ContactPhone>

    <ContactUs />
    <Footer />
  </ContactPageContainer>
);

export default ContactPage;
