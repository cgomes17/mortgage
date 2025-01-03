import { render } from '@testing-library/react';

import Footer from './footer';

jest.mock('@tanstack/react-router', () => ({
  Link: () => <div data-testid="Link" />,
}));

jest.mock('./social-links/social-links', () => ({
  SocialLinks: () => <div data-testid="SocialLinks" />,
}));

jest.mock('./link-list/link-list', () => ({
  FooterLinkList: () => <div data-testid="FooterLinkList" />,
  FooterLinkListItem: {},
}));

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
