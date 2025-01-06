import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';

const input = tv({
  base: 'bg-gray-50 border border-gray-300 text-surface-container-contrast text-sm rounded-lg flex w-full p-2.5',
  variants: {
    color: {
      info: 'focus:ring-secondary focus:border-secondary',
      error:
        'bg-red-50 border border-error text-red-900 placeholder-red-700 focus:ring-error focus:border-error ',
    },
  },
  defaultVariants: {
    color: 'info',
  },
});

export const TextInput = forwardRef<
  HTMLInputElement,
  {
    helperText?: JSX.Element;
    colour?: 'info' | 'error';
  } & React.InputHTMLAttributes<HTMLInputElement>
>(({ helperText, colour, ...props }, ref) => (
  <div className="flex flex-col gap-1">
    <input ref={ref} {...props} className={input({ color: colour })} />
    <div>{helperText}</div>
  </div>
));

export default TextInput;
