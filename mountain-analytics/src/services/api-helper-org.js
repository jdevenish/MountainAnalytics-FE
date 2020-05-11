import axios from 'axios'


const api = axios.create({
    baseURL: 'https://mountain-analytics.herokuapp.com/org/'
});

export const createNewAccount = async (token) => {
    const resp =  await api.post('/register', {
        params: {
            token: token
        }});
    return resp.data
};
