
"use client";

import Link from "next/link";
import Image from "next/image";
import { SparklesIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CartSheet } from "@/components/cart-sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function HistoriasReales() {
  const testimonials = [
    {
      name: "María & Leo",
      years: "Llevamos 5 años juntos",
      story: "Después de la llegada de los niños, sentíamos que nos habíamos distanciado. El juego 'Conversaciones de Corazón' nos dio el espacio para volver a hablar de nosotros, de nuestros sueños... fue como volver a conocernos. ¡Gracias!",
      fallback: "M&L",
      image: "https://cdn.shopify.com/s/files/1/0273/1550/3138/files/11011.bigger_480x480.jpg?v=1645036931",
      imageHint: "happy couple"
    },
    {
      name: "Ana & Carlos",
      years: "Llevamos 2 años juntos",
      story: "Siempre nos costó hablar de fantasías. Nos daba vergüenza. La 'Ruleta de Fantasías' lo hizo divertido, casual, ¡un juego! Nos reímos mucho y descubrimos cosas nuevas del otro que nunca hubiéramos imaginado.",
      fallback: "A&C",
      image: "https://i.pinimg.com/236x/58/4c/a9/584ca9b7efea30c60cd1c70636f60a27.jpg",
      imageHint: "laughing couple"
    },
    {
      name: "Sofía & David",
      years: "Llevamos 8 años juntos",
      story: "Estábamos en una rutina terrible. 'El Desafío de los Sentidos' nos obligó a parar y a reconectar de una forma que no hacíamos en años. Fue increíblemente poderoso.",
      fallback: "S&D",
      image: "https://marketplace.canva.com/EAFYbL_0ZYM/3/0/1600w/canva-foto-de-perfil-para-instagram-retrato-llamativo-floral-azul-STzuI27-q6s.jpg",
      imageHint: "intimate couple"
    },
    {
      name: "Javier & Laura",
      years: "Llevamos 1 año juntos",
      story: "Somos una pareja joven y creíamos que nos comunicábamos bien, pero 'Secretos Compartidos' nos llevó a un nivel de honestidad y confianza que no esperábamos. Súper recomendado.",
      fallback: "J&L",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLt5vcgikVlciyy4NL5VGlnQlngrPSc30fNg&s",
      imageHint: "young couple"
    },
    {
      name: "Paula & Marcos",
      years: "Llevamos 10 años juntos",
      story: "Creíamos que lo habíamos probado todo, pero el 'Guion Erótico Colaborativo' fue una sorpresa total. Escribir juntos fue tan excitante como el resultado. Nos desbloqueó una creatividad que no sabíamos que teníamos.",
      fallback: "P&M",
      image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmlsfGVufDB8fDB8fHww",
      imageHint: "creative couple"
    },
    {
      name: "Elena & Victor",
      years: "Llevamos 3 años juntos",
      story: "La 'Cita a Ciegas en Casa' se ha convertido en nuestro ritual mensual. Es increíble cómo algo tan simple puede traer tanta emoción y romanticismo a la relación. Nos turnamos para sorprender al otro y cada vez es mejor.",
      fallback: "E&V",
      image: "https://i.pinimg.com/236x/c2/9c/40/c29c40fef515b8ef19d99c9c96f5429.jpg",
      imageHint: "romantic couple"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/50 px-4 backdrop-blur-sm md:px-6">
        <Link href="/" className="flex items-center gap-2">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">IntimaJuegos</h1>
        </Link>
        <nav className="hidden items-center gap-6 text-base font-medium md:flex">
            <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">Inicio</Link>
            <Link href="/juegos-para-conectar" className="text-muted-foreground transition-colors hover:text-primary">Juegos para Conectar</Link>
            <Link href="/guia-para-parejas" className="text-muted-foreground transition-colors hover:text-primary">Guía para Parejas</Link>
            <Link href="/historias-reales" className="text-foreground transition-colors hover:text-primary">Historias Reales</Link>
            <Link href="/sobre-intima" className="text-muted-foreground transition-colors hover:text-primary">Sobre Íntima</Link>
        </nav>
        <div className="flex items-center gap-4">
            <CartSheet />
            <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Menú</span>
            </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full pt-8">
          <div className="flex flex-col items-center px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary mb-4">Historias que Conectan</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Parejas como la tuya comparten cómo IntimaJuegos les ayudó a redescubrirse.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col items-center text-center border-transparent hover:border-primary transition-colors">
                  <CardHeader className="items-center">
                    <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.imageHint}/>
                        <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-primary">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.years}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      "{testimonial.story}"
                    </p>
                  </CardContent>
                </Card>
              ))}
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
