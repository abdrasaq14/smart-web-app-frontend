/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import store from "./store/store";
import { Config } from "./utils/config";
import './index.css'
import { SnackbarProvider } from "notistack";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Create a single QueryClient instance
const queryClient = new QueryClient();

const onRedirectCallback = (appState: any) => {
  window.location.replace(appState?.returnTo || window.location.pathname);
};

console.log('Config', Config)
const auth0Config = {
  domain: Config.AUTH0_DOMAIN || "",
  clientId: Config.AUTH0_CLIENT_ID || "",
  redirectUri: `${window.location.origin}/auth/post-login`,
  audience: Config.AUTH0_AUDIENCE,
  scope: "read:messages write:data openid profile email",
  onRedirectCallback,
};

root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Auth0Provider {...auth0Config}>
            <App />
          </Auth0Provider>
        </BrowserRouter>
      </QueryClientProvider>
      </Provider>
      </SnackbarProvider>
  </React.StrictMode>
);
