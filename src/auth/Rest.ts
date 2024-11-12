import axios from 'axios';

const options = {
    method: 'POST',
    url: 'https://dev-mgw72jpas4obd84e.us.auth0.com/oauth/token',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
    },
    data: new URLSearchParams({
        client_id: 'ymRc8UQkScJZM76PsbknMpZRjZWiZIo1',
        client_secret: '0sa8I6ndW8m1QeqWFZYAIwT2VlRI8j83B3Kwm2AhOrmGLfNULqrZngmqWLHaoFLz',
        audience: ' https://dev-mgw72jpas4obd84e.us.auth0.com/api/v2/',
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
