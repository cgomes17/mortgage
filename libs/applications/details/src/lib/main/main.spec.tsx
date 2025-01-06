import { render } from '@testing-library/react';
import { Main } from './main';

jest.mock('@nesto/applications/data', () => {
  return {
    useApplicationDetails: jest.fn().mockImplementation(() => ({ data: {} })),
    useUpdateApplication: jest
      .fn()
      .mockImplementation(() => ({ mutate: jest.fn() })),
  };
});

jest.mock('@tanstack/react-router', () => {
  return {
    useParams: jest.fn().mockImplementation(() => ({ id: '1' })),
  };
});

jest.mock('@tanstack/react-query', () => {
  return {
    useQueryClient: jest.fn(),
  };
});

describe('Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toBeTruthy();
  });
});
