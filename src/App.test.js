import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  render(<App />);
  const textElement = screen.getByText(/get fucked/i);
  expect(textElement).toBeInTheDocument();
});

test('renders text', () => {
  render(<App />);
  const textElement = screen.getByText(/get fucked/i);
  expect(textElement).toBeInTheDocument();
});
