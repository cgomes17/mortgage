import { Link } from '@tanstack/react-router';
import { ShellHeaderLinkText } from './link/link';
import { ReactComponent as NestoLogo } from './../../../assets/logo-nesto-en.svg';
import { Button } from '@nesto/shared';

export function ShellHeader() {
  return (
    <div className="container bg-surface-container flex flex-row items-center justify-between gap-2 mx-auto py-6">
      <div className="flex flex-row items-center gap-12">
        <Link to="/">
          <NestoLogo title="Nesto Logo" className="w-[121px] h-[53px]" />
        </Link>
        <div className="flex flex-row gap-8">
          <Link to="/about-us">
            <ShellHeaderLinkText label="About Us" />
          </Link>
          <Link to="/mortgage-rates">
            <ShellHeaderLinkText label="Mortgage Rates" />
          </Link>
          <Link to="/contact">
            <ShellHeaderLinkText label="Contact Us" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">
        <Link to="/login">
          <ShellHeaderLinkText label="Login" />
        </Link>
        <Link to="/applications">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
}

export default ShellHeader;
