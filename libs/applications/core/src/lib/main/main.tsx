import { Link, Outlet } from '@tanstack/react-router';
import { Button } from '@nesto/shared';

export function Main() {
  return (
    <div className="container flex flex-col py-14">
      Test
      <Link to={'create'}>
        <Button>Create</Button>
      </Link>
      <Outlet></Outlet>
    </div>
  );
}

export default Main;
