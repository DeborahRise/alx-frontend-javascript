export default function getFullResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({
                    status: 200,
                    body: 'Success'
                });
            } else {
                reject({
                    Error: 'The fake API is not working currently'
                })
            }
        }, 2000);
    });
}

getFullResponseFromAPI()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });