export function Splash({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute flex flex-col items-center justify-center w-full h-full">
      <div className="absolute z-30 w-full h-full opacity-50 bg-surface"></div>
      {children}
    </div>
  );
}

export default Splash;
