import CryptoJS, { SHA256, AES } from 'crypto-js';

export const prepareData = registerData => {
  registerData.passwordConfirm = undefined;

  registerData.password = SHA256(registerData.password).toString(CryptoJS.enc.Base64);

  const full = registerData.password + registerData.password;

  registerData.username = AES.encrypt(registerData.username, full).toString();

  return registerData;
};
