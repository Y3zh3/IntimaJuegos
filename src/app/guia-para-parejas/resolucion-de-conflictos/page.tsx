
import Link from "next/link";
import { ArrowLeftIcon, SparklesIcon, ShoppingCartIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ArticuloResolucionConflictos() {
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
              Resolución de Conflictos: Guía para Discutir Mejor
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Las discusiones son inevitables, pero se puede aprender a discutir de forma constructiva. Herramientas para fortalecer la relación.
            </p>
            <Image
              src="https://placehold.co/800x400.png"
              alt="Pareja resolviendo un conflicto"
              width={800}
              height={400}
              className="mt-8 rounded-lg object-cover"
              data-ai-hint="couple conflict resolution"
            />
            <div className="prose prose-lg mx-auto mt-8 max-w-none text-foreground">
              <p>Todas las parejas discuten. Es una parte inevitable de la convivencia. La diferencia entre una pareja que se fortalece y una que se debilita no es la ausencia de conflictos, sino cómo los manejan. Aprender a "discutir mejor" es una habilidad que se puede desarrollar.</p>
              <h3>1. No es "Tú vs. Yo", es "Nosotros vs. el Problema"</h3>
              <p>Cambien la perspectiva. En lugar de verse como adversarios, siéntensen (literalmente) del mismo lado de la mesa y pongan el problema en el otro lado. Esto fomenta un enfoque de equipo para encontrar una solución, en lugar de una batalla por ver quién gana.</p>
              <h3>2. Pausa de Emergencia</h3>
              <p>Cuando sientan que la conversación se está calentando demasiado y van a decir algo de lo que se arrepentirán, pidan una pausa. Acuerden una palabra clave o una señal. "Necesito un tiempo muerto de 20 minutos". Usen ese tiempo para calmarse, no para preparar nuevos argumentos. Luego, retomen la conversación.</p>
              <h3>3. Evita las Palabras "Siempre" y "Nunca"</h3>
              <p>Estas palabras casi siempre son una exageración y ponen a la otra persona a la defensiva inmediatamente ("¿Ah, sí? ¿NUNCA saco la basura? La saqué el mes pasado"). Sean específicos sobre el incidente que les molesta en el presente.</p>
              <h3>4. Técnica de la Repetición Empática</h3>
              <p>Antes de dar tu punto de vista, intenta repetir lo que tu pareja ha dicho para asegurarte de que la entiendes. "Lo que escucho es que te sientes solo/a cuando trabajo hasta tarde, ¿es correcto?". Esto no solo valida sus sentimientos, sino que también ralentiza la conversación y evita malentendidos.</p>
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
