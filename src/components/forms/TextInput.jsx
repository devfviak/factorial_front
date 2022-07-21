/* eslint-disable react/prop-types */
import React from 'react';

function TextInput ({ value, onChange, inputId, type, required, maxLength, labelName }) {
  return (
    <div className='relative w-full'>
      <input
        id={inputId}
        type={type}
        required={required}
        maxLength={maxLength }
        className='h-16 w-full rounded-md p-3 pt-8 peer border-gray-500 border-2 focus:border-factorial-green outline-none'
        value={value}
        onChange={onChange}
      />
      <label htmlFor={inputId}
        className='text-sm font-semibold absolute top-3 left-3 text-gray-500'>
        {labelName}
      </label>
    </div>
  );
}

export default TextInput;
