import axios from 'axios';
import { baseUrl, apiVersion } from '../const/baseUrl';

const instance = axios.create({
    baseURL: baseUrl + apiVersion
    // withCredentials: true,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Credentials': true,
    // },
});

export default instance;
