import CryptoJS, { SHA256 } from 'crypto-js';

export const prepareData = loginData => {
  const cipher = SHA256(loginData.password).toString(CryptoJS.enc.Base64);

  return cipher;
};
