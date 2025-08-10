
import Link from "next/link";
import { ArrowLeftIcon, SparklesIcon, ShoppingCartIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ArticuloEspacioPersonal() {
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
              La Importancia del Espacio Personal
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Mantener la individualidad es clave para una relación sana. Descubre cómo equilibrar el tiempo juntos y el tiempo a solas.
            </p>
            <Image
              src="https://placehold.co/800x400.png"
              alt="Persona disfrutando de tiempo a solas"
              width={800}
              height={400}
              className="mt-8 rounded-lg object-cover"
              data-ai-hint="person alone reading"
            />
            <div className="prose prose-lg mx-auto mt-8 max-w-none text-foreground">
              <p>En el torbellino del amor romántico, es fácil querer pasar cada segundo junto a la pareja. Sin embargo, una de las claves para una relación duradera y saludable es, paradójicamente, el espacio personal. Mantener la individualidad no es una señal de distancia, sino de fortaleza.</p>
              <h3>¿Qué es el Espacio Personal?</h3>
              <p>No se trata solo de estar físicamente en habitaciones separadas. Es el tiempo y la libertad para cultivar tus propias aficiones, amistades e intereses. Es tener la oportunidad de extrañarse, de volver a la relación con nuevas experiencias y perspectivas para compartir.</p>
              <h3>Beneficios del Espacio Personal</h3>
              <ul className="list-disc pl-6">
                  <li><strong>Evita la codependencia:</strong> Fomenta la autonomía y la autoestima, recordándote que eres una persona completa por ti misma.</li>
                  <li><strong>Previene el resentimiento:</strong> Sacrificar constantemente tus propias necesidades puede generar resentimiento a largo plazo.</li>
                  <li><strong>Mantiene viva la atracción:</strong> Tener vidas propias los hace más interesantes el uno para el otro.</li>
                  <li><strong>Permite la autorreflexión:</strong> El tiempo a solas es crucial para procesar pensamientos y emociones.</li>
              </ul>
              <h3>Cómo Equilibrarlo</h3>
              <p>La clave es la comunicación. Hablen abiertamente sobre sus necesidades de tiempo a solas y tiempo juntos. No lo planteen como una queja ("Necesito alejarme de ti"), sino como una necesidad personal ("Necesito un poco de tiempo para recargar energías con mi hobby"). Planifiquen tanto las citas en pareja como las actividades individuales. Respetar el espacio del otro es una de las mayores muestras de amor y confianza.</p>
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
