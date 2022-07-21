import client from './client';

export const currentUser = async () => {
  return client.get('/users/me');
};

export const signUpUser = async ({ firstName, lastName, password, phone }) => {
  return client.post('/users', {
    user: {
      firstName, lastName, password, phone
    }
  });
};

export const signInUser = async ({ email, password }) => {
  return client.post('/users/sign_in', { email, password });
};

export const signOutUser = async () => {
  return client.post('/users/sign_out');
};
