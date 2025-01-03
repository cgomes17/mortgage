export function ShellHeaderLinkText({ label }: { label: string }) {
  return (
    <div className="text-sm font-bold text-surface-contrast hover:text-surface-contrast-hover">
      {label}
    </div>
  );
}

export default ShellHeaderLinkText;
