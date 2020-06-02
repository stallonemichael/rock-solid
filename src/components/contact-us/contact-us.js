import React, { useState } from 'react';

import './contact-us.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import axios from 'axios';
import 'firebase/firestore';
import { db } from '../../firebase/firebase.utils';

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
        setTimeout(
          () => setErrorAlert({ alertMessage: 'Message sent successfully' }),
          3000
        );
        db.collection('emails/').add({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((err) => {
        setTimeout(
          () => setErrorAlert({ alertMessage: 'Message failed to send' }),
          3000
        );
      });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      errorAlert: '',
    });
  };

  return (
    <div className='contact-us'>
      <form onSubmit={handleSubmit}>
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

        <CustomButton type='submit' value='Submit'>
          Submit
        </CustomButton>
        <div className='form-message'>{errorAlert.alertMessage}</div>
      </form>
    </div>
  );
};

export default ContactUs;
