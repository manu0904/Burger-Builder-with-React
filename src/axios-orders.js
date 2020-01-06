import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6b6d9.firebaseio.com/'
});

export default instance;