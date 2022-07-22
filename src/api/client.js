import axios from 'axios';
import { snakecaseObjectFromCamel } from './utils';

const API_URL = import.meta.env.VITE_API_URL;

const transformRequest = (data, headers) => {
  if (!data || headers['Content-Type'] !== 'application/json') return data;

  return JSON.stringify(snakecaseObjectFromCamel(data));
};

const client = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  transformRequest
});

export default client;
