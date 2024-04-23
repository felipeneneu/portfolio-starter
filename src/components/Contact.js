import React from 'react';
import Logo from '../assets/logofn2.svg'

const Contact = () => {
  return (
    <footer className='min-h-[50vh] lg:min-h-[100vh] flex items-center' id='footer'>
      <div className=' mx-auto'>
        <div className='flex flex-col items-center'>
          {/*logo*/}
          <a href="#">
            <img src={Logo} alt='' className='lg:w-[600px] sm:w-[400px] w-[380px] h-auto' />
          </a>
          {/*button*/}
          <a target='_blank' href="https://w.app/vTWJ1z" >
            <button className='mt-10 btn btn-sm items-center'>Entre em Contato</button></a>
        </div>
      </div>
    </footer>
  )
};

export default Contact;
