import axios from 'axios'


const api = axios.create({
    baseURL: 'https://mountain-analytics.herokuapp.com/org/'
});

export const createNewAccount = async (profile) => {
    const resp =  await api.post('/register', profile);
    return resp.data
};
