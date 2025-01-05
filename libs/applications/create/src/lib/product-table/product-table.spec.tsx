import { render } from '@testing-library/react';

import ProductTable from './product-table';

describe('ProductTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductTable />);
    expect(baseElement).toBeTruthy();
  });
});
