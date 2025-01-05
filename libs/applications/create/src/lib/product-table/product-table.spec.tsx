import { render } from '@testing-library/react';
import React from 'react';
import { ProductTable } from './product-table';

describe('ProductTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProductTable
        type={'FIXED'}
        products={[]}
        onSelectClick={(id: number) => null}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
