import { tv } from 'tailwind-variants';
import { BasicColours, BasicSizes } from '../variant-models';
import { ReactComponent as CircleSpinner } from './spinner.svg';

const spinner = tv({
  base: 'animate-spin',
  variants: {
    color: {
      primary: 'text-primary animate-spin fill-secondary',
      secondary: 'text-secondary animate-spin fill-primary',
    },
    size: {
      sm: 'w-10 h-10',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export function Spinner({
  colour,
  size,
  ...divProps
}: {
  colour?: BasicColours;
  size?: BasicSizes;
} & React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div role="status" {...divProps}>
      <CircleSpinner className={spinner({ size: size, color: colour })} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
