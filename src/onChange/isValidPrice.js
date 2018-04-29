const isValidPrice = price => !price || price.match(/^\d*(\.\d{0,2})?$/);

export default isValidPrice;
