import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const uploadPromise = uploadPhoto('photo-profile-1');
  const userPromise = createUser('Guillaume', 'Salva');

  return await Promise.allSettled([uploadPromise, userPromise])
    .then((results) => ({ photo: results[0].value, user: results[1].value }))
    .catch(() => ({ photo: null, user: null }));
}
