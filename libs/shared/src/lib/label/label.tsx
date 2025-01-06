import { tv } from 'tailwind-variants';

const button = tv({
  base: 'flex mb-2 text-sm font-medium text-surface-container-contrast',
});

export function Label({
  children,
  ...labelProps
}: {
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label {...labelProps} className={button()}>
      {children}
    </label>
  );
}

export default Label;
