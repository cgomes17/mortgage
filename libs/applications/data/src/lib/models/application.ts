import { Product } from './product';

export type Applicant = {
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type Application = {
  readonly id: string;
  token: string;
  type: 'NEW' | 'RENEWAL' | 'REFINANCE';
  applicants: Applicant[];
  productId?: number;
  readonly createdAt: string;
};

export type ApplicationDetails = Omit<Application, 'productId'> & {
  product: Product;
};