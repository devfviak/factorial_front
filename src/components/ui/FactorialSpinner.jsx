import React from 'react';

function FactorialSpinner () {
  return (
    <div className="animate-spin h-10 w-10 bg-factorial-pink rounded-md">
      <div className="bg-white h-3 w-3 m-auto rounded-full"></div>
    </div>);
}

export default FactorialSpinner;
