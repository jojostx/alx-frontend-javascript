import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const uploadPromise = uploadPhoto();
  const userPromise = createUser(false);

  return Promise.all([uploadPromise, userPromise])
    .then((results) => ({ photo: results[0], user: results[1] }))
    .catch(() => ({ photo: null, user: null }));
}
