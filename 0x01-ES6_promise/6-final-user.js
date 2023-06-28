import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(filename);

  const p3 = Promise.allSettled([p1, p2])
    .then((results) => results.map((res) => ({
      status: res.status,
      value: res.value || `${res.reason.name}: ${res.reason.message}`,
    })));

  return p3;
}
