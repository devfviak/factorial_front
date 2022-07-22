import client from './client';

export const updateUser = async (attributes) => {
  return client.put('/users', {
    user: {
      ...attributes
    }
  });
};
