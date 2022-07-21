import React, { useState } from 'react';

import UserLayout from '../../components/layout/UserLayout';
import FactorialCard from '../../components/ui/FactorialCard';

import { CreditCardIcon } from '@heroicons/react/solid';
import BorderedButton from '../../components/forms/BorderedButton';
import Description from './Description';
import Resume from './Resume';
import ExpensesTable from './ExpensesTable';

function ExpensesPage () {
  const expenses = [
    {
      id: 'id',
      processor: 'stripe',
      concept: 'Expense#1',
      currency: 'USD',
      value_cents: '100',
      timestamp: '2022-06-31 00:00:00'
    },
    {
      id: 'id',
      processor: 'stripe',
      concept: 'Expense#1',
      currency: 'USD',
      value_cents: '100',
      timestamp: '2022-06-31 00:00:00'
    },
    {
      id: 'id',
      processor: 'stripe',
      concept: 'Expense#1',
      currency: 'USD',
      value_cents: '100',
      timestamp: '2022-06-31 00:00:00'
    }
  ];

  return (
    <UserLayout>
      <FactorialCard>
        {/* Header */}
        <div className='flex flex-col items-center justify-center py-4 border-gray-300 border-b'>
          <h1 className='text-factorial-gray-dark font-medium' >
            Expenses
          </h1>

        </div>

        { /* RESUME & ACTIONS */}
        <section className='flex flex-row p-12'>
          <div className='w-1/2'>
            <Description/>
          </div>

          <div className='w-1/2 flex flex-col justify-center items-center'>
            <Resume/>
          </div>
        </section>

        { /* EXPENSES TABLE */}
        <div className='py-6 px-12'>
          <ExpensesTable expenses={expenses}/>
        </div>

      </FactorialCard>
    </UserLayout>
  );
}

export default ExpensesPage;
