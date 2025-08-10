import Link from "next/link";
import { SparklesIcon, ShoppingCartIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function GuiaParaParejas() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/50 px-4 backdrop-blur-sm md:px-6">
        <Link href="/" className="flex items-center gap-2">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Intima Juegos</h1>
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter sm:text-6xl text-primary">Guía para Parejas</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Consejos, ideas y recursos para fortalecer la conexión y la intimidad en tu relación.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-4">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Article image"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  data-ai-hint="couple talking"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">El Arte de la Comunicación Afectiva</h3>
                  <p className="text-muted-foreground">
                    Aprende a expresar tus necesidades y a escuchar a tu pareja de una manera que construya puentes, no muros.
                  </p>
                  <Link href="/guia-para-parejas/comunicacion-afectiva" className="font-semibold text-primary">Leer más</Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                 <Image
                  src="https://placehold.co/600x400.png"
                  alt="Article image"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  data-ai-hint="couple laughing"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">5 Ideas para Salir de la Rutina</h3>
                   <p className="text-muted-foreground">
                    Desde citas temáticas en casa hasta aventuras improvisadas. ¡Reaviva la chispa con estas ideas creativas!
                  </p>
                  <Link href="#" className="font-semibold text-primary">Leer más</Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                 <Image
                  src="https://placehold.co/600x400.png"
                  alt="Article image"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  data-ai-hint="love letters"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">Cómo Hablar de Fantasías sin Miedo</h3>
                   <p className="text-muted-foreground">
                    Una guía paso a paso para compartir tus deseos más íntimos de forma segura y respetuosa.
                  </p>
                  <Link href="#" className="font-semibold text-primary">Leer más</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Intima Juegos. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">Términos y Condiciones</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Privacidad</a>
        </nav>
      </footer>
    </div>
  );
}
