import axios from 'axios'


const api = axios.create({
    baseURL: 'https://mountain-analytics.herokuapp.com/domains/'
});

export const getDomains = async (token, orgId) => {
    const resp =  await api.get('/list', {
        params: {
            token: token,
            orgId: orgId
        }});
    return resp.data
};

/*======== Format of user ========================
    {
      "email": "{{userName}}",
      "password": "{{password}}"
    }
 */
export const addDomain = async (token, body) => {
    const resp = await api.post('/create', body, {
        params: {
            token: token
        }
    });

    return resp.data
};