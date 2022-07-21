/* eslint-disable react/prop-types */
import React from 'react';

function BorderedButton ({ children, onClick }) {
  return (
    <button
      className='rounded-full border border-factorial-pink w-full p-2 text-center text-factorial-pink hover:scale-105 ease-in-out duration-100'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BorderedButton;
