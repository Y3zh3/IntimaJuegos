import Link from "next/link";
import { ArrowLeftIcon, SparklesIcon, ShoppingCartIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ArticuloComunicacionAfectiva() {
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
              El Arte de la Comunicación Afectiva
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Aprende a expresar tus necesidades y a escuchar a tu pareja de una manera que construya puentes, no muros.
            </p>
            <Image
              src="https://placehold.co/800x400.png"
              alt="Pareja conversando"
              width={800}
              height={400}
              className="mt-8 rounded-lg object-cover"
              data-ai-hint="couple talking intimately"
            />
            <div className="prose prose-lg mx-auto mt-8 max-w-none text-foreground">
              <p>
                La comunicación es la base de cualquier relación sana y duradera. Sin embargo, no siempre es fácil expresar lo que sentimos o necesitamos, especialmente en temas de intimidad. La comunicación afectiva se trata de crear un espacio seguro donde ambos se sientan escuchados, validados y comprendidos.
              </p>
              <h3>1. Escucha Activa: El Primer Paso</h3>
              <p>
                Antes de hablar, aprende a escuchar. La escucha activa significa prestar total atención a tu pareja, sin interrumpir ni planear tu respuesta. Asiente, haz contacto visual y muestra que estás presente. A veces, lo único que necesitamos es que nos escuchen.
              </p>
              <h3>2. Habla desde el "Yo"</h3>
              <p>
                En lugar de decir "Tú nunca haces esto", prueba con "Yo me siento triste cuando...". Hablar desde tus propios sentimientos evita que tu pareja se ponga a la defensiva y abre la puerta a una conversación más constructiva.
              </p>
              <h3>3. Elige el Momento y el Lugar Adecuado</h3>
              <p>
                No intentes tener conversaciones importantes cuando ambos estén cansados, estresados o en medio de una discusión. Busca un momento de calma, donde puedan hablar sin interrupciones. Un ambiente relajado facilita la apertura emocional.
              </p>
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
