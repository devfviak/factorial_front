/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronRightIcon } from '@heroicons/react/solid';

const defaultItemStyle = 'py-2 px-3 mb-3 flex flex-row items-center justify-between rounded-lg cursor-pointer';
const inactiveItemStyle = `${defaultItemStyle} text-factorial-gray-dark hover:bg-gray-300`;
const activeItemStyle = `${defaultItemStyle} text-white bg-factorial-gray-dark`;

function UserNavBarItem ({ icon, title, path }) {
  const location = useLocation()[0];
  const active = location !== '/' && location === path;

  return (
    <Link href={path}>
      <a className={active ? activeItemStyle : inactiveItemStyle}>
        <div className='flex flex-row items-center'>
          {!!icon && icon}
          <span className='ml-1.5 text-sm font-normal'>{title}</span>
        </div>

        <ChevronRightIcon className={`h-5 w-5 text-white ${!active && 'hidden'}`} />
      </a>
    </Link>
  );
}

export default UserNavBarItem;
