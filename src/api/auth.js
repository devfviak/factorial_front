import client from './client';

export const currentUser = async () => {
  return client.get('/users/me');
};

export const signUpUser = async ({ email, password, firstName, lastName, phone }) => {
  return client.post('/users', {
    user: {
      email,
      firstName,
      lastName,
      password,
      phone
    }
  });
};

export const signInUser = async ({ email, password }) => {
  return client.post('/users/sign_in', { email, password });
};

export const signOutUser = async () => client.post('/users/sign_out');
