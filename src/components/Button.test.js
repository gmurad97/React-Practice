import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('renders button with text', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const buttonElement = getByText(/click me/i);
    
    expect(buttonElement).toBeInTheDocument();
});

test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = getByText(/click me/i);

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});
