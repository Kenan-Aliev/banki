import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.vsebanki.kg/api',
    // withCredentials: true,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Credentials': true,
    // },
});

export default instance;
