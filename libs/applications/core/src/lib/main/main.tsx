import { Outlet } from '@tanstack/react-router';

export function Main() {
  return (
    <div className="flex flex-col w-full h-full bg-surface">
      <div className="container flex flex-col w-full h-full mx-auto overflow-hidden py-14">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Main;
