import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './Login';
import { Home as OperationsHome } from './operations/Home';
import { Dashboard as OperationsDashboard } from './operations/Dashboard';
import { Home as FinanceHome } from './finance/Home';
import { Operations } from './operations/Operations';
import { Finances } from './finance/Finances';
import { MyAccount as OperationsMyAccount } from './operations/MyAccount';
import { ActivityLog as OperationsActivitylog } from './operations/ActivityLog';
import { Site as OperationSite } from './operations/Site';
import { Transactions as FinanceTransaction } from './finance/Transactions';

import { Home as SeniorManagerAccountHome } from './seniorManagerAccout/Home';
import { Home as SeniorManagerAccountOperations } from './seniorManagerAccout/Operations';
import { Home as SeniorManagerAccountFinance } from './seniorManagerAccout/Finance';
import { ActivityLog as SeniorManagerAccountActivityLog } from './seniorManagerAccout/ActivityLog';

// import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserTypeSwitcher from './UserTypeSwitcher';
import { SeniorManagerAccountLayout } from './seniorManagerAccout/SeniorManagerAccountLayout';

export const App = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			{/*<Auth0Provider*/}
			{/*	domain="dev-u0pz-ez1.eu.auth0.com"*/}
			{/*	clientId="dZdIDvmc3hKd5gPJJJsiSKSwkXJdomPg"*/}
			{/*	redirectUri={window.location.origin}*/}
			{/*>*/}
			<BrowserRouter>
				<Routes>
					<Route path="/operations" element={<Operations />}>
						<Route index element={<OperationsHome />} />
						<Route path="home" element={<OperationsHome />} />
						<Route path="site" element={<OperationSite />} />
						<Route path="activityLog" element={<OperationsActivitylog />} />
						<Route path="myAccount" element={<OperationsMyAccount />} />
						<Route path="dashboard" element={<OperationsDashboard />} />
					</Route>
					<Route path="/finance" element={<Finances />}>
						<Route index element={<FinanceHome />} />
						<Route path="home" element={<FinanceHome />} />
						<Route path="transaction" element={<FinanceTransaction />} />
						<Route path="activityLog" element={<OperationsActivitylog />} />
						<Route path="myAccount" element={<OperationsMyAccount />} />
					</Route>
					<Route path="/senior-manager-account" element={<SeniorManagerAccountLayout />}>
						<Route index element={<SeniorManagerAccountHome />} />
						<Route path="home" element={<SeniorManagerAccountHome />} />
						<Route path="operations" element={<SeniorManagerAccountOperations />} />
						<Route path="finance" element={<SeniorManagerAccountFinance />} />
						<Route path="activity-log" element={<SeniorManagerAccountActivityLog />} />
						<Route path="myAccount" element={<OperationsMyAccount />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<UserTypeSwitcher />} />
					<Route path="*" element={<Navigate to="/login" replace />} />
				</Routes>
			</BrowserRouter>
			{/*</Auth0Provider>*/}
		</QueryClientProvider>
	);
};
