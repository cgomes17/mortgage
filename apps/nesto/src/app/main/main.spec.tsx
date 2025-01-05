import { render } from '@testing-library/react';
import Main from './main';

jest.mock('@tanstack/react-router', () => {
  return {
    Link: jest.fn(),
  };
});

jest.mock('@nesto/shared', () => {
  return {
    Button: jest.fn(),
  };
});

describe('Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toBeTruthy();
  });
});
