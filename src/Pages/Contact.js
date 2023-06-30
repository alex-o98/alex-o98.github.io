import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../components/BaseComponents/NavBar';
import EmailSender from '../components/ContactComponents/EmailSender';
import EmailContent from '../components/ContactComponents/EmailContent';

export const Contact = () => {

  return (
    <>
    <div className='h-[100vh] bg-background'>
      <NavBar/>
      <EmailContent/>
      <EmailSender/>
    </div>
    </>
  );
};