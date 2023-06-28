import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(filename);

  const p3 = Promise.allSettled([
    p1.catch((e) => `${e.name}: ${e.message}`),
    p2.catch((e) => `${e.name}: ${e.message}`),
  ]).then((values) => values);

  return p3;
}
