import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { Login } from './Login';
import { Home as OperationsHome } from './operations/Home';
import { Dashboard as OperationsDashboard } from './operations/Dashboard';
import { Home as FinanceHome } from './finance/Home';
import { OperationsLayout } from './operations/OperationsLayout';
import { FinancesLayout } from './finance/FinancesLayout';
import { MyAccount } from './MyAccount';
import { ActivityLog as OperationsActivitylog } from './operations/ActivityLog';
import { Sites as OperationSite } from './operations/Sites';
import { Transactions as FinanceTransaction } from './finance/Transactions';

import { Home as SeniorManagerAccountHome } from './seniorManagerAccout/Home';
import { Home as SeniorManagerAccountOperations } from './seniorManagerAccout/Operations';
import { Home as SeniorManagerAccountFinance } from './seniorManagerAccout/Finance';
import { ActivityLog as SeniorManagerAccountActivityLog } from './seniorManagerAccout/ActivityLog';

import { Home as AccountUiHome } from './accountUI/Home';
import { Companies as AccountUiCompanies } from './accountUI/Companies';
import { Company as AccountUiCompany } from './accountUI/Company';
import { AddDevice as AccountUiAddDevice } from './accountUI/AddDevice';
import { AddEmployee as AccountUiAddEmployee } from './accountUI/AddEmployee';
import { Users as AccountUiUsers } from './accountUI/Users';
import { Devices as AccountUiDevices } from './accountUI/Devices';

import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserTypeSwitcher from './UserTypeSwitcher';
import { SeniorManagerAccountLayout } from './seniorManagerAccout/SeniorManagerAccountLayout';
import { AccountUiLayout } from './accountUI/AccountUiLayout';
import { SnackbarProvider } from 'notistack';
import PostLogin from './auth/PostLogin';
import Logout from './Logout';
import 'leaflet/dist/leaflet.css';
// import { createBrowserHistory } from "history";

// const Auth0ProviderWithRedirectCallback = ({ children, ...props }:any) => {
//   const history = createBrowserHistory()
// 	const onRedirectCallback = (appState:any) =>
// 	{
//   history.push(
//     appState && appState.returnTo ? appState.returnTo : window.location.pathname
//   );
// 	};
// 	const providerConfig = {
// 		domain:"dev-mgw72jpas4obd84e.us.auth0.com",
// 		clientId:"ymRc8UQkScJZM76PsbknMpZRjZWiZIo1",
// 		onRedirectCallback,
// 		authorizationParams: {
//     redirectUri:`${window.location.origin}/post-login`
//   },

// 	}
// 	return (
//     <Auth0Provider
// 		 {...providerConfig}
//     >
//       {children}
//     </Auth0Provider>
//   );
// };


const ProtectedRoute = ({ component, ...args }:any) => {
	const Component = withAuthenticationRequired(component, args);
	return <Component />;
};

export const App = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<SnackbarProvider maxSnack={3}>
				<BrowserRouter>
					{/* <Auth0ProviderWithRedirectCallback
						// domain="dev-mgw72jpas4obd84e.us.auth0.com"
						// clientId="RLHdjXQH7M3j8Tj1ygx7t8YZ0jgZsnxH"
						// redirectUri={`${window.location.origin}/post-login`}
						// audience="https://dev-u0pz-ez1.eu.auth0.com/api/v2/"
						//audience="test api for perms"
						// audience="test api for perms"
						// scope="read:current_user update:current_user_metadata"
					> */}
						<Routes>
							<Route path="/operations" element={<ProtectedRoute component={OperationsLayout} />}>
								<Route index element={<OperationsHome />} />
								<Route path="home" element={<OperationsHome />} />
								<Route path="site" element={<OperationSite />} />
								<Route path="activityLog" element={<OperationsActivitylog />} />
								<Route path="dashboard" element={<OperationsDashboard />} />
							</Route>
							<Route path="/finance" element={<ProtectedRoute component={FinancesLayout} />}>
								<Route index element={<FinanceHome />} />
								<Route path="home" element={<FinanceHome />} />
								<Route path="transaction" element={<FinanceTransaction />} />
								<Route path="activityLog" element={<OperationsActivitylog />} />
							</Route>
							<Route
								path="/senior-manager-account"
								element={<ProtectedRoute component={SeniorManagerAccountLayout} />}
							>
								<Route index element={<SeniorManagerAccountHome />} />
								<Route path="home" element={<SeniorManagerAccountHome />} />
								<Route path="operations" element={<SeniorManagerAccountOperations />} />
								<Route path="finance" element={<SeniorManagerAccountFinance />} />
								<Route path="activity-log" element={<SeniorManagerAccountActivityLog />} />
							</Route>
							<Route path="/account-ui" element={<ProtectedRoute component={AccountUiLayout} />}>
								<Route index element={<AccountUiHome />} />
								<Route path="home" element={<AccountUiHome />} />
								<Route path="companies" element={<AccountUiCompanies />} />
								<Route path="companies/:id" element={<AccountUiCompany />} />
								<Route path="companies/:id/add-device" element={<AccountUiAddDevice />} />
								<Route path="companies/:id/add-employee" element={<AccountUiAddEmployee />} />
								<Route path="users" element={<AccountUiUsers />} />
								<Route path="devices" element={<AccountUiDevices />} />
							</Route>
							<Route path="/account" element={<ProtectedRoute component={MyAccount} />} />
							<Route path="/login" element={<Login />} />
							<Route path="/logout" element={<Logout />} />
							<Route path="/post-login" element={<ProtectedRoute component={PostLogin} />} />
							<Route path="/" element={<ProtectedRoute component={UserTypeSwitcher} />} />
							<Route
								path="*"
								element={<ProtectedRoute component={<Navigate to="/login" replace />} />}
							/>
						</Routes>
					{/* </Auth0ProviderWithRedirectCallback> */}
				</BrowserRouter>
			</SnackbarProvider>
		</QueryClientProvider>
	);
};
