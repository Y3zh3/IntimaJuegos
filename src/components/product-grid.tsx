import ProductCard from './product-card';

const products = [
  {
    name: 'El Conejito Juguetón',
    price: 'S/ 279.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'vibrator',
    review: 'Un clásico reinventado para un placer dual. Su diseño ergonómico y sus múltiples modos de vibración lo convierten en el compañero perfecto para explorar.'
  },
  {
    name: 'Vara Mágica Celestial',
    price: 'S/ 359.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'wand vibrator',
    review: 'Potente, versátil y sorprendentemente silencioso. Ideal para masajes corporales que terminan en una experiencia celestial. Un imprescindible en cualquier colección.'
  },
  {
    name: 'Anillo del Placer Infinito',
    price: 'S/ 99.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'cock ring',
    review: 'Añade un extra de resistencia para él y vibraciones excitantes para ella. Este anillo elástico y cómodo es perfecto para prolongar el placer compartido.'
  },
  {
    name: 'Balas de Bolsillo Secretas',
    price: 'S/ 139.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'bullet vibrator',
    review: 'Discretas pero potentes. Estas pequeñas balas son perfectas para llevar la excitación a cualquier lugar o para añadir un estímulo preciso durante el juego.'
  },
    {
    name: 'Kit de Bondage para Principiantes',
    price: 'S/ 199.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'bondage kit',
    review: 'Explora el poder del juego de sumisión y dominio con este kit suave y seguro. Incluye todo lo necesario para empezar a atar lazos más íntimos.'
  },
  {
    name: 'Huevo Vibrador a Distancia',
    price: 'S/ 239.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'remote egg',
    review: 'El juego perfecto para citas nocturnas o para añadir un secreto excitante a la vida cotidiana. Dale el control a tu pareja y prepárate para sorpresas.'
  },
   {
    name: 'Dildo Realista de Silicona',
    price: 'S/ 319.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'dildo',
    review: 'Fabricado con silicona de grado médico, su textura suave y su forma realista ofrecen un placer increíblemente natural. Flexible y con una potente ventosa.'
  },
  {
    name: 'Aceite de Masaje Sensual',
    price: 'S/ 79.99',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'massage oil',
    review: 'Despierta los sentidos con este aceite de masaje comestible. Su aroma afrodisíaco y su tacto sedoso son el preludio perfecto para una noche de pasión.'
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
