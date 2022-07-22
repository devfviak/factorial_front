import React from 'react';
import { Route, Switch } from 'wouter';

import { useAuth } from './contexts/authContext';
import PageLoader from './components/layout/PageLoader';

const LoginPage = React.lazy(() => import('./pages/login'));
const RegisterPage = React.lazy(() => import('./pages/register'));

const ProfilePage = React.lazy(() => import('./pages/profile'));
const ExpensesPage = React.lazy(() => import('./pages/expenses'));

function InnerApp () {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageLoader/>;
  }

  return user ? <AuthenticatedApp/> : <UnauthenticatedApp/>;
}

function AuthenticatedApp () {
  return (
    <Switch>
      <Route path='/me' component={ProfilePage}/>
      <Route path='/expenses' component={ExpensesPage}/>
      <Route component={ProfilePage}/>
    </Switch>
  );
}

function UnauthenticatedApp () {
  return (
    <Switch>
      <Route path="/login" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route component={LoginPage}/>
    </Switch>
  );
}

export default InnerApp;
