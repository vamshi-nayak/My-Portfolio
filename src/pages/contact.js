import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Head from 'next/head';
import { Snackbar } from '@mui/material';
import TransitionEffect from '@/components/TransitionEffect';




const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gsa9dk8', 'template_6e4dndc', form.current, 'e-RMfW2_Z4oPMTw-1')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <TransitionEffect/>
      <div className="container mx-auto mt-0 px-4 py-16 sm:py-8 xs:py-4">
      <h1 className='text-4xl font-bold text-center mb-8 dark:text-light sm:text-3xl xs:text-2xl' >Contact Me
        
      </h1>
        <form ref={form} onSubmit={handleSubmit} className="max-w-lg lg:max-w-md md:max-w-sm sm:max-w-xs mx-auto bg-white p-8 sm:p-6 xs:p-4 shadow-lg rounded-lg border-2 border-solid border-dark dark:bg-light dark:text-light">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2 sm:text-sm xs:text-xs ">Name</label>
            <input type="text" id="name" name="from_name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-lg sm:px-2 sm:py-1 xs:px-1 xs:py-0.5" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2 sm:text-sm xs:text-xs">Email</label>
            <input type="email" id="email" name="from_email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-lg sm:px-2 sm:py-1 xs:px-1 xs:py-0.5" required />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-bold mb-2 sm:text-sm xs:text-xs">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" className="w-full px-3 py-2 border rounded-lg sm:px-2 sm:py-1 xs:px-1 xs:py-0.5" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message"  className="block text-gray-700 font-bold mb-2 sm:text-sm xs:text-xs">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="4" className="w-full px-3 py-2 border rounded-lg sm:px-2 sm:py-1 xs:px-1 xs:py-0.5" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-dark
             hover:bg-dark
              text-white font-bold py-2 px-4 rounded sm:py-1 sm:px-2 xs:py-0.5 xs:px-1">
              Send Message
            </button>
            
          </div>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </>
  );
};

export default Contact;
