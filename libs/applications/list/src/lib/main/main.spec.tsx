import { render } from '@testing-library/react';
import React from 'react';
import { Main } from './main';

jest.mock('@tanstack/react-router', () => {
  return {
    Button: jest.fn(),
    Card: jest.fn(),
  };
});

jest.mock('@tanstack/react-router', () => {
  return {
    Link: jest.fn(),
  };
});

jest.mock('@nesto/applications/data', () => {
  return {
    useApplications: jest.fn().mockImplementation(() => ({ data: [] })),
  };
});

describe('Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toBeTruthy();
  });
});
