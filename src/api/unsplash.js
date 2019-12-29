import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID 65451c02110a548f53242fb803b512b47b097ea26c557bfa0f2e45988cc6a3cd'
    }
})