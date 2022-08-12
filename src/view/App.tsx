import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './Login';
import { Home as OperationsHome } from './operations/Home';
import { Operations } from './operations/Operations';
import { MyAccount as OperationsMyAccount } from './operations/MyAccount';
import { ActivityLog as OperationsActivitylog } from './operations/ActivityLog';
import { Site as OperationSite } from './operations/Site';
import { Auth0Provider } from '@auth0/auth0-react';

export const App = () => (
    <Auth0Provider
        domain='dev-u0pz-ez1.eu.auth0.com'
        clientId='dZdIDvmc3hKd5gPJJJsiSKSwkXJdomPg'
        redirectUri={window.location.origin}
    >
        <BrowserRouter>
            <Routes>
                <Route path="/operations" element={<Operations/>}>
                    <Route index element={<OperationsHome/>}/>
                    <Route path="home" element={<OperationsHome/>}/>
                    <Route path="site" element={<OperationSite/>}/>
                    <Route path="activityLog" element={<OperationsActivitylog/>}/>
                    <Route path="myAccount" element={<OperationsMyAccount/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Navigate to="/login" replace/>}/>
            </Routes>
        </BrowserRouter>
    </Auth0Provider>
);