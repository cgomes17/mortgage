export type CreateApplication = {
  productId: number;
};

export type UpdateApplication = {
  applicants: SetApplicant[];
  productId: number;
};

export type SetApplicant = {
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
};
