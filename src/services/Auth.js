/* eslint-disable linebreak-style */

// @desc  Use secure-ls to store sensitive data in the local storage. It encrypts the data.
// @use   Instead of localStorage, use ls.
// @ex.   Check this file for examples.
import SecureLS from 'secure-ls';

const ls = new SecureLS();

export const isAuthEmail = () => ls.get('email');
export const isAuthUserType = () => ls.get('userType');

// export const getAuthorizationHeader = () => `Bearer ${isAuthenticated()}`;

export const removeAuthenticatedState = () => {
  ls.remove('email');
  ls.remove('userType');
};

export const authenticateUser = (email, userType) => {
  ls.set('email', email);
  ls.set('userType', userType);
};

export default {
  isAuthEmail,
  removeAuthenticatedState,
  authenticateUser
};
