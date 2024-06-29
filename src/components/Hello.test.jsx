import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hello from './Hello';

test('renders hello message', () => {
    const { getByText } = render(<Hello name="World" />);
    const helloElement = getByText(/Hello, World!/i);
    expect(helloElement).toBeInTheDocument();
});
