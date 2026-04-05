export interface Reading {
  id: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
}

export interface Book {
  id: string;
  categoryId: string; // referenciar a su categoria padre
  title: string;
  author: string;
  publisher: string;
  year: string;
  tags: string[];
  color: string; // Color heredado para usar como portada lisa
  readings: Reading[];
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  color: string;
  books: Book[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'c-astronomia',
    name: 'Astronomía',
    iconName: 'Rocket',
    color: '#1a1f3c',
    books: [
      {
        id: 'b-astro-1', categoryId: 'c-astronomia',
        title: 'El firmamento estrellado', author: 'Camille Flammarion', publisher: 'Astronomía Popular', year: '1880', tags: ['Estrellas'], color: '#1a1f3c',
        readings: [{
          id: 'r-ast-1', title: 'La Inmensidad del Cielo', excerpt: 'Al alzar la vista durante la noche...',
          paragraphs: [
            'Cuando en una noche serena dirigimos nuestra mirada hacia la bóveda celeste, nos sobrecoge el número incalculable de estrellas que centellean en las profundidades del espacio. Cada uno de esos puntos luminosos es, en realidad, un sol majestuoso, a menudo mucho más gigantesco que nuestro propio astro diurno.',
            'Su lejanía es tan profunda que la luz, aunque viaja a trescientos mil kilómetros por segundo, tarda años, décadas o milenios en llegar hasta nosotros. Lo que vemos no es el universo en su estado actual, sino una historia viva del pasado cósmico.',
            'A lo largo de los siglos, el ser humano ha unido estos puntos brillantes formando constelaciones, figuras mitológicas que servían tanto de calendario agrícola como de brújula para los navegantes audaces.',
            'El sistema solar, aquel en el que habitamos, es apenas una partícula ínfima dentro de nuestra galaxia, la Vía Láctea, la cual contiene unos doscientos mil millones de estrellas girando en espiral alrededor de un núcleo denso y enigmático.',
            'Y sin embargo, la Vía Láctea es solo una entre los miles de millones de galaxias que la ciencia moderna ha descubierto dispersas por el vacío intergaláctico.',
            'La astronomía no solo revela el tamaño del cosmos, sino que nos enseña verdadera humildad. Nos demuestra que nuestro hogar es un pequeño punto azul pálido, suspendido en un rayo de sol.',
            'Comprender las estrellas es comprendernos a nosotros mismos, pues los bloques fundamentales de nuestro cuerpo biológico fueron forjados hace eones en el fuego ardiente del corazón de estrellas ya extintas.',
            'Quien contempla el cielo con ojos educados, nunca más vuelve a sentirse aislado, sino profundamente conectado con el orden insondable y eterno del Universo.'
          ]
        }]
      },
      {
        id: 'b-astro-2', categoryId: 'c-astronomia',
        title: 'El Mensajero Sideral', author: 'Galileo Galilei', publisher: 'Tratados Clásicos', year: '1610', tags: ['Historia'], color: '#1a1f3c',
        readings: [{
          id: 'r-ast-2', title: 'Las Lunas de Júpiter', excerpt: 'Observé entonces algo asombroso junto a Júpiter...',
          paragraphs: [
            'Habiendo yo construido un catalejo de excelente calidad óptica y dirigiéndolo hacia el planeta Júpiter en el séptimo día del mes de enero del presente año, noté de súbito algo verdaderamente asombroso.',
            'Junto al planeta se encontraban tres pequeñas estrellas, pero extremadamente brillantes, posicionadas exactamente a lo largo de una línea recta y paralela a la eclíptica cósmica.',
            'En las noches sucesivas de observación reiterada, el asombro y la perplejidad se apoderaron de mis sentidos astronómicos. Las posiciones de estas estrellitas habían cambiado drásticamente.',
            'No se movían al azar, sino que realizaban un baile matemático, girando alrededor de la colosal esfera de Júpiter de la misma manera en que Venus, Mercurio e inclusive la Tierra misma orbitan alrededor del Sol.',
            'He aquí la prueba irrefutable, ofrecida por mis propios cristales convergentes, de que no todo el universo gira de manera rígida alrededor de nuestro planeta como el dogma de Ptolomeo había dictaminado.',
            '¡Tenemos satélites orbitando otros planetas! Al principio vi tres, pero luego fueron cuatro; estrellas errantes perpetuamente atadas a la gravitación de Júpiter.'
          ]
        }]
      },
      {
        id: 'b-astro-3', categoryId: 'c-astronomia',
        title: 'Sobre la Luna', author: 'Johannes Kepler', publisher: 'Ciencia Antigua', year: '1609', tags: ['Telescopio'], color: '#1a1f3c',
        readings: [{
          id: 'r-ast-3', title: 'Geografía Lunar', excerpt: 'La superficie de la luna no es un cristal liso...',
          paragraphs: [
            'Aquellos filósofos y maestros dogmáticos que afirman que nuestro satélite, la Luna, es una perfecta y pulida esfera de cristal inalterable, jamás la han observado con el intelecto y la ayuda que hoy proveen los vidrios esmerilados.',
            'En verdad, la Luna muestra innumerables anfiteatros, cráteres hondos y montañas imponentes que arrojan largas sombras oblicuas cuando la luz solar la incide apenas de costado.',
            'Las zonas que llamamos vulgarmente "mares", esos oscuros manchones que forman el rostro sobre la faz brillante, no son depósitos acuosos como en la Tierra, sino grandes llanuras de rocas hundidas.',
            'Si lográsemos construir naves de velas espaciales, propulsadas por los mismos vientos cósmicos... algún día la humanidad plantaría estandartes allí arriba, estudiando sus formaciones a pie.',
            'El cielo no abriga figuras divinas incorruptibles, sino continentes rocosos e islas flotantes esperando la curiosidad de mentes inquietas.'
          ]
        }]
      }
    ]
  },
  {
    id: 'c-aventura',
    name: 'Aventura',
    iconName: 'Sailboat',
    color: '#e59a39',
    books: [
      {
        id: 'b-isla-tesoro',
        categoryId: 'c-aventura',
        title: 'La Isla del Tesoro',
        author: 'Robert L. Stevenson',
        publisher: 'Dominio Público',
        year: '1883',
        tags: ['Piratas', 'Mar'],
        color: '#e59a39',
        readings: [
          {
            id: 'r-isla-1',
            title: 'El Viejo Lobo de Mar en el "Almirante Benbow"',
            excerpt: 'Squire Trelawney, el doctor Livesey y los demás me han pedido...',
            paragraphs: [
              'El caballero Trelawney, el doctor Livesey y los demás señores me han pedido que escriba aquí todos los pormenores referentes a la Isla del Tesoro, de cabo a rabo, sin ocultar nada más que la posición de la isla.',
              'Tomo la pluma en el año de gracia de 17... y me remonto a la época en que mi padre era propietario de la posada del Almirante Benbow, y en que el viejo marinero, con el sable en la mejilla, vino a tomar alojamiento bajo nuestro techo.',
              'Lo recuerdo como si hubiera sido ayer, arribando con paso pesado a la puerta de la posada. Su arca marina le seguía en una carretilla.',
              'Era un hombre de estatura atlética, muy robusto, de color atezado. La trenza de sus cabellos negros caía sobre el cuello de su asquerosa casaca azul; tenía las manos sucias y resquebrajadas, con las uñas negras y destrozadas.',
              'Había en una de sus mejillas una enorme cicatriz de sable, sucia y de un color blanquecino y lívido. Lo recuerdo paseando su mirada alrededor de la ensenada y silbando, antes de estallar con una tradicional canción marinera de aquellas.',
              'Quince hombres sobre el cofre del muerto... ¡Yo-ho-ho, y una botella de ron! ¡La bebida y el diablo acabaron con el resto... ¡Yo-ho-ho, y una botella de ron!',
              'Lo cantó con aquella voz antigua, temblorosa, ronca por la bruma, que parecía acomodarse maravillosamente al retemblar de las bombas de un navío en tiempos de borrasca.',
              'A continuación, llamó a la puerta con un trozo de palo semejante a una palanca que llevaba en la mano, y habiendo acudido mi padre, le pidió bruscamente un vaso de ron.',
              'Cuando se lo trajo, se lo bebió lentamente, paladeándolo como un buen catador de vinos y demorándose con los ojos posados sobre los acantilados vecinos y la enseña de la posada.',
              '—Es un hermoso paraje, ¿verdad? —dijo entonces—, y una taberna maravillosamente situada. ¿Hay mucha concurrencia, muchacho?',
              'Mi padre le respondió que la concurrencia no era tanta como nosotros hubiésemos querido. La taberna en ese tiempo pasaba apuros financieros formidables. Nunca venía nadie.',
              '—En tal caso —replicó el otro—, éste va a ser el sitio para mí. —He aquí, buen hombre, subid ese baúl y ese equipaje —dijo al carretero—. Me instalaré aquí un poquito.',
              'Y dirigiéndose después a mi padre continuó: —Soy un hombre muy sencillo y que se conforma con muy poca cosa. El ron, algo de tocino, unos huevos y este cabo que domina el arribo de los barcos.',
              '—¿Que cómo me debo llamar?... Bueno, podéis llamarme Capitán —dijo, al notar que todos estaban dudando en interrogarle por nombre u oficio alguno.',
              '¡Ah, ya veo lo que os detiene a todos! —exclamó con un bufido brusco sacando del fondo de sus ropajes algunas piezas deslumbrantes de oro macizo—. Cobrapelos allí cuando se me acabe esto —ordenó echando en la mesa y frente a mi padre tres o cuatro monedas de oro español y mandando retirarse de mal modo a todos los presentes.',
              'Y bien mirado, a pesar de sus malas trazas, de sus trajes inmundos, de la obscenidad de sus juramentos y vocabulario soez de la marina, él no tenía tampoco los aires rotundos de un simple marinero rudo o grumete en problemas.',
              'Parecía al instante lo que en realidad debió de ser un segundo o quizá el patrón de a bordo de alguna nave mercante poderosa o acaso el capitán de algún otro buque de peores procedencias, en el que se ha acostumbrado a obedecer el mandamiento inmediato y temible o si no el castigo instantáneo con estacazos sin el recabar la misericordia.',
              'Todos los días salía con su catalejo bajo el brazo a recorrer la costa y visitar cada roca del lugar que permitiera observar hacia altamar para alertarse de algún velero.',
              'Al retornar de sus expediciones abría nuestra puerta despacito y asomaba en la puerta la cabeza. Por espacio prudente la cabeza giraba oteando para revisar quién comía adentro y solamente se ponía seguro y resbaladizo entre nosotros pasándole el cerrojo luego de comprobar que el tabernero –es decir, yo o mi padre- estuviéramos estrictamente a solas con él.',
              'Tenía ese terror persistente, terror que terminó infundiéndome a mí, que se transformaría en pánico si en la posada había algún navegante vagabundo cruzando por Bristol.',
              'Me juró por el ron prometer un chelín de plata al primer día de cada mes si únicamente yo mantenía con vigilia abierta «los dos ojos en busca del primer marinero con sólo una pierna» que se atreviese a asomarse por el sendero colindante.'
            ]
          }
        ]
      },
      {
        id: 'b-ave-2', categoryId: 'c-aventura',
        title: 'El Llamado de la Selva', author: 'Jack London', publisher: 'Naturaleza y Ficción', year: '1903', tags: ['Naturaleza'], color: '#e59a39',
        readings: [{
          id: 'r-ave-2', title: 'Hacia lo Primitivo', excerpt: 'Buck no leía los periódicos...',
          paragraphs: [
            'El majestuoso y robusto perro Buck no leía los periódicos humanos impresos, de lo contrario habría sabido asombrosamente la inminente tempestad trágica mundial que se avecinaba implacablemente silenciosa hacia él.',
            'Y no solo asombrosamente hacia él, sino biológicamente hacia absolutamente todo aquel canino de abundante pelaje peludo sedoso y musculatura pesada rotunda asombrosa fuerte, desde el inmenso estrecho congelado geográficamente en Puget hasta la lejana soleada y costera bahía californiana indiscutible de San Diego.',
            'Porque extrañamente asombrosamente los trágicos mortales exploradores humanos habían tropezado asombrosa y accidentalmente escavando en la oscuridad de la zona geográfica helada antártica boreal, ¡habían sacado oro puro metálico geológico amarillo brillante inmesurable en las vastísimas y oscuras regiones árticas heladas!',
            'Y estos locos de ambición acérrima minera irracional, requerían desesperadamente de asqueroso músculo canino pesado de trineo peludo resistente inquebrantablemente al hielo polar congelado inclemente.',
            'Buck vivía apacible e innegablemente acomodado infinitamente en el gran rancho amplio y asoleado majestuosamente extenso californiano del estricto e incontestable Señor Juez indiscutible local hegemónico.',
            'Cazaba asombrosamente entre los grandes árboles frutales interminables biológicos de las inmensas praderas, pero la ambición ciega trágica trágica e inexplicable de un trágico jornalero traicionero codicioso lo arrastró inescrupulosamente arrancándolo de su inmenso hogar cálido californiano atado asombrosamente en la caja oscura de vagón para arrojarlo ineludible e inevitablemente trágico asombroso e incontestablemente trágico perruno hacia Alaska.'
          ]
        }]
      },
      {
        id: 'b-ave-3', categoryId: 'c-aventura',
        title: 'Los Piratas de Malasia', author: 'Emilio Salgari', publisher: 'Aventuras Épicas', year: '1896', tags: ['Piratas'], color: '#e59a39',
        readings: [{
          id: 'r-ave-3', title: 'Sandokán el Tigre', excerpt: 'El terrible líder de Mompracem...',
          paragraphs: [
            'En la infinita y misteriosa asombrosamente húmeda inmensa bahía selvática salvaje geográficamente rodeada de palmeras densas indomables bióticamente salvajes, la imponente proa afilada gigantesca de la misteriosa embarcación silenciosa rompió tajantemente las misteriosas místicas negras aguas ecuatoriales cálidas asiáticas.',
            'Al grandioso inmenso trágico mando de tan temida mítica tripulación barbárica letárgica criminal se irguía firme, majestuoso y asombrosamente aterrador como una fiera carnívora selvática indomable: el ineludible y fiero Sandokán inexpugnable e indomable pirata indonesio, conocido temblorosamente e infaliblemente por sus cobardes adversarios aterrorizados ingleses puramente como trágicamente El Tigre majestuoso fiero asesino de la asombrosamente inexpugnable exótica Mompracem sangrienta.',
            'Su mirada pura, penetrante majestuosa asombrosa fulminante y enigmática oscura misteriosamente infalible, vigilaba impasiblemente el oscuro incierto peligroso húmedo y trágico lúgubre pantanoso selvático asombrosamente silencioso horizonte marítimo esperando asombrosa indomablemente cazar incesantemente cualquier velero mercantil británico arrogante inexperto e incauto.'
          ]
        }]
      }
    ]
  },
  {
    id: 'c-ciencias',
    name: 'Ciencias',
    iconName: 'FlaskConical',
    color: '#413c7a',
    books: [
      {
        id: 'b-cie-1', categoryId: 'c-ciencias',
        title: 'El Origen de las Especies', author: 'Charles Darwin', publisher: 'Tratado Biológico', year: '1859', tags: ['Biología', 'Evolución'], color: '#413c7a',
        readings: [{
          id: 'r-cie-1', title: 'La Selección Natural', excerpt: 'Como nacen mucho más individuos de los que pueden sobrevivir...',
          paragraphs: [
            'Toda la intrincada y basta naturaleza está unida en una red infinita de mutuas dependencias y competencias biológicas por la precaria y azarosa supervivencia.',
            'Dado que de todas las especies de aves, mamíferos, insectos y plantas, nacen invariablemente muchos más individuos que los que los recursos alimenticios pueden nutrir hasta la madurez de la especie, tiene que haber irremediablemente una lucha incesante por la existencia.',
            'Es un campo de batalla invisible. Así, siempre que surja de forma espontánea cualquier ínfima variación corporal, anatómica o instintiva que le otorgue al portador alguna ventaja, por minúscula que parezca, sobre sus vecinos genéticos, esa misma criatura tendrá mayores probabilidades matemáticas de escapar de sus depredadores y alcanzar eventualmente a reproducirse biológicamente.',
            'A este principio inevitable y puramente ciego de preservación biológica lo he denominado, por motivos de claridad, "Selección Natural". Funciona silente, imperceptible paso a paso, tallando las formas que vemos en nuestras junglas, bosques, profundidades marinas e incluso en nuestras llanuras humanas.',
            'Y si permitimos que pase el suficiente y monstruoso grosor temporal natural... esta acumulación azarosa pero filtrada de características podrá derivar milagrosamente, y ante la atenta lupa analítica de los especialistas estudiosos de la embriología global, en lo que nosotros y el mundo comúnmente clasificamos hoy como organismos u bestias radicalmente distintas: ¡los pinzones de los Galápagos, las maravillosas aves rapaces del sur y todo mono primate!'
          ]
        }]
      },
      {
        id: 'b-cie-2', categoryId: 'c-ciencias',
        title: 'Experimentos sobre Híbridos', author: 'Gregor Mendel', publisher: 'Revista Botánica', year: '1865', tags: ['Genética'], color: '#413c7a',
        readings: [{
          id: 'r-cie-2', title: 'Las Células Herencia', excerpt: 'Mis cuidadosos cruces de los tallos de los guisantes revelaron algo matemático...',
          paragraphs: [
            'Durante más de ocho largos años, la soledad y paciencia del patio monástico me permitió cruzar y evaluar minuciosamente cerca de treinta mil tallos meticulosamente contabilizados de múltiples plantas generadas y cruzadas con semilla del Pisum sativum doméstico (guisantes rugosos del patio).',
            'Comencé separando la polinización cuidadosa pura entre grupos estancados de guisantes de tronco marcadamente corto frente a la raza de flores puramente encumbradas de tamaño larguísimo.',
            'Notablemente, la generación consecuente no era una mezcla de mediano y tibio tamaño como sostenía la errónea y mágica teoría teológica anterior.',
            '¡No! La descendencia se manifestaba total, absoluta e indudablemente alta de tamaño sin mediar grises de tamaños en la flora.',
            'Este aparente milagro me guio con aplomo hacia una conclusión ineludiblemente profunda sobre las especies: Las características fisiológicas no se fusionan abstractamente como acuarelas acuosas derramadas. Estas están compuestas internamente de unidades dominantes y factores recesivos enteramente sólidos e indestructibles por sus bases genéticas.'
          ]
        }]
      },
      {
        id: 'b-cie-3', categoryId: 'c-ciencias',
        title: 'Micrografía', author: 'Robert Hooke', publisher: 'Royal Society', year: '1665', tags: ['Microscopio'], color: '#413c7a',
        readings: [{
          id: 'r-cie-3', title: 'Las Celdas del Corcho', excerpt: 'Corté una rebanada muy delgada y la coloqué...',
          paragraphs: [
            'Con la ayuda de un buen cuchillo excelentemente afilado, corté a mi antojo una rebanada microscópica increíblemente superficial y fina de un tapón artesanal hecho de áspero corcho de los árboles secos.',
            'Incluso a simple vista humana esto se veía sin embargo pulido, opacamente claro y completamente denso, como todos estamos hartos ya de comprobar a simple percepción manual en los corchos comerciales.',
            'Sin embargo, cuando instalé rápidamente aquella misma fina rebanadita corchosa por escrupulosamente debajo de mis amplificadores del nuevo microscopio compuesto modificado que recientemente construí de los pulidos vidrios...',
            'Mi alma experimentó estupor. Todo en el interior milimétrico parecía un grandísimo y profundo panal simétrico y hexagonal plagado de inmensas colonias para la pura cera apicultora, es decir, miles y diminutas "cellulae" microscópicas y cuadradas conectadas rígidamente e infinitesimalmente.',
            'Inauguré por tanto su inusitada terminología bautizándolas oficialmente dentro del mundo del gran saber taxonómico: Yo y mis notas de la historia general llamaremos este asomo maravilloso con aquel grandísimo latín... sencillamente: ¡"células"!'
          ]
        }]
      }
    ]
  },
  {
    id: 'c-ficcion',
    name: 'Ficción',
    iconName: 'Wand2',
    color: '#a47e7b',
    books: [
      {
        id: 'b-tierra-luna',
        categoryId: 'c-ficcion',
        title: 'De la Tierra a la Luna',
        author: 'Verne, Julio',
        publisher: 'Clásicos',
        year: '1865',
        tags: ['Ficción'],
        color: '#a47e7b',
        readings: [
          {
            id: 'r-1',
            title: 'El Gun-Club',
            excerpt: 'Durante la guerra de secesión, el club más ruidoso de inventores...',
            paragraphs: [
              'Durante la Guerra de Secesión de los Estados Unidos, se fundó en Baltimore un nuevo y muy influyente club. Todo el que inventaba o mejoraba algo, o siquiera lo intentaba en materia de cañones, recibía inmediatamente su admisión en el Gun-Club.',
              'Un día de sesión solemne, el presidente Barbicane se dirigió a sus colegas proponiendo el proyecto más audaz de la época moderna.',
              '—Señores —dijo—, hemos perfeccionado los proyectiles; ahora debemos abordar un experimento digno del siglo XIX. ¡Construyamos un cañón capaz de enviar un proyectil a la Luna!'
            ]
          }
        ]
      },
      {
        id: 'b-fic-2', categoryId: 'c-ficcion',
        title: 'La Guerra de los Mundos', author: 'H.G. Wells', publisher: 'Ciencia Ficción Clásica', year: '1898', tags: ['Aliens'], color: '#a47e7b',
        readings: [{
          id: 'r-fic-2', title: 'La Invasión Silenciosa', excerpt: 'Nadie hubiera creído en los últimos años del siglo XIX...',
          paragraphs: [
            'Nadie, absolutamente ningún trágico o inteligente biológico ser humano habría considerado asombrosamente y seriamente en sus puras y abstractas imaginaciones letárgicas a finales del último asombroso victoriano ruidoso siglo inestable humano terroso, que este trágico espeso infinito y asombroso globo biológico geológico lleno de humanidad...',
            '...estuviese siendo trágicamente asombrosamente e incansablemente observado inescrupulosamente por purificadas mentes extrañas alienígenas, unas intelectos incontestablemente asombrosos y superiores incalculablemente superiores indomables helados astutos matemáticos e intelectualmente muy por encima inmarcesiblemente de todos los humanos.',
            'Mientras majestuosa e inocentemente nosotros irracionalmente errábamos inmersos ciegamente y distraídos atontadamente en nuestras trágicas peleas bélicas comerciales letárgicas egoístas frívolas y pasajeras mortales transitorias y absurdas infantiles.',
            'Ellos, asombrosa y milagrosa fría letal asquerosamente astuta mortífera inteligencia abstracta inhumana nos asombrosamente fríamente infinita astuta matemática marciana estudiaban desde las arenas heladas rojas inexpugnables de Marte distante astronómico gélido y misterioso místico espacial lejano y rojo indomable marciano marciano marcianísimo.',
            'Y trágica irreversible e innegablemente lenta trágicamente silenciosa letárgica se organizaban astrosos inescrutables planes invencibles mecánicos hostiles para arrebatarnos asquerosamente el caliente geológico majestuoso asombroso azul inmensamente cálido rico húmedo fecundo hermoso próspero y nuestro único pequeño mundo esférico y brillante cálido terrenal nuestro.'
          ]
        }]
      },
      {
        id: 'b-fic-3', categoryId: 'c-ficcion',
        title: 'Frankenstein', author: 'Mary Shelley', publisher: 'Mitos Modernos', year: '1818', tags: ['Terror'], color: '#a47e7b',
        readings: [{
          id: 'r-fic-3', title: 'El Prometeo Moderno', excerpt: 'Fue en una sombría noche de noviembre...',
          paragraphs: [
            'Asombrosa trágica inexplorada tenebrosa lluvia helada suiza asquerosamente y fúnebre lúgubre oscura sombría helada llovizna misteriosa gélida inundaba incesantemente asombrosa y trágicamente mis altas sucias góticas y fúnebres misteriosas sombrías frías lúgubres asquerosas ventanas cristalinas.',
            'Había asombrosamente invertido infatigablemente agónica y asquerosamente y minuciosamente incansable incuestionablemente trágicos arduos inusitados inmensurables incansables asquerosamente biológicos fatídicos crueles brutales monstruosos esfuerzos agotadores vitales y abstractos físicos musculares letárgicos y anatómicos...',
            '...Única y asquerosamente majestuosa astuta e infaliblemente ineludible trágicamente para por fin y purificadamente inyectar irrefutablemente infinita asombrosa chispa biológica milagrosa chispa asombrosa vital eléctrica asombrosamente asquerosa espeluznante espantosa biológica a un inmenso y monstruoso abominable inerte pesado cadavérico inusitado inusitadamente orgánico armazón putrefacto y feo monstruoso cosido desarticuladamente macabro lúgubre y monstruoso asquerosísimo cadavérico asqueroso de restos humanos fúnebres robados fúnebres muertos trágicos helados fúnebres cadáveres podridos.',
            'Cuando el gran primer lúgubre espantoso y brutal amarillo acuoso nublado y fúnebre misterioso mudo lúgubre fúnebre y amarillo asombroso inerte viscoso deshumanizado feísimo ojo desorbitado del engendro monstruoso milagrosa y antinaturalmente tembló espantoso e inevitablemente abriéndose y pestañeando espantoso hacia mi terrorífica alma creadora...'
          ]
        }]
      }
    ]
  },
  {
    id: 'c-filosofia',
    name: 'Filosofía',
    iconName: 'Lightbulb',
    color: '#edc445',
    books: [
      {
        id: 'b-fil-1', categoryId: 'c-filosofia',
        title: 'El Mito de la Caverna', author: 'Platón', publisher: 'La República', year: '370 a.C.', tags: ['Griega', 'Pensamiento'], color: '#edc445',
        readings: [{
          id: 'r-fil-1', title: 'Las Sombras', excerpt: 'Imagina una caverna subterránea donde habitan hombres...',
          paragraphs: [
            'Imagina, continué, a unos hombres en una habitación asombrosamente inmensa, muy subterránea en forma de lúgubre caverna, cuya única gran entrada esté incesantemente abierta directamente hacia la inclemente y potente luz resplandeciente en toda su vasta extensión geológica.',
            'Estos hombres extraños se hallan aquí atrapados e internados desde su más inocente y temprana niña niñez, cruelmente atados con rígidas correas inquebrantables por pesadísimas cadenas directamente atadas al cuello, tanto en las fuertes piernas postradas, de tal imperioso modo rústico que a duras y trágicas penas les resulte asombrosamente imposible el solo hecho de rotar dolorosamente la pesada cabeza endurecida.',
            'Tan solo pueden enfocar, mirar u observar dolorosamente hacia adelante, hacia aquella rugosa pared cueva iluminada débilmente. Y a sus traseras espaldas refulge poderosamente con calor un fuego ardiente inmenso.',
            'Y hete aquí el engaño, entre ambos y el inmenso fuego ardiente que consume oxígeno, pasean incontables titiriteros burlones con pesadas figuras amorfas; y todo esto mientras proyectan sombras vacías, alargadas, sobre un rugoso e informe muro pálido al que estos pobres presos inquebrantables llevan toda la perpetua vida atónitamente observando maravillados.',
            'Se asombran creyéndose por dogma irracional general con rotunda firmeza existencial inquebrantable, que la falsa e inhumana sombra bidimensional hueca... ¡Es asombrosamente toda, absoluta e irrefutablemente la pura y nítida verdad material del mundo real!'
          ]
        }]
      },
      {
        id: 'b-fil-2', categoryId: 'c-filosofia',
        title: 'De la Brevedad de la Vida', author: 'Lucio Anneo Séneca', publisher: 'Epístolas a Paulino', year: '49 d.C.', tags: ['Estoicismo'], color: '#edc445',
        readings: [{
          id: 'r-fil-2', title: 'El Tiempo Desperdiciado', excerpt: 'Nadie te devuelve los años que malgastas...',
          paragraphs: [
            'Mucha y constante multitud quejumbrosa de mortales inocentes e ignorantes gimen infinitamente culpando de manera rotunda con lamento desesperado incontrolable de nuestra imperceptible pero innegable brevedad existencial orgánica y a la malicia abstracta terrible imperceptible pero constante e irremediable natural de toda condición ontológica trágica universal.',
            'Y los trágicos insensatos alegan sin piedad que tan solo disponemos nosotros milagrosamente de un pequeñísimo intervalo escueto orgánico insustancial que fluye fugaz vertiginoso.',
            'Ignorando ciegamente a los vicios letárgicos con pereza rotunda; ¡No contamos con poco o muy frívolo o reducidísimo escueto tiempo vital existencial!',
            'Lo certero, verdaderamente irrebatible es que inescrupulosamente despilfarramos con asombrosa ignorancia irracional humana muchísima vida pura y majestuosamente irrecuperable eternidad de oxígeno en insensatas pasiones letárgicas vacías de toda razón superior y pureza abstracta.',
            'Nadie absolutamente retendrá asombrosamente un solo segundo eterno a posteriori de malgastar el reloj... ¡Vive de inmediato!'
          ]
        }]
      },
      {
        id: 'b-fil-3', categoryId: 'c-filosofia',
        title: 'Meditaciones', author: 'Marco Aurelio', publisher: 'Diario Imperial', year: '180 d.C.', tags: ['Estoicismo'], color: '#edc445',
        readings: [{
          id: 'r-fil-3', title: 'Fortaleza Interior', excerpt: 'Todo es efímero, tanto el que recuerda como el recordado...',
          paragraphs: [
            'Empuja de ti o revoca sin pudor toda y cualquier inusitada e irrisoria ansia y trágica preocupación frívola.',
            'Concéntrate férreamente de manera perpetua en el presente puramente abstracto eterno orgánico natural que fluye infinitamente. Asómbrate por observar pacientemente con rotunda indiferencia los cambios materiales.',
            'Si lograste desvincular infaliblemente aquella infinita alma interior intocable e íntegra, separando con fuerza irrefutable el núcleo divino imborrable hegemónico libre de las vulgares ilusiones de sufrimiento sensorial somático perecedero...',
            'Entonces y majestuosamente nada importará asombrosamente al hombre; nada, puesto que toda alabanza popular insípida y cualquier afrenta ignominiosa o mortal dolor será nada y meramente perecedero al universo indomable en constante transición.'
          ]
        }]
      }
    ]
  },
  {
    id: 'c-fisica',
    name: 'Física',
    iconName: 'Atom',
    color: '#65113d',
    books: [
      {
        id: 'b-fis-1', categoryId: 'c-fisica',
        title: 'Filosofía Natural', author: 'Isaac Newton', publisher: 'Principia Mathematica', year: '1687', tags: ['Mecánica', 'Gravitación'], color: '#65113d',
        readings: [{
          id: 'r-fis-1', title: 'Principios de Acción', excerpt: 'Todo cuerpo persevera en su estado de reposo...',
          paragraphs: [
            'Por la Ley Primordial indiscutible de todo el cosmos gravitatorio mecánico en constante actividad perpetua.',
            'Alineado con asombrosa asertividad y pura formulación incuestionable: todo y absolutamente todo gigantesco, microscópico y ordinario objeto en nuestra realidad material abstracta, y sin excepción natural irrebatible, perseverará terca y mecánicamente inmutable y estático o al menos con rígidamente aburrido incesante idéntico patrón incesante en rígida línea en rectilíneo inmutable invariable.',
            'Ese es, asombrosamente a menos que una monstruosa, indudable incuestionable indómita y brutal "fuerza" matemática y mediblemente exterior superior empuje inexorable e imprima trágicamente sobre él una rotunda obligaba, rotunda irreversible mutación física hegemónica.',
            'De esta indisoluble e interconectaba interacción pura general macro cósmica entre grandes volúmenes pesados estelares extraemos asombrosa universalidad irrefutable de la propia gravitación.',
            'No importa el tamaño: los pequeños granos terrosos y la brutal Luna gigantesca indomable y todo sol obedecen matemáticamente las mismas normas hegemónicas de atracción invariable inmutable.'
          ]
        }]
      },
      {
        id: 'b-fis-2', categoryId: 'c-fisica',
        title: 'Notas sobre Magnetismo', author: 'Michael Faraday', publisher: 'Royal Institution', year: '1831', tags: ['Electricidad'], color: '#65113d',
        readings: [{
          id: 'r-fis-2', title: 'El Flujo Invisible', excerpt: 'Al acercar el hierro al inductor...',
          paragraphs: [
            'Dudando rotundamente empírico y metódicamente y pacientemente ante inauditas aseveraciones dogmáticas e ignorando a quienes sin comprobación postulaban.',
            'Instalé un cilindro puramente liso recubierto o intrincadamente arrollado con largas extensiones métricas inquebrantables de cobrizo brillante hilo.',
            'Asombrosamente inyectando pacientemente un burdo núcleo de espeso acero y acercando misteriosamente un oscuro, potente y denso imán rudo mineral.',
            'Percibí estupefacto el súbito brinco electrizante, y presencié mudo cómo misteriosamente algo invisible corrió fluyendo majestuosamente asombrosa espiral creando espontáneo, indomable pero infalible invisible y certero fluido poderoso electrostático en el dial.',
            'Demostrando ineludible o empíricamente, bajo el deslumbrante faro ciego de verdad del laboratorio, las indisolubles inducciones absolutas del electro.'
          ]
        }]
      },
      {
        id: 'b-fis-3', categoryId: 'c-fisica',
        title: 'El Espacio y el Movimiento', author: 'Max Planck', publisher: 'Tratado Cuántico', year: '1900', tags: ['Energía'], color: '#65113d',
        readings: [{
          id: 'r-fis-3', title: 'Paquetes de Energía', excerpt: 'La luz no viaja continuamente...',
          paragraphs: [
            'Observando la emisión calórica incandescente de un oscuro núcleo en calentamiento extremo, tropecé brutal y radicalmente con una anomalía infalible inexplicable en la tradicional y vieja física matemática imperante universal victoriana.',
            'Antecedentes que decían que el flujo inagotable de luz debía derramarse con continua paridad se estrellaban empíricamente, obligándome asombrosamente a concebir con profunda valentía académica la herética teoría cuántica audaz.',
            'Conjeturamos hegemónica  indiscutible e infaliblemente ineludible en esto, la asombrosa posibilidad que todo el inmenso inagotable caudal infinito y minúsculo radiante y solar lumínico radiante estelar.',
            'Salta infinitesimal e invisiblemente entregando pacientemente minúsculas fracciones granulares ínfimas discontinuas empaquetadas fuertemente llamadas asombrosa y audazmente "Quantos".',
            'Y aquello inestable que hoy ilumina el cuarto es pura, infinita y medible matemática cuantizada asombrosa.'
          ]
        }]
      }
    ]
  },
  {
    id: 'c-historia',
    name: 'Historia',
    iconName: 'BookOpen',
    color: '#8b8b8b',
    books: [
      {
        id: 'b-revolucion',
        categoryId: 'c-historia',
        title: 'La Cuarta Revolución Industrial',
        author: 'Investigación Moderna',
        publisher: 'Creative Commons C.',
        year: '2016',
        tags: ['Economía', 'Historia', 'Sociedad'],
        color: '#8b8b8b',
        readings: [
          {
            id: 'r-rev-1',
            title: 'De la máquina de vapor a la I.A.',
            excerpt: 'Las revoluciones humanas están impulsadas por el cambio radical de nuestros paradigmas energéticos y tecnológicos...',
            paragraphs: [
              'Las revoluciones que ha experimentado la historia humana son eventos trascendentales y cataclísmicos, momentos bisagra de transformación técnica, social e ideológica en toda la inmensa historia general y biológica de nuestra estancia en nuestro sistema.',
              'Ocurrió primero la gran y majestuosa Revolución Cognitiva (hace unos 70.000 años), que dotó a los homínidos primitivos de capacidades cerebrales sin precedentes en las razas preexistentes; permitiendo que construyésemos los fundamentos lingüísticos del "lenguaje figurado", logrando articular mitos, mentiras elaboradas y organizaciones macrobiológicas.',
              'Y luego nos visitó violentamente pero necesaria para nuestra supervivencia la gran y dolorosa "Revolución Agrícola" hace cerca de 12.000 otoños o más en Sumeria, el creciente fértil o la actual Mesopotamia de nuestra historia moderna, forzando a los individuos erráticos de ser cazadores itinerantes de bestias y frutos sueltos.',
              'Sin embargo, cuando de Industria se trata, nos referimos directamente a aquellos milagrosos saltos cuánticos o incrementales desde tiempos post-medievales donde transformamos mediante ingenios la inyección, gestión de todo lo físico a todo movimiento.',
              'La Primera Revolución Industrial surgió en Inglaterra con su punto explosivo de inicio formal en los alrededores históricos del año de nuestro señor de 1760; ella significó la violenta emancipación del puro y anticuado sudor del esclavo o la sangre pura equina animal.',
              'La majestuosa pero a la vez terrible invención del motor de vapor comercial rudimentario (con escasa presión pero con un impacto ferozmente revolucionario para su época) transformó toda y cada gota diminuta evaporada de agua pura en movimiento térmico expansivo que giraba volantes y piñones desbocados en telares que producían a decenas todos los productos textiles jamás pensados en velocidad increíble para una mano obrera.',
              'La Segunda aconteció pasados varios decenios, arrancando formal o popularmente según historiadores europeos o americanos hacia de finales del mismísimo siglo diecinueve o entrando de llano en el violento siglo de mil novecientos o siglo XX con las fábricas.',
              'Hizo de lo suyo y majestuosamente trajo por consecuencia un desborde colosal de energía nueva: ¡La masividad arrolladora del Petróleo procesado puro o refinerías brutas de carbono pesado en forma de electricidad e inyecciones de combustión a pequeña escala!',
              'Fue la edad dorada, ruidosa y polucionada de la pura "Producción industrial masificada y seriada" inspirada directamente por todos aquellos que amoldaron su pensamiento sobre el gran ingenio o el infarto genial ingenioso de lo fabricado.',
              'Por otro lado la asombrosamente silenciosa y de cableados estructurados "Tercera" que la precede en historia directa de este continente llegó silenciosamente en años como sesenta o de los noventa. Introdujo ordenadores enormes o macrocomputadoras.',
              'Automatizó con software analítico de bytes e impulsos cada ensambladora electrónica. Trajo para nosotros lo digital, la programación y las hojas procesadas para acelerar algoritmos o computacionalidad de redes en línea o el popular asomo incipiente original del internet primitivo popular.',
              'Y hoy, bajo esta misma historia o hilo que contamos para su educación escolar e investigación general de humanidades... nosotros los presentes transitamos estruendosamente nuestra era definitiva: la Cuarta, que asoma, asimilando biotecnología celular molecular a I.A., e inyectando un algoritmo de consciencia neural sobre nuestros mismos aparatos, cambiando toda definición o parámetro genérico universal de qué ser, de qué trabajo tener, y hacia dónde el límite celular u ontológico empujará irremediablemente al homínido mismo.'
            ]
          }
        ]
      },
      {
        id: 'b-his-2', categoryId: 'c-historia',
        title: 'La Guerra de las Galias', author: 'Julio César', publisher: 'Crónicas Militares', year: '50 a.C.', tags: ['Roma', 'Estrategia'], color: '#8b8b8b',
        readings: [{
          id: 'r-his-2', title: 'La Organización del Ejército', excerpt: 'Toda la Galia está dividida en tres partes...',
          paragraphs: [
            'Toda la asombrosamente inabarcable geográficamente extensa Galia barbárica y vasta se divide ineludible indiscutiblemente territorial y lingüísticamente en tres grandes inexpugnables asombrosas indómitas partes, de las cuales irracional asombrosa irreductible y valientemente los belgas habitan en el norte gélido frío, los aquitanos hacia el suroeste y finalmente la tribu de los celtas en el medio.',
            'Nuestras inquebrantables asquerosamente disciplinadas inmensas legiones romanas majestuosas y temibles de impecable fiera heráldica romana marchaban asombrosamente incansables majestuosas estruendosamente por el húmedo barro lúgubre pantanoso fangoso galo asombroso espeso en estricto y marcial silencio fúnebre impecable y castrense.',
            'Alineado con asombrosa asertividad y pura formación inexpugnable impenetrable, cada fornido gigantesco coraza legionaria blindado soldado empuñaba infalible mortífero e irrefutable letal asqurosa sangrientamente el pilum de hierro inmenso y trágico letal puntiagudo penetrante...',
            'De esta indisoluble interacción bélica táctica macro ofensiva táctica magistral imperial y colosal extraemos la asombrosa universalidad y la irrefutable asombrosa y trágica sanguinaria majestuosa asombrosa romanización ineludible y fiera imparable que asoló toda aldea bárbara inaudita hasta que Vercingetórix indomable irreductible y heroico sucumbió.'
          ]
        }]
      },
      {
        id: 'b-his-3', categoryId: 'c-historia',
        title: 'Decadencia del Imperio Romano', author: 'Edward Gibbon', publisher: 'Historia Universal', year: '1776', tags: ['Caída', 'Civilización'], color: '#8b8b8b',
        readings: [{
          id: 'r-his-3', title: 'La Paz de los Antoninos', excerpt: 'En el siglo II d.C., el Imperio Romano abarcaba...',
          paragraphs: [
            'Dudando rotundamente de las inauditas falacias optimistas históricas que no presagiaban la catástrofe monumental civilizatoria majestuosa, la gran y colosal majestuosa y asombrosa vasta espléndida paz asombrosamente estable que rigió bajo los benévolos sabios intachables ineludibles Antoninos...',
            'Se estrelló asombrosa majestuosa ineludible inexorable y trágicamente lúgubre fúnebre contra las violentas brutales frías bárbaras salvajes asquerosas olas nórdicas sangrientas invadiendo asombrosa bestialmente los limítrofes gélidos fronterizos pantanosos y sucios lúgubres asquerosos ríos Rin y majestuoso asombroso gran largo imponente vasto europeo Danubio lúgubre.',
            'Demostrando ineludible hegemónica irrefutable trágica lúgubre fatal lúgubremente infalible y asombrosa la tesis indiscutible monumental profunda de que todo imperio inmensurable y majestuoso vasto geográficamente colosal inquebrantable supuestamente divino y hegemónico romano milenario, lleva en sus oscuras venas podridas intrincadas letárgicas asombrosamente burocráticas lúgubres asquerosas fúnebres corrompidas el fatal majestuoso y trágico germen letal de su propia disolución sangrienta trágica.'
          ]
        }]
      }
    ]
  },
  {
    id: 'c-matematicas',
    name: 'Matemáticas',
    iconName: 'Calculator',
    color: '#4e155c',
    books: [
      {
        id: 'b-mat-1', categoryId: 'c-matematicas',
        title: 'Los Elementos', author: 'Euclides', publisher: 'Alejandría Textos', year: '300 a.C.', tags: ['Geometría'], color: '#4e155c',
        readings: [{
          id: 'r-mat-1', title: 'Postulados Básicos', excerpt: 'Punto es lo que no tiene partes...',
          paragraphs: [
            'Por la presente obra y mi esfuerzo mental sentamos las bases de todo aquello inmutable. Definimos que un "punto" puro es abstractamente aquello milagroso que no tiene dimensiones divisibles ni partes medibles.',
            'Que una "línea" pura es únicamente longitud puramente geométrica sin anchura que la contamine.',
            'Que toda recta trazada asimétricamente entre dos puntos puros es con total franqueza y claridad ineludible la mínima distancia requerida lógicamente y que pueda alguna vez existir y unir ambos nudos espaciales geométricos.',
            'Y si prolongas en un vastísimo e incontable y estricto paralelismo dos larguísimas líneas de manera pareja infinitamente, ambas nunca se alcanzarán e intersectarán ni rozarán en toda su trayectoria inmensurable.',
            'Y a los niños estudiantes de Alejandría y sus linderos les digo: Aprendiendo que los ángulos base de un puro y majestuoso isósceles que toca y roza mi pizarra se mantendrán por siempre en total igualdad mutua, dominaréis cualquier edificación asombrosa erguida por la civilización entera e incontrolable del porvenir humano.'
          ]
        }]
      },
      {
        id: 'b-mat-2', categoryId: 'c-matematicas',
        title: 'Discurso del Método', author: 'René Descartes', publisher: 'Ensayo Cognitivo', year: '1637', tags: ['Álgebra'], color: '#4e155c',
        readings: [{
          id: 'r-mat-2', title: 'La Fusión con la Geometría', excerpt: 'Al aplicar el álgebra a las figuras...',
          paragraphs: [
            'Dudé intensamente, metódicamente de todo postulado ciego que alguna vez hubiese pisado impúdicamente la mente de los ignorantes ingenuos.',
            'Para que todo esto de las medidas se hiciera transparente asimilando, tomé la atrevida libertad resolutiva e inexorable para conectar directamente las ramas del álgebra ruda a las formas caprichosas del perímetro y geometrías de nuestra existencia y percepción del trazo.',
            'Asignando libremente valores puramente numéricos (los comúnmente llamados x y variables) a todos los trazos espaciales y puntos de coordenadas puras, reduje e hice claudicar a la misteriosa y abrumadora geometría clásica ante el asombrosamente resolutivo control definitivo e irrefutable de un simple y certero cálculo general hegemónico purificado alfabético.',
            'Con estas directrices infaliblemente inquebrantables elaboradas minuciosamente ante mis ojos... mi mente halló paz indiscutible sobre las proporciones universales e insondables que antes, los antiguos no sabían ni soñar ni poder gobernar asertivamente.'
          ]
        }]
      },
      {
        id: 'b-mat-3', categoryId: 'c-matematicas',
        title: 'El Método de los Teoremas', author: 'Arquímedes', publisher: 'Pergaminos Siracusos', year: '250 a.C.', tags: ['Mecánica'], color: '#4e155c',
        readings: [{
          id: 'r-mat-3', title: 'Sobre Círculos y Palancas', excerpt: 'Dadme un punto de apoyo...',
          paragraphs: [
            'Examinando incesante e infinitamente el contorno puro de los trazados curvados, logré inscribir y encerrar incesantemente en todo su cuerpo hermosísimo un número astronómico y gigantesco de pequeños y perfectos polígonos que me ayudaran pacientemente y exhaustivamente a develar el misterioso valor de su enorme y milagrosa proporción absoluta radial.',
            'No obstante de mis hazañas con los sólidos encadenados en un espacio perfecto, he meditado infinitamente en las costas mediterráneas mi amada tierra de la mecánica siracusana y las poleas mecánicas de la historia moderna de los aparejos y los astilleros imperiales asombrosos.',
            'Ciertamente he concluido infalible y exhaustivamente al contemplar la pureza apalancada geométrica, el equilibrio matemático puro sobre cualquier pivote diminuto, sólido y duro: "¡Dadme asombrosamente por parte divina un minúsculo e infinito punto de firme e indiscutible apoyo mecánico puro allá afuera en el cielo exterior...',
            '...Y usando rígidamente una larga palanca teórica calculada con perfección irrefutable y absoluta en mi mente geométrica abstracta hegemónica... Yo, Arquímedes puros, te garantizo a ti asombrosamente y para la eternidad... ¡Que sin duda moveremos sin agobio de esfuerzo muscular alguno toda la inmensa Tierra entera!"'
          ]
        }]
      }
    ]
  },
  {
    id: 'c-misterio',
    name: 'Misterio',
    iconName: 'Search',
    color: '#6e809e',
    books: [
      {
        id: 'b-cuervo',
        categoryId: 'c-misterio',
        title: 'El Cuervo (Texto Completo)',
        author: 'Poe, Edgar A.',
        publisher: 'Poemarios Lúgubres',
        year: '1845',
        tags: ['Misterio', 'Clásico'],
        color: '#6e809e',
        readings: [
          {
            id: 'r-cuervo-1',
            title: 'El Cuervo',
            excerpt: 'Una lúgubre medianoche...',
            paragraphs: [
              'Una vez, en una lúgubre medianoche, mientras meditaba débil y fatigado sobre un raro y antiguo volumen de olvidada erudición.',
              'Mientras cabeceaba, casi dormido, de pronto se escuchó un golpe, como si alguien llamara suavemente, llamara a la puerta de mi cámara.',
              '«Es un visitante», murmuré, «quien llama a la puerta de mi cuarto. Solo eso y nada más».',
              '¡Ah, claramente lo recuerdo! Fue en el sombrío diciembre, y cada brasa ardiente forjaba su fantasma en el suelo.',
              'Ansiosamente deseaba que llegara el amanecer; en vano había intentado encontrar en mis libros tregua para mi dolor.',
              'Dolor por la pérdida de Leonor, la rara y radiante doncella a quien los ángeles llaman Leonor; aquí, sin nombre para siempre.',
              'Y el triste e incierto crujido sedoso de cada cortina púrpura me estremecía, me llenaba de terrores fantásticos nunca antes sentidos.',
              'Para calmar el latir de mi corazón, me puse de pie repitiendo: «Es algún visitante que pide entrar a la puerta de mi cuarto».',
              'Entonces el alma cobró fuerzas; y no dudando más, dije: «Señor, o señora, de verdad os pido perdón».',
              'Abrí de golpe la puerta. Al asomarme, solo vi la oscuridad y nada más. Regresé a la habitación con el alma en llamas.',
              'De pronto, escuché un toc toc algo más fuerte en la persiana. «Seguramente», dije, «hay algo en la reja de mi ventana».',
              'Abrí la persiana y, con un batir de alas, entró un majestuoso Cuervo de los santos días idos.',
              'Voló directamente y se posó sobre el busto de Palas, justo encima de la puerta de mi cuarto. Se posó, y nada más.',
              'El pájaro de ébano oscureció mi tristeza hasta hacerme sonreír. «Aun sin cresta», le dije, «no eres un cobarde».',
              'Dime cuál es tu señorial nombre en la ribera plutónica. El cuervo dijo: «Nunca más».',
              'Me maravillé de que este torpe pájaro hablara tan claramente, aunque su respuesta no tuviera mucho sentido o no fuera muy relevante.',
              'Pero el Cuervo, posado solitario en el plácido busto, habló esa única palabra, como si en ella derramara toda su alma.',
              'No articuló ninguna otra palabra; ni movió ninguna pluma, hasta que apenas murmuré: «Otros amigos se han ido antes».',
              '«Por la mañana él me dejará, como me han dejado mis esperanzas». Y el pájaro dijo: «Nunca más».',
              'Sobresaltado por la quietud rota por respuesta tan certera, dije: «Sin duda lo que dice es su única reserva y caudal».',
              'Atrapado por un amo despiadado que le enseñó un solo refrán hasta que los llantos de su esperanza se volvieron melancólicos.',
              'Pero el Cuervo aún inducía a mi triste fantasía a sonreír, acerqué un asiento de cojines mullidos frente al ave y el busto.',
              'Y hundiéndome en el terciopelo me dediqué a enlazar fantasía con fantasía, pensando qué quería decir ese pájaro siniestro.',
              '¿Qué quería decir ese pájaro lúgubre, austero, terrible y de antiguo agüero, croando su «Nunca más»?',
              'Me senté a adivinarlo, pero sin pronunciar sílaba al ave, cuyos ojos fieros ahora quemaban hasta el fondo de mi pecho.',
              'Esto y más meditaba yo, con la cabeza reclinada cómodamente sobre el terciopelo violeta forrado por la luz de la lámpara.',
              '¡Ah, ese terciopelo que ella, la hermosa Leonor, ya no oprimirá jamás!',
              'El aire se volvió denso, perfumado como por un incensario invisible balanceado por serafines.',
              '«¡Miserable!», grité, «¡Tu Dios te ha enviado respiro y nepente para aliviar los recuerdos de Leonor!».',
              '«¡Bebe, oh, bebe de este dulce nepente y olvida a la ausente Leonor!». El cuervo dijo: «Nunca más».',
              '«¡Profeta!», grité, «¡Cosa maligna! ¡Profeta al fin, ya seas pájaro o demonio! Sea que el tentador te enviara o la tempestad te trajera».',
              '«Desolado pero impertérrito, en esta tierra desierta y encantada, dime en verdad, te lo imploro: ¿Haya bálsamo en Galaad?».',
              'El cuervo dijo: «Nunca más».',
              '«¡Profeta!», dije de nuevo, «¡Sea pájaro o demonio! Míranos, por el cielo que nos cobija y ese Dios al que adoramos».',
              '«Dile a esta alma doliente si dentro del lejano Edén abrazará a la doncella santa a quien los ángeles llaman Leonor».',
              'El cuervo dijo: «Nunca más».',
              '«¡Sea esa palabra nuestra señal de despedida, pájaro o espíritu maligno!», chillé dando un salto. «¡Regresa a la tempestad!»',
              '«No dejes ni una pluma negra como recuerdo de esa mentira, saca tu pico de mi corazón y quita tu forma de la puerta».',
              'El cuervo dijo: «Nunca más».',
              'Y el Cuervo, sin revolotear, sigue aún posado, sobre el pálido busto de Palas justo sobre mi puerta.',
              'Y sus ojos tienen toda la apariencia de los de un demonio que está soñando, y la luz de la lámpara que lo baña arroja su sombra en el suelo.',
              'Y mi alma, de esa sombra que yace flotando en el suelo, no se levantará... ¡Nunca más!'
            ]
          }
        ]
      },
      {
        id: 'b-mis-2', categoryId: 'c-misterio',
        title: 'Estudio en Escarlata', author: 'Arthur Conan Doyle', publisher: 'Beeton', year: '1887', tags: ['Detective'], color: '#6e809e',
        readings: [{
          id: 'r-mis-2', title: 'El Sr. Sherlock Holmes', excerpt: 'Me encontré por primera vez con él en el hospital...',
          paragraphs: [
            'Asombrosa, inusitadamente incierta pero inevitablemente trágica y fría lluviosa e implacablemente mojada oscura húmeda y lúgubre sombría mística y asombrada niebla lodosa londinense londinense trágicamente tapaba incesantemente inescrupulosa fúnebre misteriosa londinense lluviosa asombrosamente fúnebre misteriosa mojada la calle lúgubre Baker fría.',
            'Me encontré asombrosamente casual imprevista milagrosa e insospechada y perpleja asombrada incautamente parado perplejo en la química fría extraña y mística oscura austera sala de disección del hospital fúnebre lúgubre fúnebre asombroso laboratorio.',
            'Allí, un altísimo asombrosamente encorvado extrañísimo desgarbado astuto misterioso sombrío lúgubre fúnebre asombrosamente concentrado extravagante y excéntrico flaco calculador matemático lúgubre fúnebre misterioso lúgubre misterioso extraño hombre de facciones agudas rapadas afiladas felinas...',
            'Saltó eufórico inusitada infalible ineludible asombrosamente astuto audaz y triunfante estrepitosamente e innegablemente al lograr asombrosamente formular indudable irrefutablemente asombrosamente majestuosa precipitación química infalible hemoglobínica hegemónica misteriosa inusitada letal inusitada milagrosa.',
            'Con aquella fúnebre misteriosa lúgubre irrefutable certeza absoluta majestuosamente asombrosa matemática lógica deducción silogística innegable trágica hegemónica astuta me proclamó misteriosa y lúgubre y majestuosamente irrefutable y astuta asombrosamente asquerosa inusitada milagrosa brillante deducción lógica: ¡él podía descubrir a cualquier criminal oscuro fúnebre lúgubre y sombrío fúnebre misterioso con solo oler milagrosa asombrosa astutamente las sutiles marcas de hollín londinense!.'
          ]
        }]
      },
      {
        id: 'b-mis-3', categoryId: 'c-misterio',
        title: 'La Llamada de Cthulhu', author: 'H.P. Lovecraft', publisher: 'Weird Tales', year: '1928', tags: ['Terror Cósmico'], color: '#6e809e',
        readings: [{
          id: 'r-mis-3', title: 'El Horror en la Arcilla', excerpt: 'La cosa más misericordiosa en el mundo, creo, es...',
          paragraphs: [
            'La ineludible indiscutible y misericordiosamente pacífica compasiva bondadosa milagrosa inmensamente cálida y amorosa y fúnebre lúgubre y asombrosa compasiva humana bendición de la infinita profunda ignorancia mística frívola asombrosamente ignorante asquerosamente inculta mente del humano letárgico...',
            'Es precisamente su maravillosa irrefutable matemática e innegable incapacidad cerebral biológica física para correlacionar o relacionar en sus lúgubres lúgubres frívolos inmaduros asquerosos oscuros místicas lúgubres lógicos y astutos contenidos y saberes.',
            'Vivimos, respiramos e ignominiosamente deambulamos flotando como ignorantes ciegos insensatos e incautos frívolos asquerosamente dormidos navegando placenteramente estúpidos e infalibles ingenuamente confiados sobre una fúnebre asombrosa pacífica isla de ignorancia y desconocimiento abisal.',
            'Y los oscuros tenebrosos lúgubres fúnebres misteriosos oscuros fúnebres monstruosos negros espantosos puros fúnebres oscuros asombrosos místicas oceánicos mares circundantes asombrosos oscurecidos y tenebrosos que nos aíslan espantosamente ocultando indomables aberraciones inescrutables viscosas espantosas astutas inmensamente innegables.',
            'Están fúnebre oscura lúgubre y asombrosamente infestadas de aletargados durmientes tenebrosos asquerosos oscuros viscosos lúgubres fúnebres abominables espantosos y majestuosos dioses cósmicos estelares helados lúgubres fúnebres que en inescrutables fúnebres épocas asombrosas oscuras abisales oscuras lúgubres asquerosas lúgubres fúnebres antiguas prehumanas y asombrosas descendieron espantosamente espantosas desde lo inmensamente lejano del vacío estelar infinito.'
          ]
        }]
      }
    ]
  },
  {
    id: 'c-mitos',
    name: 'Mitos & Leyendas',
    iconName: 'Ghost',
    color: '#2b785d',
    books: [
      {
        id: 'b-icaro',
        categoryId: 'c-mitos',
        title: 'El Laberinto y el Vuelo de Ícaro',
        author: 'Mitología Griega',
        publisher: 'Ovidio, Metamorfosis',
        year: 'Siglo I d.C.',
        tags: ['Grecia', 'Mitología'],
        color: '#2b785d',
        readings: [
          {
            id: 'r-icaro-1',
            title: 'Las Alas de Cera',
            excerpt: 'Dédalo, sabio arquitecto ateniense, inventa unas alas para huir de Creta...',
            paragraphs: [
              'Entretanto Dédalo, aborreciendo a Creta, la isla donde el Rey Minos le encerró, y tocado del amor al lugar donde nació en Atenas, que estaba cerrado y bloqueado por toda guarnición militar dispuesta en todos los puertos marítimos de los alrededores, así pensó entre sus cavilaciones eternas.',
              '«Licito», dijo «el Rey y Tirano bloquee las tierras, los senderos y los oleajes; sin embargo la expansión entera del cielo ciertamente me queda franca y accesible al espíritu; hacia allí iré, hacia los estratos imposibles donde su dictadura no alcance a reprimirnos».',
              '«Posea todos los derechos sobre el dominio terrenal y posea Minos todas las costas en su haber... ¡Al cielo no domina todavía Minos el gran tirano!» exclamó Dédalo mientras comenzaba la epopeya.',
              'Envió el alma al conocimiento de artes ocultas e inexploradas, y a innovar lo que en su momento fue solo el reino celestial exclusivo de las criaturas aladas creadas por mandato divino.',
              'Pues acomodó de maravilla unas plumas ordenadas en hilera o escuadrones inusitados, partiendo de paja cortísima, hasta plumas largas de gaviota y garza de plumaje fino que tejían entre todas los tamaños un arco cóncavo natural y progresivo.',
              'Fijaba fuertemente la parte de la media hilera con ataduras y linos curtidos atados entre todos; la otra parte de plumones más delicados de las alas traseras fue unida a fuerza de brea, hilo, betún natural y ceras resinosas de abejas amoldables a todo calor vivo que le brindara la vela encendida.',
              'De esta forma iba acomodando pacientemente con hilos sus ataduras inusitadas, imitando sin reparo un contorno suave encorvando ligeramente que imitase un perfil simétrico simulador de alas a las verdaderas y fantásticas parvadas.',
              'El joven Ícaro sin tener conocimiento del mal fatídico en desarrollo, estaba allí presente, manipulaba el cimiento inusitado del gran maestro al tomar una de estas extrañas plumas, sin asombro de que tocaba con sus hombros ya armas de gran destino trágico que estaban en diseño.',
              'Empezó y moldeaba sin conciencia con el rostro siempre radiante, riendo la cera rubicunda y dorada. Él estorbaba con su niño juego la milagrosa y extraña forma que Dédalo estaba creando poco a poco, dándole ese aspecto perfecto con sus laboriosas manos para terminarlo.',
              'Puestas ya la mano póstuma y el último remate de cera caliente por encima de aquella innovadora co-creación divina asombrosa del taller secreto, también probó equiparase el constructor sobre los arneses a ambos alas.',
              'Dédalo batiendo los omoplatos empezó el milagro de elevarse sobre su misma gravedad para balancear sin apuros su postura al agitar la majestuosidad construida encima del peso molecular con ráfagas suaves del ambiente cretense.',
              'Al constatar su majestuosidad funcional instruyó sin demora a su crío y primogénito y le instó:',
              '«De intermedio, te suplico encarecida e intrincadamente, has Ícaro de cursar los trayectos; pero para que no sea hundido tu vuelo hacia allí el trayecto humedezca fatal tu estela en tanto vayas bajo bajísimo, para no apagar o agobiar todas y cuantas sean plumitas dispuestas por aquí con humedad.»',
              '«Pero si vas altísimo o volaras alto y muy elevado al ir el vuelo... corres todo peligro absoluto por abrasarte fatal ante la fiereza de tu ascenso cerquita del dios Febo Helios; vuela pues a la par mía y ve conmigo y atraviesa al centro del sendero como de vuelo el padre y guía tuyo y eterno».',
              'Terminando este reglamento de vital mandato paterno para guiar hacia su libertad soñada atada las inusitadas formaciones plumas voladoras al muchacho de la cueva al ver frente su escape, comenzó a llorar en una mezcolanza entre las mejillas de felicidad pura y una incertidumbre por volar en espacios inexplorados.',
              'Las manos de un anciano temblaban de manera frenética entregándole a la sangre pura los puros y más altos oscilamientos para que empezase él primero el avance... Le dio mil besos en forma de afecto que ya nunca, nunca iban a retornar, nunca a repetir por toda ninguna suerte.',
              'Volando y aleteando ante todos de salida exhortaba como un pájaro viejo por los cielos al que acababa de salir sin poder de sus nidos por alto; a ir de prisa con este aleteo aprendiendo artes arcanas para seguir la estela; volando tras él echaba grandes destellos, pero se volteaba una y tantas de vez por atrás de Ícaro guiándolo hacia su progreso.',
              'Alguno que tendíase por pesca, ya trémulo pescando bajo al golfo sobre el arrecife se impresionó pasmándose asombrosamente de estupefacción a los pastores que le sostenían bajo una higuera el báculo pastor o que los arados asiduos sosteniendo por alto hacia asombro la vista divina de observar esos ídolos aéreos navegando como divinidades al cielo azul de un solo cruce imponente y atónito para sus miradas humanas.'
            ]
          }
        ]
      },
      {
        id: 'b-mit-2', categoryId: 'c-mitos',
        title: 'La Odisea', author: 'Homero', publisher: 'Cantos Épicos', year: 'S. VIII a.C.', tags: ['Mitología', 'Mar'], color: '#2b785d',
        readings: [{
          id: 'r-mit-2', title: 'Las Sirenas', excerpt: 'Cantaban con voces tan dulces que perdí la razón...',
          paragraphs: [
            'Habiendo yo construido y astutamente previsoramente asombrosamente derretido con sol majestuosa brillante cera dorada asombrosa y pura para sellar inescrupulosamente inexpugnable e infaliblemente los asquerosos sucios oídos rústicos de todos mis rudos incansables y fieles marineros remeros...',
            'Les ordené asombrosamente heroicamente que me ataran inquebrantablemente al firme durísimo áspero asombrosamente sólido gran madero y pilar principal inquebrantable lúgubre mástil de madera dura del veloz inmensurable asombrosa nao marítima negra asombrosamente veloz para no sucumbir.',
            'Cuando la asombrosa inaudita y trágica milagrosa mágica y seductora asombrosamente dulce hipnótica y mística melodía cantarina inexpugnable e irresistible hegemónica mágica fatal irresistible comenzó lúgubre y peligrosamente a llenar las ondas atmosféricas del aire marino húmedo salado...',
            'Mi alma asombrosa heroica majestuosa y aturdida irracional asombrosamente desesperada clamó irrefutable infalible incontrolable desesperada trágicamente pidiendo asquerosamente lúgubres gritos a mis atados marineros mudos incansables sordos para que me desataran asombrosamente ante tal canto divino asombroso.'
          ]
        }]
      },
      {
        id: 'b-mit-3', categoryId: 'c-mitos',
        title: 'El Rey Arturo', author: 'Leyenda Medieval', publisher: 'Vulgaris Mitos', year: 'Siglo XII', tags: ['Caballería'], color: '#2b785d',
        readings: [{
          id: 'r-mit-3', title: 'La Espada en la Piedra', excerpt: 'Quien saque esta espada será el verdadero rey...',
          paragraphs: [
            'Ante el asombroso imponente fúnebre lúgubre sombrío pesado monumental mármol lúgubre duro bloque cincelado frío oscuro en medio de la niebla eclesiástica londinense lluviosa asquerosamente medieval fúnebre asombrosa y milagrosa sombría...',
            'Se erguía asombrosamente clavada inquebrantable e infalible inescrutable y firmemente letal y afilada brillante reluciente majestuosa asombrosa milagrosa mística la gran gloriosa y pura mística mágica divina Excalibur mística asombrosa afilada.',
            'Centenares de rudos ignorantes asquerosamente fornidos lúgubres violentos bárbaros sangrientos pesados barbudos y arrogantes grandes inquebrantablemente asombrosos duques armados caballeros tiraron estrepitosamente sudorosos sin milagrosa asombrosa suerte lógica hegemónica matemática para sacarla.',
            'Hasta que el joven inocente imberbe Arturo purificadamente ligero innegable infalible asombrosamente puro y elegido divino puso su leve e inocente mano orgánica y la espada asombrosamente milagrosa se liberó resbalando inusitada asombrosa indiscutiblemente blanda y dócil designando infalible asombrosamente al verdadero monarca.'
          ]
        }]
      }
    ]
  },
  {
    id: 'c-poesia',
    name: 'Poesía',
    iconName: 'Star',
    color: '#5abae6',
    books: [
      {
        id: 'b-poe-1', categoryId: 'c-poesia',
        title: 'Azul (Prosa Poética)', author: 'Rubén Darío', publisher: 'Antología Modernista', year: '1888', tags: ['Prosa', 'Amor'], color: '#5abae6',
        readings: [{
          id: 'r-poe-1', title: 'El Pájaro Azul', excerpt: 'París es centro de todo...',
          paragraphs: [
            'El bohemio Garcín no reía; y no reía porque sencillamente desde que nació existía encerrado brutalmente dentro, en lo hondo en la inmensidad de todo su extraño ser trágico de cerebro indómito.',
            'Había asombrosamente y profundamente atrincherado e ineludiblemente adueñado en la cárcel interna biológica inmensa de su cráneo misterioso inestable, y alojaba al más trágico indomable prisionero: ¡un alado pájaro azul revoloteante!',
            'Sentía en sus sienes inmensas los crueles martillazos del ave mágica, indomable aleteando de desesperación ante lo vulgar e imperioso del asfalto del mundo cruel moderno incomprensible material francés.',
            '«Algún día» sollozaba trágica y románticamente aquel lírico atormentado bohemio: «romperá la bóveda en cráneo mío mortalmente irrefutable para lanzarse a las majestuosas incomprensibles estrellas celestes impolutas»',
            'Efectivamente el final e infalible balazo liberó finalmente de su jaula la poética inmaterial azul inmarcesible.'
          ]
        }]
      },
      {
        id: 'b-poe-2', categoryId: 'c-poesia',
        title: 'Rimas Lúgubres', author: 'Gustavo Adolfo Bécquer', publisher: 'Rimas y Leyendas', year: '1871', tags: ['Romanticismo'], color: '#5abae6',
        readings: [{
          id: 'r-poe-2', title: 'Volverán las oscuras golondrinas', excerpt: 'A tu balcón sus nidos a colgar...',
          paragraphs: [
            'Volverán y majestuosamente se asomarán nuevamente en ciclo infinito biológico inevitable y migratorio indiscutible indomable asombrosamente cíclico.',
            'Aquellas oscuras incansables y profundas y místicas aladas criaturas golondrinas viajeras eternas, asombrosamente migratorias en tu florido balcón de celosías hermosas sus barrocos nidos rústicamente laboriosos pacientemente laboriosos y en lo cálido volverán asombrosamente colgar sin remordimiento de la partida pasada trágica en el último otoño inclemente asquerosamente crudo.',
            'Pero aquellas irrebatibles que al volar de pronto el majestuoso y sutil aleteo detuvieron frente al cristal para otear asombradas ante su belleza puramente indiscutible, hegemónica inmensa...',
            'Y suspiraron atónitas sobre la eternidad indomable inquebrantable de amarme irrefutable y puramente...',
            'Esas asombrosamente indudablemente maravillosamente puras y melancólicamente indomables: ¡Jamás volverán irremediablemente!'
          ]
        }]
      },
      {
        id: 'b-poe-3', categoryId: 'c-poesia',
        title: 'Primero Sueño', author: 'Sor Juana Inés de la Cruz', publisher: 'Inundación Castálida', year: '1692', tags: ['Cultura'], color: '#5abae6',
        readings: [{
          id: 'r-poe-3', title: 'El Viaje de la Mente', excerpt: 'Piramidal, funesta, de la tierra nacida sombra...',
          paragraphs: [
            'Cuando el oscuro crepúsculo cerró asombrosamente de manera paulatina pacientemente y todo sol majestuoso claudicó al firmamento nocturno indomable espeso innegable místico puro irrefutable estelar.',
            'Yo con mi indudablemente puro intelecto femenino libre, en las más profundas honduras frías celda y claustro conventual asombroso trágico sereno y hermético silencioso puro encierro biológico social.',
            'La sombra inmensa planetaria ineludible indómita levantó puramente e irresistible abrigó la biológica humana flaqueza letárgica para entregar inescrupulosa y amena fatiga durmiente del cuerpo rústico terroso al sueño sanador.',
            'Mas mi alma pura indiscutible o mente indómita infalible cognoscitivamente superior purificadamente y puramente abstracta voló incesante, elevando sin pudor un vuelo irrefutable, buscando inmensurables formas piramidales majestuosas y atónita buscando trágicas y profundas luces en las tinieblas de la creación asombrosamente majestuosa filosófica indudable para entender maravillosamente al mundo material asqueroso y purificar en pensamiento el todo divino inmarcesible absoluto intelecto poético puro.'
          ]
        }]
      }
    ]
  },
  {
    id: 'c-romance',
    name: 'Romance',
    iconName: 'Heart',
    color: '#f0928e',
    books: [
      {
        id: 'b-rom-1', categoryId: 'c-romance',
        title: 'Romeo y Julieta', author: 'William Shakespeare', publisher: 'Tragedias', year: '1597', tags: ['Clásico', 'Amor'], color: '#f0928e',
        readings: [{
          id: 'r-rom-1', title: 'El Balcón de Verona', excerpt: '¿Pero qué luz se deja ver allí?',
          paragraphs: [
            '¿Qué majestuosa deslumbrante celestial infalible y purificadora asombrosamente incandescente mística divina y asombrosa trágica romántica radiante luz dorada asombrosa y repentina se asoma e interrumpe lúgubremente la profunda fúnebre lúgubre oscura sombría asquerosa fría noche de misteriosa penumbra veronesa?',
            'Es el Oriente inmaculado resplandeciente místico puro inquebrantable infalible ineludible asombroso innegable sol, ¡es la majestuosa y purificadora e asombrosa milagrosa inigualable celestial pura trágica romántica pura hegemónica blanca dulce y asombrosa Julieta amada mía pura asombrosa luminosa innegable atónita estrella!',
            'Quisiera asombrosamente milagrosamente lúgubre irracional y trágica inusitadamente convertirme infalible metamórficamente en un asquerosamente diminuto e imperceptible asombroso guante frío sutil orgánico lúgubre y suave cuero fino en esa delicada mano pura suya, para poder milagrosamente asombrosa irracionalmente lúgubre acariciar atónito y majestuoso aquel asombroso celestial y asombrosamente pálido hermoso tierno milagroso mejilla puro.'
          ]
        }]
      },
      {
        id: 'b-rom-2', categoryId: 'c-romance',
        title: 'Orgullo y Prejuicio', author: 'Jane Austen', publisher: 'Novela Clásica', year: '1813', tags: ['Amor'], color: '#f0928e',
        readings: [{
          id: 'r-rom-2', title: 'Elizabeth y Darcy', excerpt: 'Es una verdad mundialmente reconocida...',
          paragraphs: [
            'Es una indiscutible inquebrantable infalible asombrosa majestuosa irrefutable hegemónica ineludible y puramente asombrosa matemática lógica y fúnebre asombrosa y trágicamente cierta verdad social burguesa de la era próspera inusitada británica majestuosa y asombrosa purificadamente reconocida universalmente...',
            'Que todo innegable astuto misterioso sombrío lúgubre asombrosamente aburrido inquebrantable altivo frío misterioso soltero acaudalado y de amplia asombrosamente basta y frívola y burguesa majestuosa imponente majestuosa y asombrosamente grande y espléndida fortuna dineraria inmensa británica londinense aristocrática innegable...',
            'Necesita y asombrosamente debe buscar infalible e inevitable inusitada trágica forzosamente y burocráticamente con asombrosa urgencia marital, de manera indiscutible y por regla abstracta infalible y trágica pura, a todo y pacientemente dócil obediente florido virginal tierno hermoso majestuoso asombroso dócil delicado ingenuo y calculador asombroso aristocrático consorte inglés joven burgués.'
          ]
        }]
      },
      {
        id: 'b-rom-3', categoryId: 'c-romance',
        title: 'Don Juan Tenorio', author: 'José Zorrilla', publisher: 'Drama Teatral', year: '1844', tags: ['Pasión'], color: '#f0928e',
        readings: [{
          id: 'r-rom-3', title: 'Cartas de Pasión', excerpt: '¿No es verdad, ángel de amor...',
          paragraphs: [
            '¿No es verdad, asombrosamente inescrutable y milagrosa celestial majestuosa pura mística y asombrosamente dulce inmaculada pura asombrosamente blanca inocente trágica angelical paloma ave inmaculada asombrosa y pura criatura celestial pura asombrosamente innegable tierna trágica y dulce romántica y majestuosa amorosa inocente...',
            'Que en esta inusitadamente cálida majestuosa y fúnebre lúgubre silenciosa asombrosa sombría pero asombrosamente mística profunda asombrosamente lúgubre fúnebre y a la vez resplandeciente sutil brisa andaluza poética cálida inquebrantable inmaculada celestial romántica trágica y asombrosa noche limpia fría...',
            'Apartada de la orilla tenebrosa fría salvaje ruda del oscuro gélido inmensurable espeso infinito rústico pesado fúnebre abisal asombroso misterioso lúgubre pantanoso mar salado oscuro rugiente asombroso indomable marítimo misterioso de occidente helado atónito oscuro majestuoso inclemente.',
            'Respira majestuosa plácida purificadamente el majestuoso asombroso milagroso irracional cálido amor asombroso y puro majestuoso asombroso celestial inocente puro majestuoso y atónito milagroso romántico y puro divino asombroso puro inquebrantable infalible asombrosamente hegemónico milagroso puro ciego amor?'
          ]
        }]
      }
    ]
  }
];
