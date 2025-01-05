import { Button } from '@nesto/shared';
import { Link } from '@tanstack/react-router';

export function Main() {
  return (
    <div className="flex flex-col justify-center gap-12 mb-12">
      <div className="flex justify-center py-24 bg-secondary">
        <div className="container flex flex-col items-center justify-center gap-10 text-center text-secondary-contrast">
          <h1 className="text-5xl font-bold max-w-[700px]">
            Find the Best Mortgage Rates in Canada
          </h1>
          <Link to="/applications/create">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center">Landing Content</div>
    </div>
  );
}

export default Main;
