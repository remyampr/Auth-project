import axios from 'axios';

const instance=axios.create({
    baseURL:'http://localhost:5001/api'
});

export default instance;

// his file creates a base Axios instance with the baseURL set to your server's API: