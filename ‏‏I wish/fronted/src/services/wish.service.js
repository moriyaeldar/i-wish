import Axios from 'axios';
const axios = Axios.create({
  withCredentials: true,
});
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '/api/wish/'
    : 'http://localhost:3030/api/wish/';

export const wishService = {
  add
};

async function add(wish) {
  return await axios.post(BASE_URL,wish)
    .then((res) => res.data);
}