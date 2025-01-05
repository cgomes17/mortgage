import { render } from '@testing-library/react';
import { Shell } from './shell';

jest.mock('@tanstack/react-router', () => {
  return {
    Link: jest.fn(),
  };
});

jest.mock('@tanstack/react-query', () => {
  return {
    useIsFetching: jest.fn(),
  };
});

jest.mock('@nesto/shared', () => {
  return {
    Spinner: jest.fn(),
    Splash: jest.fn(),
  };
});

jest.mock('./footer/footer', () => {
  return {
    ShellFooter: jest.fn(),
  };
});

jest.mock('./header/header', () => {
  return {
    ShellHeader: jest.fn(),
  };
});

describe('Shell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shell>Content</Shell>);
    expect(baseElement).toBeTruthy();
  });
});
