import { tv } from 'tailwind-variants';
import { BasicColours, BasicSizes } from '../variant-models';

const button = tv({
  base: 'font-medium rounded-full hover:ring-4',
  variants: {
    color: {
      primary:
        'bg-primary text-primary-contrast hover:ring-primary hover:bg-primary-contrast hover:text-primary',
      secondary:
        'bg-secondary text-secondary-contrast hover:ring-secondary hover:bg-secondary-contrast hover:text-secondary',
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-5 py-2.5 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export function Button({
  colour,
  size,
  children,
  ...buttonProps
}: {
  colour?: BasicColours;
  size?: BasicSizes;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={button({ size: size, color: colour })}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;
