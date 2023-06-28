export default function signUpUser(firstName, lastName, success = true) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        firstName,
        lastName,
      });
    } else reject(new Error('An error occurred'));
  });
}
