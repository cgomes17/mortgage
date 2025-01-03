import { render } from '@testing-library/react';
import App from './app';

jest.mock('@tanstack/react-router', () => ({
  Outlet: () => <div data-testid="Outlet" />,
}));

jest.mock('./shell/shell', () => ({
  Shell: () => <div data-testid="Shell" />,
}));

jest.mock('@nesto/shared', () => ({
  RouterDevtools: () => <div data-testid="RouterDevtools" />,
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
