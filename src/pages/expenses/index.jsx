import React, { useEffect, useState } from 'react';

import UserLayout from '../../components/layout/UserLayout';
import FactorialCard from '../../components/ui/FactorialCard';

import Description from './Description';
import Resume from './Resume';
import ExpensesTable from './ExpensesTable';
import FactorialSpinner from '../../components/ui/FactorialSpinner';

import { fetchExpenses } from '../../api/expenses';

function ExpensesPage () {
  const [expenses, setExpenses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchExpenses()
      .then(response => {
        setExpenses(response.data);
      })
      .catch(_e => setError('Problem fetching expenses'))
      .finally(setLoading(false));
  }, []);

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

        { /* EXPENSES CONTENT */}
        <div className='py-6 px-12'>
          {expensesContent({ expenses, loading, error })}
        </div>

      </FactorialCard>
    </UserLayout>
  );
}

const expensesContent = ({ expenses, loading, error }) => {
  if (loading) {
    return (<div className='w-10 h-10 m-auto'><FactorialSpinner/></div>);
  } else if (expenses) {
    return (<ExpensesTable expenses={expenses} />);
  } else if (error) {
    return (<div>{error}</div>);
  }
};

export default ExpensesPage;
