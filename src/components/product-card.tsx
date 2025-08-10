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
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.imageHint}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-card/60 hover:bg-card/90 text-primary rounded-full h-8 w-8"
          >
            <HeartIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground truncate">{product.name}</h3>
          <p className="text-muted-foreground mt-1">★★★★☆</p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xl font-bold text-primary">{product.price}</p>
            <Button size="sm">
              <ShoppingCartIcon className="mr-2 h-4 w-4" />
              Añadir
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
