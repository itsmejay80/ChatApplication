// var aes256 = require("aes256");

var Cryptr = require('cryptr');

var secret_key = "uI2ooxtwHeI6q69PS98fx9SWVGbpQohO";

var cryptr = new Cryptr(secret_key)



export const to_Encrypt = (text) => {
  var encrypted = cryptr.encrypt(text);
  return encrypted;
};
export const to_Decrypt = (cipher, username) => {
  if (cipher.startsWith("Welcome")) {
    return cipher;
  }

  if (cipher.startsWith(username)) {
    return cipher;
  }

  var decrypted = cryptr.decrypt(cipher);
  return decrypted;
};
