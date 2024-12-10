// polyfills
import 'whatwg-fetch';
import 'url-polyfill';
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';
import React from 'react';
import { createRoot } from 'react-dom/client';
import '../reset.css';
import { App } from './view/App';
import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserHistory } from "history";
import { Config } from './utils/config';

// Initialize a single history instance
const history = createBrowserHistory();

const onRedirectCallback = (appState: any) => {
    history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
};
console.log("Config", Config);

const providerConfig = {
    domain: Config.AUTH0_DOMAIN || '',
    clientId: Config.AUTH0_CLIENT_ID || '',
    onRedirectCallback,
    redirectUri: `${window.location.origin}/post-login`, 
    audience: Config.AUTH0_AUDIENCE, 
     scope: 'read:messages write:data openid profile email',
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
    <Auth0Provider {...providerConfig}>
        <App />
    </Auth0Provider>
);
