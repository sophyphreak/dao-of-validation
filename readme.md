# Dao of Validation

Simple validator functions so that your if-statements read like English!

## Installation

```
yarn add dao-of-validation

npm install dao-of-validation
```

## Example

```
import { thisIsEmpty } from 'dao-of-validation';

const someString = '';

if (thisIsEmpty(someString)) {
  error.someString = 'Please fill in a string.';
}
```

## Authors

* Andrew Horn&nbsp;

## License

This project is licensed under the MIT License
