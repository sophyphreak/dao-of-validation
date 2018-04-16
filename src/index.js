import doErrorsExist from './doErrorsExist/doErrorsExist';
import amazonUrlDoesNotExist from './fieldSpecificValidators/amazonUrlDoesNotExist';
import amazonUrlExistsButIsInvalid from './fieldSpecificValidators/amazonUrlExistsButIsInvalid';
import authorBioDoesNotExist from './fieldSpecificValidators/authorBioDoesNotExist';
import descriptionDoesNotExist from './fieldSpecificValidators/descriptionDoesNotExist';
import emailDoesNotExist from './fieldSpecificValidators/emailDoesNotExist';
import emailExistsButIsInvalid from './fieldSpecificValidators/emailExistsButIsInvalid';
import notesDoesNotExist from './fieldSpecificValidators/notesDoesNotExist';
import releaseTextDoesNotExist from './fieldSpecificValidators/releaseTextDoesNotExist';
import priceDoesNotExist from './fieldSpecificValidators/priceDoesNotExist';
import websiteUrlIsInvalid from './fieldSpecificValidators/websiteUrlIsInvalid';
import thisIsEmpty from './general/thisIsEmpty';
import isValidPrice from './onChange/isValidPrice';

module.exports = {
  doErrorsExist,
  amazonUrlDoesNotExist,
  amazonUrlExistsButIsInvalid,
  authorBioDoesNotExist,
  descriptionDoesNotExist,
  emailDoesNotExist,
  emailExistsButIsInvalid,
  notesDoesNotExist,
  releaseTextDoesNotExist,
  priceDoesNotExist,
  websiteUrlIsInvalid,
  thisIsEmpty,
  isValidPrice
};