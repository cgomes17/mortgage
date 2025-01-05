import { render } from '@testing-library/react';
import React from 'react';
import { ProductCard } from './product-card';

describe('ProductCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProductCard product={[]} onSelectClick={(id: number) => null} />
    );
    expect(baseElement).toBeTruthy();
  });
});
