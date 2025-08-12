
"use client";

import Link from "next/link";
import { SparklesIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/cart-sheet";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";

export default function SobreIntima() {

  const teamMembers = [
    {
      name: "Yessenia Hernández",
      role: "Chief Executive Officer",
      image: "https://placehold.co/150x150.png",
      imageHint: "profile picture"
    },
    {
      name: "Jesus Barreto",
      role: "Chief Technology and Information Officer",
      image: "https://placehold.co/150x150.png",
      imageHint: "profile picture"
    },
    {
      name: "Cristina Lopez",
      role: "Chief Marketing Officer",
      image: "https://placehold.co/150x150.png",
      imageHint: "profile picture"
    },
    {
      name: "José González",
      role: "Chief Operating Officer",
      image: "https://placehold.co/150x150.png",
      imageHint: "profile picture"
    },
    {
      name: "Sofia Chumbimune",
      role: "Head of Product",
      image: "https://placehold.co/150x150.png",
      imageHint: "profile picture"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/50 px-4 backdrop-blur-sm md:px-6">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <SparklesIcon className="h-6 w-6 text-primary" />
                  <span className="text-foreground">IntimaJuegos</span>
                </Link>
                <Link href="/" className="text-muted-foreground hover:text-foreground">Juegos para Conectar</Link>
                <Link href="/juegos-para-conectar" className="text-muted-foreground hover:text-foreground">Juguetes Sexuales</Link>
                <Link href="/guia-para-parejas" className="text-muted-foreground hover:text-foreground">Guía para Parejas</Link>
                <Link href="/historias-reales" className="text-muted-foreground hover:text-foreground">Historias Reales</Link>
                <Link href="/sobre-intima" className="text-foreground hover:text-foreground">Sobre Íntima</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="hidden items-center gap-2 md:flex">
              <SparklesIcon className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">IntimaJuegos</h1>
          </Link>
        </div>
        <Link href="/" className="flex items-center gap-2 md:hidden">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">IntimaJuegos</h1>
        </Link>
        <nav className="hidden items-center gap-6 text-base font-medium md:flex">
            <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">Juegos para Conectar</Link>
            <Link href="/juegos-para-conectar" className="text-muted-foreground transition-colors hover:text-primary">Juguetes Sexuales</Link>
            <Link href="/guia-para-parejas" className="text-muted-foreground transition-colors hover:text-primary">Guía para Parejas</Link>
            <Link href="/historias-reales" className="text-muted-foreground transition-colors hover:text-primary">Historias Reales</Link>
            <Link href="/sobre-intima" className="text-foreground transition-colors hover:text-primary">Sobre Íntima</Link>
        </nav>
        <div className="flex items-center gap-4">
            <CartSheet />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full pt-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">Nuestra Razón de Ser</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify mt-10">
                En IntimaJuegos, creemos que el placer y la conexión emocional son pilares fundamentales de una vida plena y una relación saludable. Nacimos de la convicción de que la intimidad es un universo por explorar, y que la comunicación es la brújula que guía esa exploración.
              </p>
            </div>
            <div className="mt-12 space-y-12 max-w-4xl mx-auto">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-primary">Nuestro Equipo</h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-4">
                  {teamMembers.slice(0, 3).map((member) => (
                    <div key={member.name} className="flex flex-col items-center text-center">
                      <div className="relative w-32 h-32">
                        <Image
                          src={member.image}
                          alt={`Foto de ${member.name}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                          data-ai-hint={member.imageHint}
                        />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-foreground">{member.name}</h3>
                    </div>
                  ))}
                </div>
                 <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-4">
                  {teamMembers.slice(3, 5).map((member) => (
                    <div key={member.name} className="flex flex-col items-center text-center">
                      <div className="relative w-32 h-32">
                        <Image
                          src={member.image}
                          alt={`Foto de ${member.name}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                          data-ai-hint={member.imageHint}
                        />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-foreground">{member.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-primary">Nuestra Filosofía</h2>
                <p className="text-lg text-muted-foreground text-justify">
                  Vivimos en un mundo que a menudo nos enseña a reprimir nuestros deseos y a sentir vergüenza por nuestra curiosidad. Nosotros queremos cambiar esa narrativa. Nuestra filosofía se basa en tres principios: <strong>Curiosidad sin Juicios, Comunicación con Empatía y Placer con Consciencia.</strong> Creemos que cada pareja tiene el derecho de descubrir qué les da placer, de hablar sobre ello abiertamente y de disfrutarlo de una manera segura y respetuosa.
                </p>
              </div>
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-primary">Nuestra Misión</h2>
                <p className="text-lg text-muted-foreground text-justify">
                  Nuestra misión es simple pero poderosa: <strong>ofrecer herramientas, juegos y recursos que inspiren a las parejas a conectar de manera más profunda.</strong> No vendemos solo productos; ofrecemos experiencias. Cada juego ha sido cuidadosamente diseñado para ser un puente: un puente para iniciar conversaciones difíciles, para reír juntos, para explorar fantasías y para redescubrirse mutuamente en un espacio de confianza y diversión.
                </p>
              </div>
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-primary text-center">Nuestros Valores</h2>
                <ul className="text-lg text-muted-foreground list-outside space-y-2 text-justify">
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['•']"><strong>Empatía Radical:</strong> Nos esforzamos por ponernos en el lugar de cada pareja, entendiendo que cada relación es un mundo único. Escuchamos sus historias y validamos sus experiencias sin juicio.</li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['•']"><strong>Innovación Constante:</strong> El mundo de la intimidad está siempre evolucionando. Estamos comprometidos con la creación continua de juegos y herramientas que sean relevantes, emocionantes y verdaderamente útiles.</li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['•']"><strong>Inclusión y Diversidad:</strong> Celebramos el amor en todas sus formas. Nuestros recursos están diseñados para ser inclusivos y respetuosos con todas las orientaciones sexuales, identidades de género y tipos de relación.</li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['•']"><strong>Educación sin Tabúes:</strong> Creemos que el conocimiento es poder. Nuestra meta es derribar los mitos y la desinformación en torno a la sexualidad, ofreciendo contenido claro, honesto y basado en la evidencia.</li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['•']"><strong>La Diversión como Herramienta:</strong> Estamos convencidos de que la conexión emocional y el placer no tienen por qué ser serios o solemnes. La risa, el juego y la alegría son herramientas potentísimas para fortalecer los lazos.</li>
                </ul>
              </div>
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-primary">Nuestro Compromiso</h2>
                <p className="text-lg text-muted-foreground text-justify">
                  Somos un equipo apasionado por el bienestar sexual y la inteligencia emocional. Tu seguridad y confianza son nuestra máxima prioridad. Por eso, nos comprometemos a ofrecer productos de la más alta calidad, fabricados con materiales seguros para el cuerpo, y a proporcionar información clara y honesta. Queremos que te sientas con poder, confianza y libertad para descubrir tus deseos en un espacio que hemos creado para ti.
                </p>
              </div>
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
