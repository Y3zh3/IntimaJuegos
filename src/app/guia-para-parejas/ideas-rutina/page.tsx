
import Link from "next/link";
import { ArrowLeftIcon, SparklesIcon, ShoppingCartIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ArticuloIdeasRutina() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/50 px-4 backdrop-blur-sm md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <SparklesIcon className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">IntimaJuegos</h1>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">Inicio</Link>
          <Link href="/juegos-para-conectar" className="text-muted-foreground transition-colors hover:text-primary">Juegos para Conectar</Link>
          <Link href="/guia-para-parejas" className="text-foreground transition-colors hover:text-primary">Guía para Parejas</Link>
          <Link href="/historias-reales" className="text-muted-foreground transition-colors hover:text-primary">Historias Reales</Link>
          <Link href="/sobre-intima" className="text-muted-foreground transition-colors hover:text-primary">Sobre Íntima</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="sr-only">Carrito</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Menú</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <article className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Link href="/guia-para-parejas" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
              <ArrowLeftIcon className="h-4 w-4" />
              Volver a la Guía
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
              5 Ideas para Salir de la Rutina
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Desde citas temáticas en casa hasta aventuras improvisadas. ¡Reaviva la chispa con estas ideas creativas!
            </p>
            <Image
              src="https://placehold.co/800x400.png"
              alt="Pareja en una aventura"
              width={800}
              height={400}
              className="mt-8 rounded-lg object-cover"
              data-ai-hint="couple adventure fun"
            />
            <div className="prose prose-lg mx-auto mt-8 max-w-none text-foreground">
                <p>La rutina puede ser cómoda, pero también puede apagar la chispa de la emoción en una relación. Salir de ella no siempre requiere grandes gestos o viajes caros. Aquí tienes 5 ideas para reconectar y crear nuevos recuerdos juntos.</p>
                <h3>1. Noche de Cita Temática en Casa</h3>
                <p>Elijan un país que les gustaría visitar. Preparen una cena con platos típicos de ese lugar, pongan música de la región y vean una película de ese país. ¡Transformen su salón en un destino exótico por una noche!</p>
                <h3>2. El Tarro de las Citas</h3>
                <p>Escriban en pequeños papeles diferentes ideas para citas (baratas, caras, en casa, al aire libre). Doblen los papeles y métanlos en un tarro. Una vez a la semana o al mes, saquen un papel al azar y comprométanse a realizar la cita que salga.</p>
                <h3>3. Aprendan Algo Nuevo Juntos</h3>
                <p>Inscríbanse en una clase de algo que ninguno de los dos domine: baile, cocina, cerámica, un nuevo idioma. Ser principiantes juntos es una forma divertida de apoyarse mutuamente, reírse de los errores y crecer como equipo.</p>
                <h3>4. Micro-Aventura Improvisada</h3>
                <p>Un sábado por la mañana, suban al coche sin un destino fijo. Conduzcan durante una hora en una dirección que no suelen tomar y exploren el primer pueblo o paraje natural que les llame la atención. La espontaneidad es un gran antídoto contra la rutina.</p>
                <h3>5. Día sin Tecnología</h3>
                <p>Elijan un día del fin de semana para apagar los teléfonos, la televisión y los ordenadores. Dediquen el día a hablar, jugar a juegos de mesa, leer juntos, pasear o simplemente estar presentes el uno para el otro sin distracciones digitales. Se sorprenderán de la calidad de la conexión que pueden lograr.</p>
            </div>
          </div>
        </article>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 IntimaJuegos. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">Términos y Condiciones</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Privacidad</a>
        </nav>
      </footer>
    </div>
  );
}
