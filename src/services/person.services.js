import axios from 'axios';

export const fetchPersonByUsername = (username) => {
  return axios
    .get('https://api.github.com/users/' + username)
    .then(res => res.data)
};