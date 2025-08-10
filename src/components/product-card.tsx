import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';

interface ProductCardProps {
  product: {
    name: string;
    price: string;
    image: string;
    imageHint: string;
    review: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-foreground truncate pr-4">{product.name}</h3>
            <Button
                variant="ghost"
                size="icon"
                className="bg-card/60 hover:bg-card/90 text-primary rounded-full h-8 w-8 flex-shrink-0"
            >
                <HeartIcon className="h-4 w-4" />
            </Button>
        </div>
        <p className="text-muted-foreground mt-1">★★★★☆</p>
        <p className="text-muted-foreground mt-4 flex-grow">{product.review}</p>
        <div className="flex items-center justify-between mt-4">
            <p className="text-xl font-bold text-primary">{product.price}</p>
            <Button size="sm">
                <ShoppingCartIcon className="mr-2 h-4 w-4" />
                Detalles
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
