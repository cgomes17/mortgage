import { Button } from '@nesto/shared';
import { Link } from '@tanstack/react-router';
import { ReactComponent as NestoLogo } from './../../../assets/logo-nesto-en.svg';
import { ShellHeaderLinkText } from './link/link';

export function ShellHeader() {
  return (
    <div className="flex flex-col w-full bg-surface-container">
      <div className="container flex flex-col w-full py-6 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row ">
          <div className="flex flex-col items-center justify-center gap-12 text-center md:text-left md:flex-row">
            <Link to="/">
              <NestoLogo title="Nesto Logo" className="w-[121px] h-[53px]" />
            </Link>
            <div className="flex flex-col gap-8 md:flex-row">
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
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <Link to="/login">
              <ShellHeaderLinkText label="Login" />
            </Link>
            <Link to="/applications/create">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShellHeader;
