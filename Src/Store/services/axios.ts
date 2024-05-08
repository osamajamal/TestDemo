/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import { rootUrl } from '../../../utils/constants';

const instance = axios.create({
  baseURL: rootUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config: any) => {
  return config;
});

export default instance;
