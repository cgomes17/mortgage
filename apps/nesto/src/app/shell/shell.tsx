import { Link } from '@tanstack/react-router';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Welcome to Shell!</h1>
      <div className="flex-1 pt-12">{children}</div>
      <div className="flex flex-row gap-4">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/apply">Apply</Link>
      </div>
    </>
  );
}

export default Shell;
