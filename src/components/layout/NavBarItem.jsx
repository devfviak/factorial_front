/* eslint-disable react/prop-types */
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';

function NavBarItem ({ icon, title }) {
  return (
    <a className='py-2 px-3 mb-3 flex flex-row items-between rounded-lg text-factorial-gray-dark
    hover:bg-gray-300 cursor-pointer'>
      <div className='flex flex-row items-center'>
        {!!icon && icon}
        <span className='ml-1.5 text-sm font-normal'>{title}</span>
      </div>

      <ChevronRightIcon className='hidden hover:inline-flex h-5 w-5 text-white' />
    </a>
  );
}

export default NavBarItem;
