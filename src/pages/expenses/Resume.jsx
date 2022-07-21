import React from 'react';
import BorderedButton from '../../components/forms/BorderedButton';

function Resume () {
  return (
    <div className='w-full p-6 rounded-lg border shadow-md border-gray-200 flex flex-col items-center'>
      <div className='flex flex-col items-center mb-4'>
        <p className='text-lg'>1234 €</p>
        <span className='text-sm text-gray-500'>Spent this month</span>
      </div>

      <div className='w-full flex flex-row items-center justify-around'>
        <div className='w-15'>
          <BorderedButton>
            <p className='text-xs'>Add stripe expense</p>
          </BorderedButton>
        </div>
        <div className='w-15'>
          <BorderedButton>
            <p className='text-xs'>Add faker expense</p>
          </BorderedButton>
        </div>
      </div>
    </div>
  );
}

export default Resume;
