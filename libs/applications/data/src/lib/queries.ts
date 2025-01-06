import { request } from '@nesto/shared';
import { DefaultError, useMutation, useQuery } from '@tanstack/react-query';
import { Application, ApplicationDetails } from './models/application';
import { CreateApplication, UpdateApplication } from './models/commands';
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

const useProducts = <T = Product[]>(select: (data: Product[]) => T) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => request<Product[]>({ url: '/products', method: 'GET' }),
    select,
  });
};

export const useApplications = () => {
  return useQuery({
    queryKey: ['applications'],
    queryFn: () =>
      request<Application[]>({ url: '/applications', method: 'GET' }),
  });
};

const useApplication = (applicationId: string) => {
  return useQuery<Application>({
    queryKey: ['applicationDetails', applicationId],
    queryFn: () =>
      request<Application>({
        url: `/applications/${applicationId}`,
        method: 'GET',
      }),
  });
};

export const useApplicationDetails = (
  applicationId: string
): ApplicationDetails | null => {
  const { data: application } = useApplication(applicationId);
  const { data: products } = useAllProducts();

  if (!application || !products) return null;
  const selectedProduct = products?.find(
    (product) => product.id === application?.productId
  );

  if (!selectedProduct) throw new Error('Product not found');

  return {
    id: application.id,
    token: application.token,
    type: application.type,
    applicants: application.applicants,
    createdAt: application.createdAt,
    product: selectedProduct,
  };
};

export const useCreateApplication = (onSuccess: (data: Application) => void) =>
  useMutation<Application, DefaultError, CreateApplication>({
    mutationFn: (command: CreateApplication) =>
      request<Application>({
        url: '/applications',
        method: 'POST',
        data: command,
      }),
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

export const useUpdateApplication = (
  applicationId: string,
  onSuccess: (data: Application) => void
) =>
  useMutation<Application, DefaultError, UpdateApplication>({
    mutationFn: (command: UpdateApplication) =>
      request<Application>({
        url: `/applications/${applicationId}`,
        method: 'PUT',
        data: command,
      }),
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

export const useAllProducts = () => useProducts((data) => data);
export const useBestProducts = () =>
  useProducts((data) => getLowestBestRatesByType(data ?? []));
export const useFixedProducts = () =>
  useProducts((data) => getByType(data ?? [], 'FIXED'));
export const useVariableProducts = () =>
  useProducts((data) => getByType(data ?? [], 'VARIABLE'));
