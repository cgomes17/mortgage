import {
  useBestProducts,
  useCreateApplication,
  useFixedProducts,
  useVariableProducts,
} from '@nesto/applications/data';
import { Button } from '@nesto/shared';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ProductCard } from '../product-card/product-card';
import ProductTable from '../product-table/product-table';

export function Main() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const { data: bestProducts } = useBestProducts();
  const { data: variableProducts } = useVariableProducts();
  const { data: fixedProducts } = useFixedProducts();
  const navigate = useNavigate();

  const { mutate } = useCreateApplication((data) => {
    toast.success('Application created');
    navigate({
      from: '/applications/create',
      to: `/applications/${data.id}`,
    });
  });

  const createApplication = (productId: number) => {
    mutate({
      productId: productId,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-row flex-wrap justify-center gap-6">
        {bestProducts?.map((product) => (
          <ProductCard
            onSelectClick={(productId: number) => createApplication(productId)}
            isBest={true}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      {(fixedProducts?.length || variableProducts?.length) && (
        <Button colour="secondary" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Best Only' : 'Show All'}
        </Button>
      )}

      {showAll && (
        <div className="flex flex-row flex-wrap justify-center gap-8">
          <ProductTable
            onSelectClick={(productId: number) => createApplication(productId)}
            type={'FIXED'}
            products={fixedProducts}
          />
          <ProductTable
            onSelectClick={(productId: number) => createApplication(productId)}
            type={'VARIABLE'}
            products={variableProducts}
          />
        </div>
      )}
    </div>
  );
}

export default Main;
