import React from 'react';
import { Route, Switch } from 'wouter';

import { useAuth } from './contexts/authContext';
import PageLoader from './components/layout/PageLoader';

import LoginPage from './pages/login';
import RegisterPage from './pages/register';

import ProfilePage from './pages/profile';
import ExpensesPage from './pages/expenses';

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
