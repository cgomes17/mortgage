import { render } from '@testing-library/react';

import ControlError from './control-error';

describe('ControlError', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ControlError />);
    expect(baseElement).toBeTruthy();
  });
});
