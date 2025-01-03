import { ShellFooter } from './footer/footer';
import { ShellHeader } from './header/header';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full justify-self-center">
      <div className="pt-12">
        <ShellHeader />
      </div>
      <div className="flex-1 pt-12">{children}</div>
      <div className="justify-end">
        <ShellFooter />
      </div>
    </div>
  );
}

export default Shell;
