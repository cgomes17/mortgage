import { render } from '@testing-library/react';
import { FooterLinkList } from './link-list';

describe('FooterLinkList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FooterLinkList name="Test Label" items={[]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
