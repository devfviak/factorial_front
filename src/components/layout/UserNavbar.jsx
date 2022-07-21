import React from 'react';
import UserNavBarItem from './UserNavBarItem';
import factorialLogo from '../../assets/factorial-logo.svg';

import {
  CollectionIcon,
  UserCircleIcon,
  GiftIcon,
  ClockIcon,
  DocumentIcon
} from '@heroicons/react/solid';

function UserNavbar () {
  return (
    <div className='flex flex-col items-start px-2 py-3'>
      <div className='pl-5 pb-4'>
        <a href='/' title='Factorial' className='cursor-pointer'>
          <img src={factorialLogo} alt="Factorial" className="h-6" />
        </a>
      </div>

      <div className='pl-3 mb-2'>
        <span className='uppercase text-xs font-medium text-factorial-gray-dark'>
          You
        </span>
      </div>
      <nav className='w-full'>
        <UserNavBarItem
          path='/me'
          title={'Me'}
          icon={<UserCircleIcon className='h-4 w-4'/>}
        />
        <UserNavBarItem
          path='/expenses'
          title={'Expenses'}
          icon={<CollectionIcon className='h-4 w-4'/>}
        />
        <UserNavBarItem
          path='/'
          title={'Time off'}
          icon={<GiftIcon className='h-4 w-4'/>}
        />
        <UserNavBarItem
          path='/'
          title={'Clock in'}
          icon={<ClockIcon className='h-4 w-4'/>}
        />
        <UserNavBarItem
          path='/'
          title={'My documents'}
          icon={<DocumentIcon className='h-4 w-4'/>}
        />
      </nav>

      <div className='pl-3 mb-2'>
        <span className='uppercase text-xs font-medium text-factorial-gray-dark'>
          YOUR COMPANY
        </span>
      </div>
      <nav className='w-full'>
        <UserNavBarItem
          path='/'
          title={'Me'}
          icon={<UserCircleIcon className='h-4 w-4'/>}
        />
        <UserNavBarItem
          path='/'
          title={'Expenses'}
          icon={<CollectionIcon className='h-4 w-4'/>}
        />
        <UserNavBarItem
          path='/'
          title={'Time off'}
          icon={<GiftIcon className='h-4 w-4'/>}
        />
        <UserNavBarItem
          path='/'
          title={'Clock in'}
          icon={<ClockIcon className='h-4 w-4'/>}
        />
        <UserNavBarItem
          path='/'
          title={'My documents'}
          icon={<DocumentIcon className='h-4 w-4'/>}
        />
      </nav>
    </div>
  );
}

export default UserNavbar;
