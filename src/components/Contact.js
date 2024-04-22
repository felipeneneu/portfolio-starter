import React from 'react';
import Logo from '../assets/logofn2.svg'

const Contact = () => {
  return (
    <footer className='min-h-[100vh] lg:min-h-[100vh] flex items-center' id='footer'>
      <div className=' mx-auto'>
        <div className='flex flex-col items-center'>
          {/*logo*/}
          <a href="#">
            <img src={Logo} alt='' className='lg:w-[600px] sm:w-[200px] w-[180px] h-auto' />
          </a>
          {/*button*/}
          <button className='mt-10 btn btn-sm items-center'>Work with me</button>
        </div>
      </div>
    </footer>
  )
};

export default Contact;
