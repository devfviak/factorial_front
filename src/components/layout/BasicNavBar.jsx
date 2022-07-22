/* eslint-disable react/prop-types */

import React from 'react';
import factorialLogo from '../../assets/factorial-logo.svg';

function BasicNavBar ({ isRegister = true }) {
  return (
    <div className='flex flex-row items-center justify-between w-full' >
      { /* LOGO */}
      <a href='/' title='Factorial' className='cursor-pointer'>
        <img src={factorialLogo} alt="Factorial" className="h-5 md:h-8" />
      </a>

      { /* LINKS */ }
      <div className='flex flex-row'>
        { isRegister ? <LoginSection/> : <RegisterSection/>}
      </div>
    </div>
  );
}

function RegisterSection () {
  return (
    <>
      <p className='px-2 text-sm font-light text-gray-500 hidden md:inline-flex'>You do not have an account?</p>

      <a href='/register' title='Register' className='font-light cursor-pointer text-sm'>
        Get started now
      </a>
    </>
  );
}

function LoginSection () {
  return (
    <>
      <p className='px-2 font-light text-gray-500 hidden md:inline-flex'>Already have an account?</p>

      <a href='/register' title='Register' className='font-light cursor-pointer'>
        Sign in
      </a>
    </>
  );
}

export default BasicNavBar;
