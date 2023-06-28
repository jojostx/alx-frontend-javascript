export default function loadBalancer(chinaDownload, USDownload) {
  let result = '';

  result = Promise.any([chinaDownload, USDownload])
    .then((value) => value);

  return result;
}
