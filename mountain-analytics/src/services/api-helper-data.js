import axios from 'axios'


const api = axios.create({
    baseURL: 'https://mountain-analytics.herokuapp.com/data/'
});

export const getDomainData = async (token, domainId) => {
    const resp =  await api.post('/', {
        params: {
            token: token,
            domainId: domainId
        }});
    return resp.domains
};
