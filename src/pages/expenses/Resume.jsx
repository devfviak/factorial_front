import React from 'react';
import BorderedButton from '../../components/forms/BorderedButton';

import { mockStripeExpense, mockApplePayExpense } from '../../api/expenses';

function Resume () {
  return (
    <div className='w-full p-6 rounded-lg border shadow-md border-gray-200 flex flex-col items-center'>
      <div className='flex flex-col items-center mb-4'>
        <p className='text-lg'>1234 €</p>
        <span className='text-sm text-gray-500'>Spent this month</span>
      </div>

      <div className='w-full flex flex-row items-center justify-around'>
        <div className='w-15 px-2'>
          <BorderedButton onClick={mockStripeExpense}>
            <p className='text-[7px] sm:text-xs'>Add Stripe expense</p>
          </BorderedButton>
        </div>

        <div className='w-15 px-2'>
          <BorderedButton onClick={mockApplePayExpense}>
            <p className='text-[7px] sm:text-xs'>Add ApplePay expense</p>
          </BorderedButton>
        </div>
      </div>
    </div>
  );
}

export default Resume;
