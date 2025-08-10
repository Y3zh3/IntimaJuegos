import Link from "next/link";
import { SparklesIcon, ShoppingCartIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SobreNosotros() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/50 px-4 backdrop-blur-sm md:px-6">
        <Link href="/" className="flex items-center gap-2">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Intima Juegos</h1>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">Novedades</Link>
            <Link href="/mas-vendidos" className="text-muted-foreground transition-colors hover:text-primary">Más vendidos</Link>
            <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">Blog</Link>
            <Link href="/sobre-nosotros" className="text-foreground transition-colors hover:text-primary">Sobre nosotros</Link>
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
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter sm:text-6xl text-primary">Sobre Intima Juegos</h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            En Intima Juegos, creemos que el placer es una parte esencial y saludable de la vida. Nuestra misión es ofrecer una colección cuidadosamente seleccionada de juguetes y accesorios de alta calidad que inspiren curiosidad, exploración y, sobre todo, alegría.
                        </p>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Somos un equipo apasionado por el bienestar sexual y la autoexploración. Cada producto de nuestra tienda ha sido elegido por su calidad, seguridad y capacidad para proporcionar experiencias excepcionales. Queremos que te sientas con poder, confianza y libertad para descubrir tus deseos en un espacio seguro y acogedor.
                        </p>
                    </div>
                    <Image
                        src="https://placehold.co/600x400.png"
                        alt="About us image"
                        width={600}
                        height={400}
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        data-ai-hint="elegant bedroom"
                    />
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
