import axios from 'axios'


const api = axios.create({
    baseURL: 'https://mountain-analytics.herokuapp.com/metrics'
});

export const getDomainData = async (token, domainId) => {
    const resp =  await api.get('/', {
        params: {
            token: token,
            domainId: domainId
        }});
    return resp.data
};
