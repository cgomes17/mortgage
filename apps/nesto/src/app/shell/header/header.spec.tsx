import { render } from '@testing-library/react';
import ShellHeader from './header';

jest.mock('@tanstack/react-router', () => ({
  Link: () => <div data-testid="Link" />,
}));

jest.mock('./link/link', () => ({
  ShellHeaderLinkText: () => <div data-testid="ShellHeaderLinkText" />,
}));

jest.mock('@nesto/shared', () => ({
  Button: () => <div data-testid="Button" />,
}));

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShellHeader />);
    expect(baseElement).toBeTruthy();
  });
});
