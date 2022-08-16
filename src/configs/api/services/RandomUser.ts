import axios from 'axios';

const RandomUser = axios.create({
  baseURL: 'https://randomuser.me/api',
});

export default RandomUser;