import { render } from '@testing-library/react';
import { Shell } from './shell';

jest.mock('@tanstack/react-router', () => {
  return {
    Link: jest.fn(),
  };
});

describe('Shell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shell>Content</Shell>);
    expect(baseElement).toBeTruthy();
  });
});
