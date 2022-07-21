/* eslint-disable react/prop-types */

import React from 'react';
import BasicNavBar from './BasicNavBar';

function BasicLayout ({ isRegister, children }) {
  return (
    <>
      { /* HEADER */ }
      <header className='max-w-screen-xl flex flex-row mx-auto px-9 pt-10'>
        <BasicNavBar isRegister={isRegister}/>
      </header>

      { /* LOGIN FORM */ }
      <main>
        {children}
      </main>

      { /* FOOTER */ }
      <footer className='w-full absolute bottom-0'>
        <div className='flex flex-row items-center justify-center'>
          <p className='font-thin py-4'>
            Developed by Pedro Ávila for learning purposes.
          </p>
        </div>
      </footer>
    </>
  );
}

export default BasicLayout;
