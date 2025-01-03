import { render } from '@testing-library/react';

import ShellHeaderLink from './link';

describe('ShellHeaderLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShellHeaderLink />);
    expect(baseElement).toBeTruthy();
  });
});
