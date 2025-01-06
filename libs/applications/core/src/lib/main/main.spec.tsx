import { render } from '@testing-library/react';

import React from 'react';
import Main from './main';

jest.mock('@tanstack/react-router', () => ({
  Outlet: () => <div data-testid="Outlet" />,
}));

describe('Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toBeTruthy();
  });
});
