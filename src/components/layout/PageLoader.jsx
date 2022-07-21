import React from 'react';
import FactorialSpinner from '../ui/FactorialSpinner';

function PageLoader () {
  return (
    <div className='w-screen h-screen flex flex-row items-center justify-center'>
      <FactorialSpinner/>
    </div>
  );
}

export default PageLoader;
