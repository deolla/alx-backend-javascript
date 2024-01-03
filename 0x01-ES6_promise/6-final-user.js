import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then(([userResponse, photoResponse]) => [
    {
      status: 'success',
      value: userResponse,
    },
    {
      status: 'success',
      value: photoResponse,
    },
  ]).catch((error) => [
    {
      status: 'error',
      value: error,
    },
    {
      status: 'error',
      value: error, // Assuming both operations fail upon one error
    },
  ]);
}
