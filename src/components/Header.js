import React from 'react';

//logo
import Logo from '../assets/logofn2.svg'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/*logo*/}
          <a href="#">
            <img src={Logo} alt='' className='lg:w-[300px] sm:w-[200px] w-[180px] h-auto' />
          </a>
          {/*button*/}
          <button className='btn btn-sm'>Trabalhe comigo</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
