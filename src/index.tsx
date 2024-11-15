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

// Initialize a single history instance
const history = createBrowserHistory();

const onRedirectCallback = (appState: any) => {
    history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
};

// Define Auth0Provider configuration
const providerConfig = {
    domain: "dev-mgw72jpas4obd84e.us.auth0.com",
    clientId: "Gbl8EEPzTnT3dbhZEBDb91PiWna8Hs2D",
    onRedirectCallback,
    redirectUri: `${window.location.origin}/post-login`, 
    audience: "http://127.0.0.1:8000/", 
     scope: 'read:messages write:data openid profile email',
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
    <Auth0Provider {...providerConfig}>
        <App />
    </Auth0Provider>
);
