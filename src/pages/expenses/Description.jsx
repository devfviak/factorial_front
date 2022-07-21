import React from 'react';
import { CreditCardIcon } from '@heroicons/react/solid';

function Description () {
  return (
    <>
      <CreditCardIcon className='h-10 text-factorial-pink' />
      <p className='text-lg'>Expenses</p>
      <span className='text-sm text-gray-500'>Manage your expenses with ease from this section, get stats and insights</span>
      <div className='w-8 h-0.5 bg-factorial-pink my-5'></div>
    </>
  );
}

export default Description;
