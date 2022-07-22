/* eslint-disable react/prop-types */

import React from 'react';
import BasicNavBar from './BasicNavBar';

function BasicLayout ({ isRegister, children }) {
  return (
    <div className='flex flex-col flex-grow min-h-screen'>
      { /* HEADER */ }
      <header className='w-full max-w-screen-xl flex flex-row mx-auto px-20 pt-10'>
        <BasicNavBar isRegister={isRegister}/>
      </header>

      { /* LOGIN FORM */ }
      <main>
        {children}
      </main>

      { /* FOOTER */ }
      <footer className='w-full mt-20'>
        <div className='flex flex-row items-center justify-center'>
          <p className='font-thin py-4'>
            Developed by Pedro Ávila for learning purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default BasicLayout;
