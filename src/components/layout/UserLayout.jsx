/* eslint-disable react/prop-types */

import React from 'react';
import UserNavbar from './UserNavbar';

function UserLayout (props) {
  return (
    <div className="bg-factorial-gray min-h-screen">
      <div className='py-4 flex flex-row max-w-5xl h-full mx-auto bg-factorial-gray'>
        { /* Sidebar */ }
        <div className='w-1/5 mr-5'>
          <UserNavbar/>
        </div>

        { /* Page content */ }
        <main className='w-full py-4 px-4 flex flex-grow'>
          {props.children}
        </main>
      </div>
    </div>
  );
}

export default UserLayout;
