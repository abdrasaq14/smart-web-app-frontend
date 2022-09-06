import axios from 'axios';

const options = {
    method: 'POST',
    url: 'https://dev-u0pz-ez1.eu.auth0.com/oauth/token',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
    },
    data: new URLSearchParams({
        client_id: '4CZMJ4Ho3BYuF6qx1gvRTFdNK4aqhVda',
        client_secret: '6pciXO9xgdCTNLOKMRKMRUksjTxrVGJXMl2LcrDJhDnZ6jkxkwdryM1xknncOvGs',
        audience: 'https://dev-u0pz-ez1.eu.auth0.com/api/v2/',
        grant_type: 'client_credentials'
    })
};

export const getAuthToken = () => {
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}