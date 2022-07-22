import snakeCase from 'lodash/snakeCase';

export const isObject = o => o instanceof Object && o.constructor === Object;

/**
 * Deep transform all keys to snakecase
 * @param {Object} object
 */
export const snakecaseObjectFromCamel = object => {
  if (isObject(object)) {
    const newObject = {};

    Object.keys(object).forEach(key => {
      newObject[snakeCase(key)] = snakecaseObjectFromCamel(object[key]);
    });

    return newObject;
  }
  if (object instanceof Array) {
    return object.map(value => snakecaseObjectFromCamel(value));
  }
  return object;
};
