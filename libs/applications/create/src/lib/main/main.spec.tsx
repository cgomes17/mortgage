import { render } from '@testing-library/react';
import { Main } from './main';

jest.mock('@tanstack/react-router', () => {
  return {
    useNavigate: jest.fn(),
  };
});

jest.mock('@nesto/shared', () => {
  return {
    Button: jest.fn(),
  };
});

jest.mock('@nesto/applications/data', () => {
  return {
    useBestProducts: jest.fn().mockImplementation(() => ({ data: [] })),
    useCreateApplication: jest
      .fn()
      .mockImplementation(() => ({ mutate: jest.fn() })),
    useFixedProducts: jest.fn().mockImplementation(() => ({ data: [] })),
    useVariableProducts: jest.fn().mockImplementation(() => ({ data: [] })),
  };
});

describe('Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toBeTruthy();
  });
});
