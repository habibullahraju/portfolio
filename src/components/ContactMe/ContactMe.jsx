import { FaPhone } from 'react-icons/fa';
import { HiLocationMarker, HiMail } from "react-icons/hi";

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ilnqej8', 'template_7k8fhbn', form.current, 'e1aGiIVqnreIQWRmX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.user_name.value = ''
      e.target.user_lastName.value = ''
      e.target.user_email.value = ''
      e.target.message.value = ''
  };
  return (
    <div className='max-w-7xl mx-auto' id='contact'>
      <h3 className="text-5xl mb-20 text-white uppercase text-center font-semibold">
        <span className="text-accent">get</span> in touch
      </h3>
      <div className="lg:flex justify-center lg:justify-between text-center">
        <div className="space-y-4 text-xl text-center mb-8">
          <h2 className='text-3xl  text-white mb-10'>Contact Info</h2>
          <div className='flex gap-4 items-center justify-center lg:justify-start '><HiLocationMarker className='text-[22px]'></HiLocationMarker> <span>Tangail,Dhaka Bangladesh</span></div>
           <h2 className='flex gap-4 justify-center lg:justify-start items-center'><HiMail className='text-[22px]'></HiMail> habibullah7r@gmail.com</h2>
           <h2 className='flex justify-center lg:justify-start gap-4 items-center'><FaPhone></FaPhone> +880 1770587933</h2>
        </div>
        <div className="lg:w-2/3 ">
          <form ref={form} onSubmit={sendEmail}>
          <div className="lg:flex text-xl gap-8">
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text text-xl">First Name</span>
            </label>
            <input
              type="text"
              required
              name='user_name'
              placeholder="First Name"
              className="input input-accent input-bordered w-full max-w-full"
            />
          </div>
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text text-xl">Last Name</span>
            </label>
            <input
              type="text"
              name='user_lastName'
              placeholder="Last Name"
              className="input input-accent input-bordered w-full max-w-full"
            />
          </div>
          </div>
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text text-xl">Email Address</span>
            </label>
            <input
              type="text"
              name='user_email'
              required
              placeholder="Email Address"
              className="input input-accent input-bordered w-full max-w-full"
            />
          </div>
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text text-xl">Message</span>
            </label>
            <textarea name='message' required className="textarea textarea-accent" placeholder="Message"></textarea>
          </div>
          <div className="form-control w-full max-w-full lg:max-w-xs">
            <button className="btn btn-accent  my-5"><input type="submit" value="Send Message" /></button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
