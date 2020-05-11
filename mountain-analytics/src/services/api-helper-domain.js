import axios from 'axios'


const api = axios.create({
    baseURL: 'https://mountain-analytics.herokuapp.com/domains/'
});

export const getDomains = async (token, orgId) => {
    const resp =  await api.post('/register', {
        params: {
            token: token,
            orgId: orgId
        }});
    return resp.domains
};

/*======== Format of user ========================
    {
      "email": "{{userName}}",
      "password": "{{password}}"
    }
 */
export const addDomain = async (token, body) => {
    const resp = await api.post('/create', body);

    return resp.domains
};