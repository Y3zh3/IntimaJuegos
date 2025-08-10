import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    name: 'El Conejito Juguetón',
    price: 'S/ 279.99',
    image: 'https://placehold.co/400x410.png',
    imageHint: 'vibrator',
    review: 'Un clásico reinventado para un placer dual. Su diseño ergonómico y sus múltiples modos de vibración lo convierten en el compañero perfecto para explorar.',
    longDescription: 'Este vibrador de doble estimulación es famoso por una razón. Mientras el eje principal se encarga del placer interno, el estimulador de clítoris con forma de conejo ofrece vibraciones intensas justo donde más lo necesitas. Fabricado con silicona suave y segura para el cuerpo, es recargable por USB y resistente al agua.'
  },
  {
    name: 'Vara Mágica Celestial',
    price: 'S/ 359.99',
    image: 'https://placehold.co/400x420.png',
    imageHint: 'wand vibrator',
    review: 'Potente, versátil y sorprendentemente silencioso. Ideal para masajes corporales que terminan en una experiencia celestial. Un imprescindible en cualquier colección.',
    longDescription: 'Conocida por sus vibraciones profundas y retumbantes, la Vara Mágica es una leyenda. Su cabezal flexible de silicona distribuye las vibraciones de manera uniforme, perfecta tanto para aliviar la tensión muscular como para alcanzar orgasmos increíbles. No te dejes engañar por su tamaño, su poder es celestial.'
  },
  {
    name: 'Anillo del Placer Infinito',
    price: 'S/ 99.99',
    image: 'https://placehold.co/400x430.png',
    imageHint: 'cock ring',
    review: 'Añade un extra de resistencia para él y vibraciones excitantes para ella. Este anillo elástico y cómodo es perfecto para prolongar el placer compartido.',
    longDescription: 'Este anillo vibrador está diseñado para el placer mutuo. Se ajusta cómodamente en la base del pene, ayudando a mantener una erección más firme y duradera, mientras que su pequeño pero potente vibrador estimula el clítoris durante la penetración. ¡La receta para orgasmos simultáneos!'
  },
  {
    name: 'Balas de Bolsillo Secretas',
    price: 'S/ 139.99',
    image: 'https://placehold.co/400x440.png',
    imageHint: 'bullet vibrator',
    review: 'Discretas pero potentes. Estas pequeñas balas son perfectas para llevar la excitación a cualquier lugar o para añadir un estímulo preciso durante el juego.',
    longDescription: 'Pequeña, discreta y sorprendentemente poderosa. Esta bala vibradora es tu aliada para el placer en solitario o en pareja. Su punta precisa es ideal para la estimulación del clítoris y otras zonas erógenas. Llévala en tu bolso y ten un secreto excitante siempre a mano.'
  },
  {
    name: 'Kit de Bondage para Principiantes',
    price: 'S/ 199.99',
    image: 'https://placehold.co/400x450.png',
    imageHint: 'bondage kit',
    review: 'Explora el poder del juego de sumisión y dominio con este kit suave y seguro. Incluye todo lo necesario para empezar a atar lazos más íntimos.',
    longDescription: 'Si sienten curiosidad por el bondage, este es el punto de partida perfecto. Incluye unas esposas suaves, una mordaza de bola y una venda para los ojos. Todos los materiales son seguros para el cuerpo y están diseñados para la comodidad, permitiéndoles explorar el juego de poder de forma segura y consensuada.'
  },
  {
    name: 'Huevo Vibrador a Distancia',
    price: 'S/ 239.99',
    image: 'https://placehold.co/400x460.png',
    imageHint: 'remote egg',
    review: 'El juego perfecto para citas nocturnas o para añadir un secreto excitante a la vida cotidiana. Dale el control a tu pareja y prepárate para sorpresas.',
    longDescription: 'La emoción del juego público (o privado) a un nuevo nivel. Este huevo vibrador se controla con un mando a distancia, permitiendo que tu pareja decida cuándo y cómo vibra. Úsalo en una cena romántica o mientras hacen las compras. El secreto y la anticipación los volverán locos.'
  },
  {
    name: 'Dildo Realista de Silicona',
    price: 'S/ 319.99',
    image: 'https://placehold.co/400x470.png',
    imageHint: 'dildo',
    review: 'Fabricado con silicona de grado médico, su textura suave y su forma realista ofrecen un placer increíblemente natural. Flexible y con una potente ventosa.',
    longDescription: 'Diseñado para un placer realista y satisfactorio. Hecho de silicona premium, es suave al tacto pero firme. Su potente base de ventosa se adhiere a casi cualquier superficie plana, permitiendo un juego manos libres lleno de posibilidades. Es seguro para el cuerpo, libre de ftalatos y fácil de limpiar.'
  },
  {
    name: 'Aceite de Masaje Sensual',
    price: 'S/ 79.99',
    image: 'https://placehold.co/400x480.png',
    imageHint: 'massage oil',
    review: 'Despierta los sentidos con este aceite de masaje comestible. Su aroma afrodisíaco y su tacto sedoso son el preludio perfecto para una noche de pasión.',
    longDescription: 'Transforma cualquier noche en una experiencia sensorial. Este aceite de masaje no solo huele increíble, sino que también es comestible y tiene un sabor delicioso. Perfecto para masajes eróticos que recorren todo el cuerpo, dejando la piel suave, hidratada y lista para más.'
  },
  {
    name: 'Set de Plugs Anales de Silicona',
    price: 'S/ 159.99',
    image: 'https://placehold.co/400x490.png',
    imageHint: 'anal plugs',
    review: 'Perfecto para la exploración anal gradual. Este set de tres tamaños es ideal tanto para principiantes como para quienes buscan avanzar en su juego.',
    longDescription: 'Este set de plugs está diseñado para una iniciación cómoda y segura al placer anal. Incluye tres tamaños diferentes, fabricados con silicona de grado médico, suave y flexible. Su base acampanada garantiza una extracción segura. Son resistentes al agua y fáciles de limpiar, ideales para explorar nuevas sensaciones a tu propio ritmo.'
  }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      {products.slice(0, 8).map((product) => (
        <Card key={product.name} className="flex flex-col border-transparent hover:border-primary transition-colors overflow-hidden">
        <div className="relative">
            <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="h-48 w-full object-cover"
            data-ai-hint={product.imageHint}
            />
        </div>
        <CardHeader className="p-4 text-center">
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.price}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow p-4 pt-0 text-center">
            <p className="text-muted-foreground mb-4 flex-grow text-sm">{product.review}</p>
            <div className="mt-auto">
            <Dialog>
                <DialogTrigger asChild>
                <Button className="w-full">Detalles</Button>
                </DialogTrigger>
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
            </div>
        </CardContent>
        </Card>
      ))}
    </div>
  );
}
