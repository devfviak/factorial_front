/* eslint-disable react/prop-types */
import React from 'react';

function TextInput ({ value, onChange, inputId, type, required, maxLength, labelName, error, disabled = false }) {
  return (
    <div className='relative w-full'>
      <input
        id={inputId}
        type={type}
        required={required}
        maxLength={maxLength }
        className={`h-16 w-full rounded-md p-3 pt-8 peer ${error ? 'border-red-400' : 'border-gray-500'} border-2 focus:border-factorial-green outline-none`}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={inputId}
        className={`flex flex-row justify-between text-sm font-semibold absolute top-3 left-3 ${error ? 'text-red-400' : 'text-gray-500'} `}>
        {labelName}{ error && ` ${error}`}
      </label>
    </div>
  );
}

export default TextInput;
