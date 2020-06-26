import React, { useState } from 'react';

import axios from 'axios';
import { firestore } from '../../firebase/firebase.utils';

import {
  ContactUsContainer,
  FormContainer,
  ButtonContainer,
  FormMessageContainer,
} from './contact-us.styled';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

const ContactUs = () => {
  const [formData, setFormData] = useState({});
  const [errorAlert, setErrorAlert] = useState({
    alertMessage: null,
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        'https://us-central1-rock-solid-22d30.cloudfunctions.net/submit',
        formData
      )
      .then((res) => {
        setTimeout(() => setErrorAlert({ alertMessage: '' }), 2000);
        firestore.collection('emails').add({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((err) => {
        setErrorAlert({ alertMessage: 'Message failed to send' });
        setTimeout(() => setErrorAlert({ alertMessage: '' }), 2000);
      });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      errorAlert: '',
    });
    setErrorAlert({ alertMessage: 'Message sent successfully' });
  };

  return (
    <ContactUsContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          name='name'
          type='name'
          value={formData.name || ''}
          label='Name'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='email'
          type='email'
          label='Email'
          value={formData.email || ''}
          handleChange={handleChange}
          required
        />
        <FormInput
          name='phone'
          type='tel'
          label='Phone'
          value={formData.phone || ''}
          handleChange={handleChange}
          required
        />
        <FormInput
          name='message'
          type='text'
          label='How can we help?'
          value={formData.message || ''}
          onChange={handleChange}
          required
        />
        <ButtonContainer>
          <CustomButton type='submit' value='Submit'>
            Submit
          </CustomButton>
        </ButtonContainer>

        <FormMessageContainer>{errorAlert.alertMessage}</FormMessageContainer>
      </FormContainer>
    </ContactUsContainer>
  );
};

export default ContactUs;
