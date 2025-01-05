import { request } from '@nesto/shared';
import { useQuery } from '@tanstack/react-query';
import { Product } from './models/product';

const getByType = (products: Product[], type: Product['type']): Product[] => {
  return products.filter((product) => product.type === type);
};

const getLowestBestRatesByType = (products: Product[]): Product[] => {
  const result = products.reduce((acc, product) => {
    const { type, bestRate } = product;
    const lowest = acc.get(type);
    if (!lowest || bestRate < lowest.bestRate) {
      acc.set(type, product);
    }
    return acc;
  }, new Map<string, Product>());

  return [...result].map(([, product]) => product);
};

export const loadProducts = async (): Promise<Product[]> => {
  return await request<Product[]>({ url: '/products', method: 'GET' });
};

const useProducts = <T = Product[]>(select: (data: Product[]) => T) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: loadProducts,
    select,
  });
};

export const useAllProducts = () => useProducts((data) => data);
export const useBestProducts = () =>
  useProducts((data) => getLowestBestRatesByType(data ?? []));
export const useFixedProducts = () =>
  useProducts((data) => getByType(data ?? [], 'FIXED'));
export const useVariableProducts = () =>
  useProducts((data) => getByType(data ?? [], 'VARIABLE'));
