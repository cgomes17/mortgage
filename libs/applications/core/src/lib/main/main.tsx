import { Outlet } from '@tanstack/react-router';

export function Main() {
  return (
    <div className="container flex flex-col w-full h-full overflow-hidden py-14 bg-surface">
      <Outlet></Outlet>
    </div>
  );
}

export default Main;
