import { camelCase, snakeCase, mapKeys } from 'lodash';

/**
 * Deep transform all keys to camelcase (lower)
 * @param {*} object
 */
export const camelizeObjectFromSnake = (object) => {
  return mapKeys(object, (_v, k) => camelCase(k));
};

/**
 * Deep transform all keys to snakecase
 * @param {Object} object
 */
export const snakecaseObjectFromCamel = (object) => {
  return mapKeys(object, (_v, k) => snakeCase(k));
};
