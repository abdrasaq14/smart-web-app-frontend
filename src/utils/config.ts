console.log('process.env.REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL);
export const Config = {
	BASE_URL: process.env.REACT_APP_BASE_URL || 'https://api.demo.powersmarter.net/api/',
	AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID || 'RLHdjXQH7M3j8Tj1ygx7t8YZ0jgZsnxH',
	AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN || 'dev-mgw72jpas4obd84e.us.auth0.com',
	AUTH0_AUDIENCE: process.env.REACT_APP_AUTH0_API_AUDIENCE || 'https://api.demo.powersmarter.net/',
	// AUTH0_SECRET_KEY: process.env.REACT_APP_AUTH0_CLIENT_SECRET_KEY,
};

