export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomInt = Date.now();
      const value = randomInt % 10;
      if (value < 100) {
        resolve(value);
      } else {
        reject(new Error(`Too large: ${value}`));
      }
    }, 500);
  });

  return myPromise;
}
