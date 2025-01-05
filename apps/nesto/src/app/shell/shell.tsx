import { Spinner, Splash } from '@nesto/shared';
import { useIsFetching } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ShellFooter } from './footer/footer';
import { ShellHeader } from './header/header';

export function Shell({ children }: { children: React.ReactNode }) {
  const isFetching = useIsFetching();
  return (
    <div className="flex flex-col w-full h-full justify-self-center">
      <ShellHeader />
      <div className="flex-1">
        {isFetching ? (
          <Splash>
            <Spinner size="lg" className="mb-[101px] z-50" />
          </Splash>
        ) : null}
        {children}
      </div>
      <div className="justify-end">
        <ShellFooter />
      </div>
      <Toaster
        toastOptions={{
          removeDelay: 500,
          position: 'bottom-center',
        }}
      />
    </div>
  );
}

export default Shell;
