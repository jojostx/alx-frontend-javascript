import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const result = [];

  const userResponse = await signUpUser(firstName, lastName).catch((e) => `${e.name}: ${e.message}`);
  result.push(userResponse);

  const photoResponse = await uploadPhoto(filename).catch((e) => `${e.name}: ${e.message}`);
  result.push(photoResponse);

  return result;
}
