
import Link from "next/link";
import { SparklesIcon, ShoppingCartIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function GuiaParaParejas() {
  const articles = [
    {
      title: "El Arte de la Comunicación Afectiva",
      description: "Aprende a expresar tus necesidades y a escuchar a tu pareja de una manera que construya puentes, no muros.",
      longDescription: (
        <>
          <p className="mb-4">La comunicación es la base de cualquier relación sana y duradera. Sin embargo, no siempre es fácil expresar lo que sentimos o necesitamos, especialmente en temas de intimidad. La comunicación afectiva se trata de crear un espacio seguro donde ambos se sientan escuchados, validados y comprendidos.</p>
          <h4 className="font-bold text-lg mb-2">1. Escucha Activa: El Primer Paso</h4>
          <p className="mb-4">Antes de hablar, aprende a escuchar. La escucha activa significa prestar total atención a tu pareja, sin interrumpir ni planear tu respuesta. Asiente, haz contacto visual y muestra que estás presente. A veces, lo único que necesitamos es que nos escuchen. Intenta parafrasear lo que dice tu pareja para asegurarte de que has entendido bien, por ejemplo: "Si te entiendo bien, lo que te hace sentir triste es...".</p>
          <h4 className="font-bold text-lg mb-2">2. Habla desde el "Yo"</h4>
          <p className="mb-4">En lugar de decir "Tú nunca haces esto" o "Siempre te olvidas de...", prueba con "Yo me siento triste cuando...". Hablar desde tus propios sentimientos evita que tu pareja se ponga a la defensiva y abre la puerta a una conversación más constructiva. Se trata de expresar tu realidad emocional, no de lanzar una acusación.</p>
          <h4 className="font-bold text-lg mb-2">3. Elige el Momento y el Lugar Adecuado</h4>
          <p className="mb-4">No intentes tener conversaciones importantes cuando ambos estén cansados, estresados o en medio de una discusión por otro tema. Busca un momento de calma, donde puedan hablar sin interrupciones y con la mente clara. Un ambiente relajado facilita la apertura emocional. Apagar los teléfonos y mirarse a los ojos puede hacer una gran diferencia.</p>
          <h4 className="font-bold text-lg mb-2">4. Valida los Sentimientos del Otro</h4>
          <p>Validar no significa estar de acuerdo, sino reconocer que los sentimientos de tu pareja son legítimos desde su perspectiva. Frases como "Entiendo por qué te sientes así" o "Tiene sentido que eso te haya dolido" pueden desactivar un conflicto y crear un puente hacia la comprensión mutua.</p>
        </>
      ),
    },
    {
      title: "5 Ideas para Salir de la Rutina",
      description: "Desde citas temáticas en casa hasta aventuras improvisadas. ¡Reaviva la chispa con estas ideas creativas!",
      longDescription: (
        <>
            <p className="mb-4">La rutina puede ser cómoda, pero también puede apagar la chispa de la emoción en una relación. Salir de ella no siempre requiere grandes gestos o viajes caros. Aquí tienes 5 ideas para reconectar y crear nuevos recuerdos juntos.</p>
            <h4 className="font-bold text-lg mb-2">1. Noche de Cita Temática en Casa</h4>
            <p className="mb-4">Elijan un país que les gustaría visitar. Preparen una cena con platos típicos de ese lugar, pongan música de la región y vean una película de ese país. ¡Transformen su salón en un destino exótico por una noche!</p>
            <h4 className="font-bold text-lg mb-2">2. El Tarro de las Citas</h4>
            <p className="mb-4">Escriban en pequeños papeles diferentes ideas para citas (baratas, caras, en casa, al aire libre). Doblen los papeles y métanlos en un tarro. Una vez a la semana o al mes, saquen un papel al azar y comprométanse a realizar la cita que salga.</p>
            <h4 className="font-bold text-lg mb-2">3. Aprendan Algo Nuevo Juntos</h4>
            <p className="mb-4">Inscríbanse en una clase de algo que ninguno de los dos domine: baile, cocina, cerámica, un nuevo idioma. Ser principiantes juntos es una forma divertida de apoyarse mutuamente, reírse de los errores y crecer como equipo.</p>
            <h4 className="font-bold text-lg mb-2">4. Micro-Aventura Improvisada</h4>
            <p className="mb-4">Un sábado por la mañana, suban al coche sin un destino fijo. Conduzcan durante una hora en una dirección que no suelen tomar y exploren el primer pueblo o paraje natural que les llame la atención. La espontaneidad es un gran antídoto contra la rutina.</p>
            <h4 className="font-bold text-lg mb-2">5. Día sin Tecnología</h4>
            <p>Elijan un día del fin de semana para apagar los teléfonos, la televisión y los ordenadores. Dediquen el día a hablar, jugar a juegos de mesa, leer juntos, pasear o simplemente estar presentes el uno para el otro sin distracciones digitales. Se sorprenderán de la calidad de la conexión que pueden lograr.</p>
        </>
      ),
    },
    {
      title: "Cómo Hablar de Fantasías sin Miedo",
      description: "Una guía paso a paso para compartir tus deseos más íntimos de forma segura y respetuosa.",
      longDescription: (
        <>
            <p className="mb-4">Hablar de fantasías sexuales puede ser intimidante, pero es una de las herramientas más poderosas para profundizar la intimidad y la confianza. La clave está en crear un espacio de seguridad y curiosidad mutua. Aquí te dejamos una guía.</p>
            <h4 className="font-bold text-lg mb-2">1. Empieza por el "Por Qué"</h4>
            <p className="mb-4">Antes de saltar al "qué", hablen del "por qué". Pueden empezar diciendo algo como: "He estado pensando en lo mucho que me excita nuestra conexión y me encantaría que exploráramos juntos nuevas formas de disfrutarla. ¿Estarías abierto/a a hablar sobre ello?". Esto enmarca la conversación desde un lugar de unión, no de carencia.</p>
            <h4 className="font-bold text-lg mb-2">2. Normaliza el Tema</h4>
            <p className="mb-4">Recuerda (y recuérdale a tu pareja) que tener fantasías es completamente normal y humano. No significa que algo falte en la relación. Son simplemente una parte de la imaginación erótica. Pueden usar juegos como la "Ruleta de Fantasías" para que el tema surja de una forma más lúdica y menos directa.</p>
            <h4 className="font-bold text-lg mb-2">3. Establece Reglas de No-Juzgar</h4>
            <p className="mb-4">Antes de compartir, hagan un pacto: "Lo que compartamos aquí, se queda aquí, y la única regla es no juzgar". Esto crea un círculo de confianza. La reacción inicial es crucial. Escucha con la mente abierta, aunque la fantasía de tu pareja te sorprenda.</p>
            <h4 className="font-bold text-lg mb-2">4. Usa la Técnica del "Me Gustaría..."</h4>
            <p className="mb-4">En lugar de exigir, propón. Usa frases como "Me gustaría probar..." o "A veces fantaseo con...". Hablar en un tono de curiosidad y exploración es mucho menos intimidante que un tono de demanda.</p>
            <h4 className="font-bold text-lg mb-2">5. Recuerda: Compartir no Obliga a Actuar</h4>
            <p>El simple hecho de compartir una fantasía puede ser muy íntimo y excitante en sí mismo. Dejen claro que compartir no crea una obligación de llevarla a cabo. Pueden decidir juntos qué fantasías les gustaría explorar, cuáles prefieren mantener en la imaginación y cuáles no les interesan. El respeto por los límites del otro es fundamental.</p>
        </>
      ),
    },
    {
      title: "La Importancia del Espacio Personal",
      description: "Mantener la individualidad es clave para una relación sana. Descubre cómo equilibrar el tiempo juntos y el tiempo a solas.",
      longDescription: (
        <>
            <p className="mb-4">En el torbellino del amor romántico, es fácil querer pasar cada segundo junto a la pareja. Sin embargo, una de las claves para una relación duradera y saludable es, paradójicamente, el espacio personal. Mantener la individualidad no es una señal de distancia, sino de fortaleza.</p>
            <h4 className="font-bold text-lg mb-2">¿Qué es el Espacio Personal?</h4>
            <p className="mb-4">No se trata solo de estar físicamente en habitaciones separadas. Es el tiempo y la libertad para cultivar tus propias aficiones, amistades e intereses. Es tener la oportunidad de extrañarse, de volver a la relación con nuevas experiencias y perspectivas para compartir.</p>
            <h4 className="font-bold text-lg mb-2">Beneficios del Espacio Personal</h4>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Evita la codependencia:</strong> Fomenta la autonomía y la autoestima, recordándote que eres una persona completa por ti misma.</li>
                <li><strong>Previene el resentimiento:</strong> Sacrificar constantemente tus propias necesidades puede generar resentimiento a largo plazo.</li>
                <li><strong>Mantiene viva la atracción:</strong> Tener vidas propias los hace más interesantes el uno para el otro.</li>
                <li><strong>Permite la autorreflexión:</strong> El tiempo a solas es crucial para procesar pensamientos y emociones.</li>
            </ul>
            <h4 className="font-bold text-lg mb-2">Cómo Equilibrarlo</h4>
            <p className="mb-4">La clave es la comunicación. Hablen abiertamente sobre sus necesidades de tiempo a solas y tiempo juntos. No lo planteen como una queja ("Necesito alejarme de ti"), sino como una necesidad personal ("Necesito un poco de tiempo para recargar energías con mi hobby"). Planifiquen tanto las citas en pareja como las actividades individuales. Respetar el espacio del otro es una de las mayores muestras de amor y confianza.</p>
        </>
      ),
    },
    {
        title: "Resolución de Conflictos: Guía para Discutir Mejor",
        description: "Las discusiones son inevitables, pero se puede aprender a discutir de forma constructiva. Herramientas para fortalecer la relación.",
        longDescription: (
          <>
            <p className="mb-4">Todas las parejas discuten. Es una parte inevitable de la convivencia. La diferencia entre una pareja que se fortalece y una que se debilita no es la ausencia de conflictos, sino cómo los manejan. Aprender a "discutir mejor" es una habilidad que se puede desarrollar.</p>
            <h4 className="font-bold text-lg mb-2">1. No es "Tú vs. Yo", es "Nosotros vs. el Problema"</h4>
            <p className="mb-4">Cambien la perspectiva. En lugar de verse como adversarios, siéntensen (literalmente) del mismo lado de la mesa y pongan el problema en el otro lado. Esto fomenta un enfoque de equipo para encontrar una solución, en lugar de una batalla por ver quién gana.</p>
            <h4 className="font-bold text-lg mb-2">2. Pausa de Emergencia</h4>
            <p className="mb-4">Cuando sientan que la conversación se está calentando demasiado y van a decir algo de lo que se arrepentirán, pidan una pausa. Acuerden una palabra clave o una señal. "Necesito un tiempo muerto de 20 minutos". Usen ese tiempo para calmarse, no para preparar nuevos argumentos. Luego, retomen la conversación.</p>
            <h4 className="font-bold text-lg mb-2">3. Evita las Palabras "Siempre" y "Nunca"</h4>
            <p className="mb-4">Estas palabras casi siempre son una exageración y ponen a la otra persona a la defensiva inmediatamente ("¿Ah, sí? ¿NUNCA saco la basura? La saqué el mes pasado"). Sean específicos sobre el incidente que les molesta en el presente.</p>
            <h4 className="font-bold text-lg mb-2">4. Técnica de la Repetición Empática</h4>
            <p>Antes de dar tu punto de vista, intenta repetir lo que tu pareja ha dicho para asegurarte de que la entiendes. "Lo que escucho es que te sientes solo/a cuando trabajo hasta tarde, ¿es correcto?". Esto no solo valida sus sentimientos, sino que también ralentiza la conversación y evita malentendidos.</p>
          </>
        ),
    },
    {
        title: "Gestos Cotidianos que Fortalecen el Amor",
        description: "El amor no solo se demuestra en grandes ocasiones. Pequeños gestos diarios pueden tener un impacto enorme en la conexión.",
        longDescription: (
          <>
            <p className="mb-4">Los aniversarios, cumpleaños y San Valentín son maravillosos, pero el verdadero tejido de una relación sólida se construye en el día a día. Son los pequeños gestos, las acciones cotidianas y aparentemente insignificantes, las que más nutren el amor y la conexión. Aquí tienes algunas ideas.</p>
            <h4 className="font-bold text-lg mb-2">1. El Beso de los 6 Segundos</h4>
            <p className="mb-4">Los expertos dicen que un beso de al menos seis segundos libera oxitocina, la "hormona del amor", y crea un momento de conexión real. Conviertan en un hábito darse un beso de seis segundos al despedirse por la mañana y al reencontrarse por la tarde.</p>
            <h4 className="font-bold text-lg mb-2">2. Dejar el Último Bocado</h4>
            <p className="mb-4">Dejarle a tu pareja el último bocado de ese postre que tanto le gusta es una pequeña forma de decir "pienso en ti y tu placer es importante para mí".</p>
            <h4 className="font-bold text-lg mb-2">3. Un Mensaje Inesperado</h4>
            <p className="mb-4">Un simple "estoy pensando en ti" o "espero que tengas un buen día" a mitad de la jornada laboral puede hacer que la otra persona se sienta vista y querida.</p>
            <h4 className="font-bold text-lg mb-2">4. Agradecimiento Específico</h4>
            <p className="mb-4">En lugar de un "gracias" genérico, sé específico. "Gracias por preparar el café esta mañana, de verdad que lo necesitaba". Reconocer el esfuerzo concreto hace que el agradecimiento sea mucho más potente.</p>
            <h4 className="font-bold text-lg mb-2">5. Escuchar sin Interrupciones</h4>
            <p>Cuando tu pareja te cuente su día, guarda tu teléfono y préstale toda tu atención durante cinco minutos. Escuchar de verdad, sin intentar solucionar sus problemas (a menos que te lo pida), es un regalo inmenso.</p>
          </>
        ),
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
        <section className="w-full text-center py-6">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter sm:text-6xl text-primary">Guía para Parejas</h1>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Consejos, ideas y recursos para fortalecer la conexión y la intimidad en tu relación.
            </p>
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Card key={article.title} className="flex flex-col border-transparent hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle>{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{article.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link" className="font-semibold text-primary p-0 h-auto">Leer más</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>{article.title}</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="max-h-[60vh] pr-6">
                           <div className="text-sm text-muted-foreground prose prose-sm max-w-none">
                              {article.longDescription}
                           </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
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
