import { render } from '@testing-library/react';

import UpdateForm from './update-form';

describe('UpdateForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateForm />);
    expect(baseElement).toBeTruthy();
  });
});
