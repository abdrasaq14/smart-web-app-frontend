import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { OperationsLayout } from '../App';

test('Checking App snapshot', () => {
	const app = render(<Operation />);
	expect(app.container.firstChild).toMatchSnapshot();
});
