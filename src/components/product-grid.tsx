import ProductCard from './product-card';

const products = [
  {
    name: 'El Conejito Juguetón',
    price: '€69.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'vibrator'
  },
  {
    name: 'Vara Mágica Celestial',
    price: '€89.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'wand vibrator'
  },
  {
    name: 'Anillo del Placer Infinito',
    price: '€24.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'cock ring'
  },
  {
    name: 'Balas de Bolsillo Secretas',
    price: '€34.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'bullet vibrator'
  },
    {
    name: 'Kit de Bondage para Principiantes',
    price: '€49.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'bondage kit'
  },
  {
    name: 'Huevo Vibrador a Distancia',
    price: '€59.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'remote egg'
  },
   {
    name: 'Dildo Realista de Silicona',
    price: '€79.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'dildo'
  },
  {
    name: 'Aceite de Masaje Sensual',
    price: '€19.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'massage oil'
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}
