import doErrorsExist from './doErrorsExist/doErrorsExist';
import amazonUrlDoesNotExist from './fieldSpecificValidators/amazonUrlDoesNotExist';
import amazonUrlExistsButIsInvalid from './fieldSpecificValidators/amazonUrlExistsButIsInvalid';
import authorBioDoesNotExist from './fieldSpecificValidators/authorBioDoesNotExist';
import descriptionDoesNotExist from './fieldSpecificValidators/descriptionDoesNotExist';
import emailDoesNotExist from './fieldSpecificValidators/emailDoesNotExist';
import emailExistsButIsInvalid from './fieldSpecificValidators/emailExistsButIsInvalid';
import fictionIsSelectedButGenreIsNotSelected from './fieldSpecificValidators/fictionIsSelectedButGenreIsNotSelected';
import notesDoesNotExist from './fieldSpecificValidators/notesDoesNotExist';
import priceDoesNotExist from './fieldSpecificValidators/priceDoesNotExist';
import isValidPrice from './onChange/isValidPrice';

exports = {
  doErrorsExist,
  amazonUrlDoesNotExist,
  amazonUrlExistsButIsInvalid,
  authorBioDoesNotExist,
  descriptionDoesNotExist,
  emailDoesNotExist,
  emailExistsButIsInvalid,
  fictionIsSelectedButGenreIsNotSelected,
  notesDoesNotExist,
  priceDoesNotExist,
  isValidPrice
};