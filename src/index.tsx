// polyfills
import 'whatwg-fetch';
import 'url-polyfill';
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';
import React from 'react';
import { createRoot } from 'react-dom/client';
import '../reset.css';
import { App } from './view/App';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App/>);