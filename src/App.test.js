import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/List Of Employees/i);
  expect(headerElement).toBeInTheDocument();
});