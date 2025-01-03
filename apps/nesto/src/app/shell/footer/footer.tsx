import { FooterLinkList, FooterLinkListItem } from './link-list/link-list';
import logo from './../../../assets/logo-nesto-en-variant.png';
import { SocialLinks } from './social-links/social-links';
import { Link } from '@tanstack/react-router';

export function ShellFooter() {
  const featureItems: FooterLinkListItem[] = [
    { label: 'New Mortgage', url: 'new-mortgage' },
    { label: 'Renewal', url: 'renewal' },
    { label: 'Refinance', url: 'refinance' },
    { label: 'Mortgage Rates', url: 'mortgage-rates' },
  ];

  const resourcesItems: FooterLinkListItem[] = [
    { label: 'Blog', url: 'blog' },
    { label: 'Developers', url: 'developers' },
    { label: 'Support', url: 'support' },
  ];

  const companyItems: FooterLinkListItem[] = [
    { label: 'Glossary', url: 'glossary' },
    { label: 'FAQ', url: 'faq' },
  ];

  return (
    <div className="py-12 bg-surface-container-secondary text-surface-container-secondary-contrast">
      <div className="container flex flex-row justify-between mx-auto ">
        <Link to="/">
          <img className="w-[121px] h-[53px]" src={logo} alt="Nesto Logo" />
        </Link>
        <div className="flex flex-row gap-32">
          <div className="flex flex-row gap-24 text-xs">
            <FooterLinkList name="Features" items={featureItems} />
            <FooterLinkList name="Resources" items={resourcesItems} />
            <FooterLinkList name="Company" items={companyItems} />
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default ShellFooter;
