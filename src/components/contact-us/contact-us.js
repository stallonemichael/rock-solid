import React, { useState } from 'react';

import './contact-us.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='contact-us'>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='name'
          type='name'
          value={formData.name}
          label='Name'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='email'
          type='email'
          label='Email'
          value={formData.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name='phone'
          type='tel'
          label='Phone'
          value={formData.phone}
          handleChange={handleChange}
          required
        />
        <FormInput
          name='message'
          type='text'
          label='How can we help?'
          value={formData.message}
          onChange={handleChange}
          required
        />

        <CustomButton type='submit' value='Submit'>
          Submit
        </CustomButton>
      </form>
    </div>
  );
};

export default ContactUs;
