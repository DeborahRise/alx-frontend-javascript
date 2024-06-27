import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhotoResult, createUserResult]) => {
      const { body } = uploadPhotoResult;
      const { firstName, lastName } = createUserResult;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
