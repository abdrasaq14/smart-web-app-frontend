console.log('process.env.REACT_APP_BASE_URL', process.env);
export const Config = {
	BASE_URL: process.env.REACT_APP_BASE_URL,
	AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
	AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
	AUTH0_AUDIENCE: process.env.REACT_APP_AUTH0_API_AUDIENCE,
	// AUTH0_SECRET_KEY: process.env.REACT_APP_AUTH0_CLIENT_SECRET_KEY,
};

