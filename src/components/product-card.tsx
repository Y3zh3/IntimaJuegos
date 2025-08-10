import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    name: string;
    price: string;
    review: string;
    longDescription: string;
    image: string;
    imageHint: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Dialog>
      <Card className="group flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border-transparent hover:border-primary">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="h-60 w-full object-cover"
            data-ai-hint={product.imageHint}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground truncate pr-4">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 flex flex-col flex-grow">
          <p className="text-muted-foreground mt-4 flex-grow">{product.review}</p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xl font-bold text-primary">{product.price}</p>
            <DialogTrigger asChild>
              <Button size="sm">
                <ShoppingCartIcon className="mr-2 h-4 w-4" />
                Detalles
              </Button>
            </DialogTrigger>
          </div>
        </CardContent>
      </Card>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>
            {product.longDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-between mt-4">
            <p className="text-2xl font-bold text-primary">{product.price}</p>
            <Button>
                <ShoppingCartIcon className="mr-2 h-4 w-4" />
                Añadir al Carrito
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
