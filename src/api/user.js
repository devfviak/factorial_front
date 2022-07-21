const client = import('./client');

export const updateUser = async (attributes) => {
  client.put('/users', {
    user: {
      ...attributes
    }
  });
};
