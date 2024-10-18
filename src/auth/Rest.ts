import axios from 'axios';

const options = {
    method: 'POST',
    url: 'https://dev-mgw72jpas4obd84e.us.auth0.com/oauth/token',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
    },
    data: new URLSearchParams({
        client_id: 'RLHdjXQH7M3j8Tj1ygx7t8YZ0jgZsnxH',
        client_secret: 'fmJkyRyv5VLEixz_sDJVpMxv0P34sJVWFO0wkyRd8tRYjXVe9OBIQjVw5wyf6heg',
        audience: 'https://dev-mgw72jpas4obd84e.us.auth0.com/api/v2/',
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