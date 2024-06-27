import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    uploadPhoto()
        .then(() => ({
            status: 200,
            body: 'Success',
        }))
        .catch(() => {
            console.log('Signup system offline');
        })
        .finally(() => {
        console.log('Got a response from the API');
        });

    createUser()
        .then(() => ({
            status: 200,
            body: 'Success',
        }))
        .catch(() => Error)
        .finally(() => {
        console.log('Got a response from the API');
        });
}