
import Link from "next/link";
import { SparklesIcon, ShoppingCartIcon, MenuIcon, ArrowRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";

export default function GuiaParaParejas() {
  const articles = [
    {
      title: "El Arte de la Comunicación Afectiva",
      slug: "comunicacion-afectiva",
      description: "Aprende a expresar tus necesidades y a escuchar a tu pareja de una manera que construya puentes, no muros.",
    },
    {
      title: "5 Ideas para Salir de la Rutina",
      slug: "ideas-rutina",
      description: "Desde citas temáticas en casa hasta aventuras improvisadas. ¡Reaviva la chispa con estas ideas creativas!",
    },
    {
      title: "Cómo Hablar de Fantasías sin Miedo",
      slug: "hablar-de-fantasias",
      description: "Una guía paso a paso para compartir tus deseos más íntimos de forma segura y respetuosa.",
    },
    {
      title: "La Importancia del Espacio Personal",
      slug: "espacio-personal",
      description: "Mantener la individualidad es clave para una relación sana. Descubre cómo equilibrar el tiempo juntos y el tiempo a solas.",
    },
    {
      title: "Resolución de Conflictos: Guía para Discutir Mejor",
      slug: "resolucion-de-conflictos",
      description: "Las discusiones son inevitables, pero se puede aprender a discutir de forma constructiva. Herramientas para fortalecer la relación.",
    },
    {
      title: "Gestos Cotidianos que Fortalecen el Amor",
      slug: "gestos-cotidianos",
      description: "El amor no solo se demuestra en grandes ocasiones. Pequeños gestos diarios pueden tener un impacto enorme en la conexión.",
    }
  ];

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
        <section className="w-full py-12 md:py-16">
          <div className="flex flex-col items-center px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter sm:text-6xl text-primary">Guía para Parejas</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Consejos, ideas y recursos para fortalecer la conexión y la intimidad en tu relación.
            </p>
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {articles.map((article) => (
                <Card key={article.title} className="flex flex-col h-full border-transparent hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle>{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{article.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/guia-para-parejas/${article.slug}`} className="w-full">
                       <Button className="w-full">
                        Leer más
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                       </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
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
