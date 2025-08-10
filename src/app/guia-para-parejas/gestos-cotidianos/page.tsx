
import Link from "next/link";
import { ArrowLeftIcon, SparklesIcon, ShoppingCartIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ArticuloGestosCotidianos() {
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
              Gestos Cotidianos que Fortalecen el Amor
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              El amor no solo se demuestra en grandes ocasiones. Pequeños gestos diarios pueden tener un impacto enorme en la conexión.
            </p>
            <Image
              src="https://placehold.co/800x400.png"
              alt="Pareja compartiendo un momento tierno"
              width={800}
              height={400}
              className="mt-8 rounded-lg object-cover"
              data-ai-hint="couple tender moment"
            />
            <div className="prose prose-lg mx-auto mt-8 max-w-none text-foreground">
              <p>Los aniversarios, cumpleaños y San Valentín son maravillosos, pero el verdadero tejido de una relación sólida se construye en el día a día. Son los pequeños gestos, las acciones cotidianas y aparentemente insignificantes, las que más nutren el amor y la conexión. Aquí tienes algunas ideas.</p>
              <h3>1. El Beso de los 6 Segundos</h3>
              <p>Los expertos dicen que un beso de al menos seis segundos libera oxitocina, la "hormona del amor", y crea un momento de conexión real. Conviertan en un hábito darse un beso de seis segundos al despedirse por la mañana y al reencontrarse por la tarde.</p>
              <h3>2. Dejar el Último Bocado</h3>
              <p>Dejarle a tu pareja el último bocado de ese postre que tanto le gusta es una pequeña forma de decir "pienso en ti y tu placer es importante para mí".</p>
              <h3>3. Un Mensaje Inesperado</h3>
              <p>Un simple "estoy pensando en ti" o "espero que tengas un buen día" a mitad de la jornada laboral puede hacer que la otra persona se sienta vista y querida.</p>
              <h3>4. Agradecimiento Específico</h3>
              <p>En lugar de un "gracias" genérico, sé específico. "Gracias por preparar el café esta mañana, de verdad que lo necesitaba". Reconocer el esfuerzo concreto hace que el agradecimiento sea mucho más potente.</p>
              <h3>5. Escuchar sin Interrupciones</h3>
              <p>Cuando tu pareja te cuente su día, guarda tu teléfono y préstale toda tu atención durante cinco minutos. Escuchar de verdad, sin intentar solucionar sus problemas (a menos que te lo pida), es un regalo inmenso.</p>
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
