import axios from 'axios';
import { camelizeObjectFromSnake, snakecaseObjectFromCamel } from './utils';

const API_URL = import.meta.env.VITE_API_URL;

const transformRequest = (data, headers) => {
  console.log('data', data);
  console.log('headers', headers);

  if (!data || headers['Content-Type'] !== 'application/json') return {};

  return JSON.stringify(snakecaseObjectFromCamel(data));
};

const transformResponse = (data, headers) => {
  if (!data || headers['Content-Type'] !== 'application/json') return {};

  return camelizeObjectFromSnake(JSON.parse(data));
};

const client = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  transformRequest,
  transformResponse
});

export default client;
