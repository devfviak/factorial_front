import React from 'react';

import UserLayout from '../../components/layout/UserLayout';
import FactorialCard from '../../components/ui/FactorialCard';

function ProfilePage () {
  return (
    <UserLayout>
      <FactorialCard>
        {/* Header */}
        <div className='flex flex-col items-center justify-center py-4 border-gray-300 border-b'>
          <h1 className='text-factorial-gray-dark font-medium' >
            Profile
          </h1>
        </div>

        <div className='flex flex-col flex-grow items-center justify-center'>
          <button
            className='bg-factorial-pink py-3 px-4 rounded-full text-white'
          >
            <span className='text-sm font-medium'>Log out</span>
          </button>
        </div>
      </FactorialCard>
    </UserLayout>
  );
}

export default ProfilePage;
