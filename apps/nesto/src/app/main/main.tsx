import { Button } from '@nesto/shared';
import { Link } from '@tanstack/react-router';

export function Main() {
  return (
    <div className="container flex flex-row justify-center py-24 bg-secondary">
      <div className="flex flex-col gap-10 items-center justify-center w-[700px] text-secondary-contrast-variant text-center">
        <h1 className="font-bold text-5xl">
          Find the Best Mortgage Rates in Canada
        </h1>
        <Link to="/applications/create">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
