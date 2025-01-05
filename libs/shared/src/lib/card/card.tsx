import { tv } from 'tailwind-variants';

const card = tv({
  base: 'flex flex-col p-6 rounded-lg bg-surface-container text-surface-container-contrast',
  variants: {},
  defaultVariants: {},
});

export function Card({ children }: { children: React.ReactNode }) {
  return <div className={card()}>{children}</div>;
}

export default Card;
