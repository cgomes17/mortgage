import { Product } from '@nesto/applications/data';
import { Button, Card } from '@nesto/shared';

export function ProductTable({
  type,
  products,
  onSelectClick,
}: {
  type: Product['type'];
  products: Product[] | undefined;
  onSelectClick: (id: number) => void;
}) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <span className="px-6 pt-6 pb-3 -mx-6 -mt-6 text-xl font-bold rounded-t-lg bg-secondary text-secondary-contrast">
          {type}
        </span>
        {products?.map((product, i) => (
          <div className="flex flex-col gap-2" key={product.id}>
            <div className="flex flex-row items-center gap-8">
              <div className="flex flex-col flex-1">
                <span className="font-bold">{product.name}</span>
                <span>{product.lenderName}</span>
              </div>
              <div className="w-16">{product.bestRate}%</div>
              <Button size="sm" onClick={() => onSelectClick(product.id)}>
                Select
              </Button>
            </div>
            {i < products.length - 1 && (
              <div className="flex flex-row gap-8 border-b-2"></div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default ProductTable;
