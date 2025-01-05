// eslint-disable-next-line @nx/enforce-module-boundaries
import { Product } from 'libs/applications/data/src/lib/models/product';
import { Button, Card } from '@nesto/shared';
import { Link } from '@tanstack/react-router';

export function ProductCard({
  product,
  isBest = false,
}: {
  product: Product;
  isBest?: boolean;
}) {
  return (
    <Card>
      <div className="flex flex-col items-center gap-8 text-center ">
        {isBest && (
          <div className="px-5 py-2 -mt-6 font-bold rounded-b-xl bg-secondary text-secondary-contrast">
            Best {product.type}
          </div>
        )}
        <span className="text-xl font-semibold">{product.name}</span>
        <div className="flex flex-row justify-start font-bold text-7xl">
          {product.bestRate}
          <span className="text-4xl">%</span>
        </div>
        <span className="text-lg font-bold">{product.lenderName}</span>

        <Link to={`/applications/${product.id}`}>
          <Button size="lg">Get This Rate</Button>
        </Link>
      </div>
    </Card>
  );
}

export default ProductCard;
