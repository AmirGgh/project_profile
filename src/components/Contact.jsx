import React, { useState } from "react";
import { FaPhone, FaLinkedin, FaEnvelope, FaGithub, FaRegFileAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [email, setEmail] = useState(false)
  return (
    <div
      name='contact'
      className='w-full xl:h-screen  flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/fbea8dd6-626f-4e8f-86f1-b45a3e9725b8'
        className='flex flex-col max-w-[600px] w-full h-full justify-center'
      >
        <div className='pb-8'>
          <p className='text-4xl  font-bold inline border-b-4  border-pink-600 text-gray-300'>
            Contact
          </p>

          <div className='flex items-center pt-3'>
            <FaLinkedin className='text-gray-300 mr-2' />
            <a href='https://www.linkedin.com/in/amir-gez/' className='text-gray-300 py-2 '> LinkedIn</a>
          </div>
          <div className='flex items-center '>
            <FaGithub className='text-gray-300 mr-2' />
            <p className='text-gray-300 pt-3 pb-1'>
              <a href='https://github.com/AmirGgh' className='text-gray-300'>Github</a>
            </p>
          </div>
          <div className='flex items-center'>
            <FaRegFileAlt className='text-gray-300  mr-2' />
            <p className='text-gray-300 pt-3'>
              <a href='https://drive.google.com/file/d/1vK2kfIUIIXdhR3RACpizfKtobaAcByAg/view?usp=share_link' className='text-gray-300  '> Resume</a>
            </p>
          </div>
          <div className='flex items-center'>
            <FaWhatsapp className='text-gray-300 mr-2' />
            <a className='text-gray-300 py-3' href="https://wa.me/0528703824">WhatsUp</a>
          </div>
          <div className='flex items-center'>
            <FaPhone className='text-gray-300 mr-2' />
            <p className='text-gray-300 pt-3'> +952-870-3824</p>
          </div>
          <div className='flex items-center'>
            <FaEnvelope className='text-gray-300 mr-2 cursor-pointer' onClick={() => setEmail(!email)} />
            <p className='text-gray-300 pt-3'> amir.gez.p@gmail.com</p>
          </div>
        </div>
        <br />
        {email && <>
          <input
            className='bg-[#e1e8ff] p-2'
            type='text'
            placeholder='Name'
            name='name'
          />
          <input
            className='my-4 p-2 bg-[#e1e8ff]'
            type='email'
            placeholder='Email'
            name='email'
          />
          <textarea
            className='bg-[#e1e8ff] p-2'
            name='message'
            rows='10'
            placeholder='Message'
          ></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
            Let's Collaborate
          </button>
        </>
        }
      </form>
    </div>
  );
};


export default Contact;
