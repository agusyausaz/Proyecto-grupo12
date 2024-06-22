const datos = [
    {
        "id": 278,
        "title": "Cadena perpetua",
        "genre_ids": [
            18,
            80
        ],
        "overview": "Acusado del asesinato de su mujer, Andrew Dufresne, tras ser condenado a cadena perpetua, es enviado a la prisión de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros presidiarios, especialmente de Red, el jefe de la mafia de los sobornos.",
        "poster_path": "/uRRTV7p6l2ivtODWJVVAMRrwTn2.jpg",
        "vote_average": 8.705
    },
    {
        "id": 238,
        "title": "El padrino",
        "genre_ids": [
            18,
            80
        ],
        "overview": "Don Vito Corleone, conocido dentro de los círculos del hampa como 'El Padrino', es el patriarca de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York en los años cuarenta. Don Corleone tiene cuatro hijos: una chica, Connie, y tres varones; Sonny, Michael y Fredo. Cuando el Padrino reclina intervenir en el negocio de estupefacientes, empieza una cruenta lucha de violentos episodios entre las distintas familias del crimen organizado.",
        "poster_path": "/5HlLUsmsv60cZVTzVns9ICZD6zU.jpg",
        "vote_average": 8.694
    },
    {
        "id": 240,
        "title": "El padrino. Parte II",
        "genre_ids": [
            18,
            80
        ],
        "overview": "Continuación de la saga de los Corleone con dos historias paralelas: la elección de Michael Corleone como jefe de los negocios familiares y los orígenes del patriarca, el ya fallecido Don Vito, primero en Sicilia y luego en Estados Unidos, donde, empezando desde abajo, llegó a ser un poderosísimo jefe de la mafia de Nueva York.",
        "poster_path": "/mbry0W5PRylSUHsYzdiY2FSJwze.jpg",
        "vote_average": 8.577
    },
    {
        "id": 424,
        "title": "La lista de Schindler",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "overview": "Oskar Schindler, un hombre de enorme astucia y talento para las relaciones públicas, organiza un ambicioso plan para ganarse la simpatía de los nazis. Después de la invasión de Polonia por los alemanes, consigue, gracias a sus relaciones con los nazis, la propiedad de una fábrica de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace prosperar rápidamente. Su gerente, también judío, es el verdadero director en la sombra, pues Schindler no tiene el menor conocimiento industrial.",
        "poster_path": "/xnvHaMFNXzemoH4uXHDMtKnpF7l.jpg",
        "vote_average": 8.568
    },
    {
        "id": 389,
        "title": "12 hombres sin piedad",
        "genre_ids": [
            18
        ],
        "overview": "Tras escuchar todos los testimonios y valorar las pruebas presentadas, un jurado popular compuesto por doce hombres tiene que decidir, por unanimidad, si absuelve o condena a muerte a un joven acusado de haber matado a su padre. Al principio, once están completamente convencidos de su culpabilidad y se inclinan por la condena, pero el que discrepa empieza a plantear dudas razonables que, poco a poco, van resquebrajando la inicial seguridad de los demás.",
        "poster_path": "/t88XfoxO5cX3f0qaSxWsBS0Lc3.jpg",
        "vote_average": 8.543
    },
    {
        "id": 19404,
        "title": "Un amor contra viento y marea",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "overview": "Los Singh son una familia india con grandes convicciones culturales de su nación de origen, que emigraron a Reino Unido antes de nacer sus primeros hijos. Uno de ellos querrá casarse con una mujer ajena a su cultura y para ello deberá hacer todos los esfuerzos por convencer a su familia.",
        "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
        "vote_average": 8.537
    },
    {
        "id": 129,
        "title": "El viaje de Chihiro",
        "genre_ids": [
            16,
            10751,
            14
        ],
        "overview": "Durante el traslado de su familia a los suburbios, una niña de 10 años de edad deambula por un mundo gobernado por dioses, brujas y espíritus, y donde los humanos se convierten en bestias.",
        "poster_path": "/wn0wOGqFKl5hF4If8ev78mn4LGY.jpg",
        "vote_average": 8.537
    },
    {
        "id": 155,
        "title": "El caballero oscuro",
        "genre_ids": [
            18,
            28,
            80,
            53
        ],
        "overview": "Batman/Bruce Wayne regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon y del Fiscal del Distrito Harvey Dent, Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker, un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.",
        "poster_path": "/8QDQExnfNFOtabLDKqfDQuHDsIg.jpg",
        "vote_average": 8.516
    },
    {
        "id": 496243,
        "title": "Parásitos",
        "genre_ids": [
            35,
            53,
            18
        ],
        "overview": "Tanto Gi Taek (Song Kang-ho) como su familia están sin trabajo. Cuando su hijo mayor, Gi Woo (Choi Woo-sik), empieza a dar clases particulares en casa de Park (Lee Seon-gyun), las dos familias, que tienen mucho en común pese a pertenecer a dos mundos totalmente distintos, comienzan una interrelación de resultados imprevisibles.",
        "poster_path": "/4N55tgxDW0RRATyrZHbx0q9HUKv.jpg",
        "vote_average": 8.51
    },
    {
        "id": 497,
        "title": "La milla verde",
        "genre_ids": [
            14,
            18,
            80
        ],
        "overview": "En el sur de los Estados Unidos, en plena Depresión, Paul Edgecomb es un vigilante penitenciario a cargo de la Milla Verde, un pasillo que separa las celdas de los reclusos condenados a la silla eléctrica. Esperando su ejecución está John Coffey, un gigantesco negro acusado de asesinar brutalmente a dos hermanas de nueve años. Tras una personalidad ingenua, Coffey esconde un don sobrenatural prodigioso. A medida que transcurre la historia, Paul Edgecomb aprende que los milagros ocurren... incluso en los lugares más insospechados.",
        "poster_path": "/1EFS40uFzv5ZVLSpu3xqYqnou67.jpg",
        "vote_average": 8.505
    }
];