import React from 'react';

import RegisterForm from '../../components/forms/RegisterForm';
import BasicLayout from '../../components/layout/BasicLayout';

function RegisterPage () {
  return (
    <BasicLayout isRegister={true} >
      <div className='flex flex-col mx-auto mt-10 items-center px-8 md:p-1 md:w-1/3 lg:w-1/4 xl:w-1/5 '>

        { /* FORM HEADER */}
        <p className='font-semibold text-factorial-pink uppercase tracking-wide mb-4'>
          Sign up
        </p>
        <p className='text-3xl mb-7'>
          Welcome!
        </p>

        {/* FROM SEPARATOR */}
        <div className='w-8 h-0.5 bg-factorial-pink mb-5' ></div>

        {/* REUSABLE LOGIN FORM */}
        <RegisterForm/>

        {/* LOGIN LINK */}
        <a
          className="mt-5 py-3 rounded-full w-full border-2 border-gray-500 text-gray-500 text-center"
          href='/login'
        >
          Already registered? Sign in
        </a>
      </div>
    </BasicLayout>
  );
}

export default RegisterPage;
