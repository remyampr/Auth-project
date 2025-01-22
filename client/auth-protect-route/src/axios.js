import axios from 'axios';

const instance=axios.create({
    baseURL:'https://auth-project-backend.vercel.app/'
});

export default instance;

// his file creates a base Axios instance with the baseURL set to your server's API: