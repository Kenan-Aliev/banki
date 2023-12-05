import axios from 'axios';
import { baseUrl } from '../const/baseUrl';

const instance = axios.create({
    baseURL: baseUrl + '/api/v1'
    // withCredentials: true,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Credentials': true,
    // },
});

export default instance;
