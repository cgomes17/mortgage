import {
  useAllProducts,
  useBestProducts,
  useFixedProducts,
  useVariableProducts,
} from '@nesto/applications/data';
import { ProductCard } from '../product-card/product-card';
import { Product } from '@nesto/applications/data';
import { Button } from '@nesto/shared';
import { useState } from 'react';
import ProductTable from '../product-table/product-table';

export function Main() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const { data: bestProducts } = useBestProducts();
  const { data: variableProducts } = useVariableProducts();
  const { data: fixedProducts } = useFixedProducts();

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-row flex-wrap gap-6">
        {bestProducts?.map((product) => (
          <ProductCard isBest={true} key={product.id} product={product} />
        ))}
      </div>
      {(fixedProducts?.length || variableProducts?.length) && (
        <Button colour="secondary" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Best Only' : 'Show All'}
        </Button>
      )}

      {showAll && (
        <div className="flex flex-row flex-wrap gap-8">
          <ProductTable type={'FIXED'} products={fixedProducts} />
          <ProductTable type={'VARIABLE'} products={variableProducts} />
        </div>
      )}
    </div>
  );
}

export default Main;
