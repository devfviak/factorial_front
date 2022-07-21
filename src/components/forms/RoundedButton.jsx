/* eslint-disable react/prop-types */
import React from 'react';

function RoundedButton ({ title, onClick }) {
  return (
    <button
      className='rounded-full bg-factorial-pink w-full py-4 text-center font-semibold text-white hover:bg-factorial-pink-dark'
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default RoundedButton;
