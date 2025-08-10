
import Link from "next/link";
import Image from "next/image";
import { SparklesIcon, ShoppingCartIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function HistoriasReales() {
  const testimonials = [
    {
      name: "María & Leo",
      years: "Llevamos 5 años juntos",
      story: "Después de la llegada de los niños, sentíamos que nos habíamos distanciado. El juego 'Conversaciones de Corazón' nos dio el espacio para volver a hablar de nosotros, de nuestros sueños... fue como volver a conocernos. ¡Gracias!",
      image: "https://placehold.co/400x300.png",
      imageHint: "happy couple",
      fallback: "M&L",
    },
    {
      name: "Ana & Carlos",
      years: "Llevamos 2 años juntos",
      story: "Siempre nos costó hablar de fantasías. Nos daba vergüenza. La 'Ruleta de Fantasías' lo hizo divertido, casual, ¡un juego! Nos reímos mucho y descubrimos cosas nuevas del otro que nunca hubiéramos imaginado.",
      image: "https://placehold.co/400x300.png",
      imageHint: "smiling couple",
      fallback: "A&C",
    },
    {
      name: "Sofía & David",
      years: "Llevamos 8 años juntos",
      story: "Estábamos en una rutina terrible. 'El Desafío de los Sentidos' nos obligó a parar y a reconectar de una forma que no hacíamos en años. Fue increíblemente poderoso.",
      image: "https://placehold.co/400x300.png",
      imageHint: "mature couple",
      fallback: "S&D",
    },
    {
      name: "Javier & Laura",
      years: "Llevamos 1 año juntos",
      story: "Somos una pareja joven y creíamos que nos comunicábamos bien, pero 'Secretos Compartidos' nos llevó a un nivel de honestidad y confianza que no esperábamos. Súper recomendado.",
      image: "https://placehold.co/400x300.png",
      imageHint: "young couple",
      fallback: "J&L",
    },
    {
      name: "Paula & Marcos",
      years: "Llevamos 10 años juntos",
      story: "Creíamos que lo habíamos probado todo, pero el 'Guion Erótico Colaborativo' fue una sorpresa total. Escribir juntos fue tan excitante como el resultado. Nos desbloqueó una creatividad que no sabíamos que teníamos.",
      image: "https://placehold.co/400x300.png",
      imageHint: "laughing couple",
      fallback: "P&M",
    },
    {
      name: "Elena & Victor",
      years: "Llevamos 3 años juntos",
      story: "La 'Cita a Ciegas en Casa' se ha convertido en nuestro ritual mensual. Es increíble cómo algo tan simple puede traer tanta emoción y romanticismo a la relación. Nos turnamos para sorprender al otro y cada vez es mejor.",
      image: "https://placehold.co/400x300.png",
      imageHint: "couple outdoors",
      fallback: "E&V",
    },
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
            <Link href="/guia-para-parejas" className="text-muted-foreground transition-colors hover:text-primary">Guía para Parejas</Link>
            <Link href="/historias-reales" className="text-foreground transition-colors hover:text-primary">Historias Reales</Link>
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
        <section className="w-full py-6 text-center">
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter sm:text-6xl text-primary">Historias que Conectan</h1>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Parejas como la tuya comparten cómo IntimaJuegos les ayudó a redescubrirse.
            </p>
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12 w-full">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col border-transparent hover:border-primary transition-colors overflow-hidden">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={`Imagen de ${testimonial.name}`}
                      width={400}
                      height={300}
                      className="h-60 w-full object-cover"
                      data-ai-hint={testimonial.imageHint}
                    />
                  </div>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/100x100.png" />
                      <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.years}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      "{testimonial.story}"
                    </p>
                  </CardContent>
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
