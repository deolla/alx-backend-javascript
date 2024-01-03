import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((results) => results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  })));
}

export default handleProfileSignup;
