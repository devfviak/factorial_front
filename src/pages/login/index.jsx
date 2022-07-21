import React from 'react';

import LoginForm from '../../components/forms/LoginForm';
import BasicLayout from '../../components/layout/BasicLayout';

function LoginPage () {
  return (
    <BasicLayout isRegister={false} >
      <div className='flex flex-col mx-auto mt-24 items-center px-8 md:p-1 md:w-1/3 lg:w-1/4 xl:w-1/5 '>

        { /* FORM HEADER */}
        <p className='font-semibold text-factorial-pink uppercase tracking-wide mb-4'>
          Sign in
        </p>
        <p className='text-3xl mb-7'>
          Welcome back
        </p>

        {/* FROM SEPARATOR */}
        <div className='w-8 h-0.5 bg-factorial-pink mb-5' ></div>

        {/* REUSABLE LOGIN FORM */}
        <LoginForm/>

        {/* REGISTER LINK */}
        <a
          className="mt-5 py-3 rounded-full w-full border-2 border-gray-500 text-gray-500 text-center"
          href='/register'
        >
          Get started
        </a>
      </div>
    </BasicLayout>
  );
}

export default LoginPage;
