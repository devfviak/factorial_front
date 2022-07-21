/* eslint-disable react/prop-types */
import React from 'react';

function FactorialCard ({ children }) {
  return (
    <div className='flex flex-col w-full flex-grow flex-shrink rounded-lg bg-white shadow-lg'>
      {children}
    </div>
  );
}

export default FactorialCard;
