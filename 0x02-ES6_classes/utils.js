export function uploadPhoto(success = true) {
  const result = {
    status: 200,
    body: 'photo-profile-1',
  };

  return new Promise((resolve, reject) => {
    if (success) resolve(result);
    else reject(new Error('there was an error.'));
  });
}

export function createUser(success = true) {
  const result = {
    firstName: 'Guillaume',
    lastName: 'Salva',
  };

  return new Promise((resolve, reject) => {
    if (success) resolve(result);
    else reject(new Error('there was an error.'));
  });
}
