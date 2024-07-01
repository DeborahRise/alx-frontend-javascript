import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((theRez) => {
      console.log(`${theRez[0].body} ${theRez[1].firstName} ${theRez[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
