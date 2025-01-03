import { Shell } from './shell/shell';
import { RouterDevtools } from '@nesto/shared';
import { Outlet } from '@tanstack/react-router';

export function App() {
  return (
    <>
      <Shell>
        <Outlet />
      </Shell>
      <RouterDevtools />
    </>
  );
}

export default App;
