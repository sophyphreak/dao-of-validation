import doErrorsExist from './doErrorsExist/doErrorsExist';
import amazonUrlExistsButIsInvalid from './fieldSpecificValidators/amazonUrlExistsButIsInvalid';
import emailExistsButIsInvalid from './fieldSpecificValidators/emailExistsButIsInvalid';
import websiteUrlIsInvalid from './fieldSpecificValidators/websiteUrlIsInvalid';
import thisIsEmpty from './general/thisIsEmpty';
import isValidPrice from './onChange/isValidPrice';

module.exports = {
  doErrorsExist,
  amazonUrlExistsButIsInvalid,
  emailExistsButIsInvalid,
  websiteUrlIsInvalid,
  thisIsEmpty,
  isValidPrice
};
