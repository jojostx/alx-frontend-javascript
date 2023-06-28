export default function uploadPhoto(fileName, success = false) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(`${fileName} has been processed`);
    } else {
      reject(new Error(`${fileName} cannot be processed`));
    }
  });
}
