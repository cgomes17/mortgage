import { render } from '@testing-library/react';

import Splash from './splash';

describe('Splash', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Splash />);
    expect(baseElement).toBeTruthy();
  });
});
