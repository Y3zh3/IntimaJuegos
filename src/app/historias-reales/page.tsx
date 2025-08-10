
import Link from "next/link";
import { SparklesIcon, ShoppingCartIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


export default function HistoriasReales() {
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
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter sm:text-6xl text-primary">Historias que Conectan</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Parejas como la tuya comparten cómo Íntima Juegos les ayudó a redescubrirse.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="happy couple" />
                    <AvatarFallback>M&L</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">María & Leo</h3>
                    <p className="text-sm text-muted-foreground">Llevamos 5 años juntos</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Después de la llegada de los niños, sentíamos que nos habíamos distanciado. El juego 'Conversaciones de Corazón' nos dio el espacio para volver a hablar de nosotros, de nuestros sueños... fue como volver a conocernos. ¡Gracias!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="smiling couple" />
                    <AvatarFallback>A&C</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">Ana & Carlos</h3>
                    <p className="text-sm text-muted-foreground">Llevamos 2 años juntos</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Siempre nos costó hablar de fantasías. Nos daba vergüenza. La 'Ruleta de Fantasías' lo hizo divertido, casual, ¡un juego! Nos reímos mucho y descubrimos cosas nuevas del otro que nunca hubiéramos imaginado."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="mature couple" />
                    <AvatarFallback>S&D</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">Sofía & David</h3>
                    <p className="text-sm text-muted-foreground">Llevamos 8 años juntos</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Estábamos en una rutina terrible. 'El Desafío de los Sentidos' nos obligó a parar y a reconectar de una forma que no hacíamos en años. Fue increíblemente poderoso."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="young couple" />
                    <AvatarFallback>J&L</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">Javier & Laura</h3>
                    <p className="text-sm text-muted-foreground">Llevamos 1 año juntos</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Somos una pareja joven y creíamos que nos comunicábamos bien, pero 'Secretos Compartidos' nos llevó a un nivel de honestidad y confianza que no esperábamos. Súper recomendado."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="laughing couple" />
                    <AvatarFallback>P&M</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">Paula & Marcos</h3>
                    <p className="text-sm text-muted-foreground">Llevamos 10 años juntos</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Creíamos que lo habíamos probado todo, pero el 'Guion Erótico Colaborativo' fue una sorpresa total. Escribir juntos fue tan excitante como el resultado. Nos desbloqueó una creatividad que no sabíamos que teníamos."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="couple outdoors" />
                    <AvatarFallback>E&V</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">Elena & Victor</h3>
                    <p className="text-sm text-muted-foreground">Llevamos 3 años juntos</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "La 'Cita a Ciegas en Casa' se ha convertido en nuestro ritual mensual. Es increíble cómo algo tan simple puede traer tanta emoción y romanticismo a la relación. Nos turnamos para sorprender al otro y cada vez es mejor."
                  </p>
                </CardContent>
              </Card>
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
