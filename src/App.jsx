import React from 'react';

import { AuthProvider } from './contexts/authContext';
import InnerApp from './InnerApp';

function App () {
  return (
    <AuthProvider>
      <InnerApp/>
    </AuthProvider>
  );
}

export default App;
