import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AI Medical Monitoring System title', () => {
  render(<App />);
  const titleElement = screen.getByText(/AI Medical Monitoring System/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders Phase 1 status message', () => {
  render(<App />);
  const phaseElement = screen.getByText(/Phase 1: Foundation Complete/i);
  expect(phaseElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const dashboardLink = screen.getByText(/Dashboard/i);
  const loginLink = screen.getByText(/Login/i);
  expect(dashboardLink).toBeInTheDocument();
  expect(loginLink).toBeInTheDocument();
});