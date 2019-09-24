import axios from 'axios';
import auth from '../config/apiAuth';

const api = axios.create({
  baseURL: 'https://global.intelex.com/Login3/LOGICS/api/v2',
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${auth.username}:${auth.password}`
    ).toString('base64')}`,
  },
});

export default api;
