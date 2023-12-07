
// ButtonComponent.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PracticeComponent from '../components/PracticeCompoent';

test('button click updates state and disables button', () => {
    // const app = render (<PracticeComponent/>)
    // console.log(app)
  const app = render(<PracticeComponent />);
  console.log(app)
  const buttonElement = app.getByText('Click me');

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveTextContent('Clicked!');
  expect(buttonElement).toBeDisabled();

  const inputElement = app.getByRole("textbox")
  fireEvent.change(inputElement, { target: { value: 'New Value' } });

  expect(inputElement).toHaveValue('New Value');
  expect(app.getByText('New Value')).toBeInTheDocument();
});
