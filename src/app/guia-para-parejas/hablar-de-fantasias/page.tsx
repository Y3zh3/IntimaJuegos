
import Link from "next/link";
import { ArrowLeftIcon, SparklesIcon, ShoppingCartIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ArticuloHablarFantasias() {
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
              Cómo Hablar de Fantasías sin Miedo
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Una guía paso a paso para compartir tus deseos más íntimos de forma segura y respetuosa.
            </p>
            <Image
              src="https://placehold.co/800x400.png"
              alt="Pareja susurrando secretos"
              width={800}
              height={400}
              className="mt-8 rounded-lg object-cover"
              data-ai-hint="couple whispering secrets"
            />
            <div className="prose prose-lg mx-auto mt-8 max-w-none text-foreground">
              <p>Hablar de fantasías sexuales puede ser intimidante, pero es una de las herramientas más poderosas para profundizar la intimidad y la confianza. La clave está en crear un espacio de seguridad y curiosidad mutua. Aquí te dejamos una guía.</p>
              <h3>1. Empieza por el "Por Qué"</h3>
              <p>Antes de saltar al "qué", hablen del "por qué". Pueden empezar diciendo algo como: "He estado pensando en lo mucho que me excita nuestra conexión y me encantaría que exploráramos juntos nuevas formas de disfrutarla. ¿Estarías abierto/a a hablar sobre ello?". Esto enmarca la conversación desde un lugar de unión, no de carencia.</p>
              <h3>2. Normaliza el Tema</h3>
              <p>Recuerda (y recuérdale a tu pareja) que tener fantasías es completamente normal y humano. No significa que algo falte en la relación. Son simplemente una parte de la imaginación erótica. Pueden usar juegos como la "Ruleta de Fantasías" para que el tema surja de una forma más lúdica y menos directa.</p>
              <h3>3. Establece Reglas de No-Juzgar</h3>
              <p>Antes de compartir, hagan un pacto: "Lo que compartamos aquí, se queda aquí, y la única regla es no juzgar". Esto crea un círculo de confianza. La reacción inicial es crucial. Escucha con la mente abierta, aunque la fantasía de tu pareja te sorprenda.</p>
              <h3>4. Usa la Técnica del "Me Gustaría..."</h3>
              <p>En lugar de exigir, propón. Usa frases como "Me gustaría probar..." o "A veces fantaseo con...". Hablar en un tono de curiosidad y exploración es mucho menos intimidante que un tono de demanda.</p>
              <h3>5. Recuerda: Compartir no Obliga a Actuar</h3>
              <p>El simple hecho de compartir una fantasía puede ser muy íntimo y excitante en sí mismo. Dejen claro que compartir no crea una obligación de llevarla a cabo. Pueden decidir juntos qué fantasías les gustaría explorar, cuáles prefieren mantener en la imaginación y cuáles no les interesan. El respeto por los límites del otro es fundamental.</p>
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
