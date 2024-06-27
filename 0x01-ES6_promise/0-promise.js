export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Successful');
      } else {
        reject(Error);
      }
    }, 2000);
  });
}
getResponseFromAPI()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
