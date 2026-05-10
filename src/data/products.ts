export type ProductCategory =
  | "Küche"
  | "Technik"
  | "Sport"
  | "Schule"
  | "Ordnung"
  | "Unklar";

export type Product = {
  id: string;
  title: string;
  shortBenefit: string;
  storyTeaser: string;
  category: ProductCategory;
  tags: string[];
  amazonUrl: string;
  image: string | null;
  featured: boolean;
  note?: string;
};

export const AMAZON_ASSOCIATE_TAG: string = "tollesding-21";

export const products: Product[] = [
  {
    id: "eiswuerfelbox",
    title: "Eiswürfelbox mit Deckel",
    shortBenefit: "Macht in einem Rutsch genug Eis, damit der Sommer nicht alle zwei Tage Nachschub braucht.",
    storyTeaser:
      "Unsere Kinder mixen im Sommer ihre eigenen alkoholfreien Cocktails. Diese Box war der Punkt, an dem aus nervigem Gefrierfach-Gefummel endlich eine einfache Familienlösung wurde.",
    category: "Küche",
    tags: ["Sommer", "Kinder", "Küche", "familientauglich"],
    amazonUrl:
      "https://www.amazon.de/TOPAHGOD-Eisw%C3%BCrfelform-Eisw%C3%BCrfelbeh%C3%A4lter-Einfaches-Eisw%C3%BCrfelbox/dp/B0DGL1HH57",
    image: null,
    featured: true
  },
  {
    id: "wireless-ladestation",
    title: "3-in-1 Ladestation",
    shortBenefit: "Ein Platz für iPhone, Apple Watch und AirPods statt Kabelsalat auf dem Nachttisch.",
    storyTeaser:
      "Abends einfach reinlegen, morgens ist alles geladen. Kein loses Apple-Watch-Kabel mehr, nichts hängt herum und der Platz sieht gleich aufgeräumter aus.",
    category: "Technik",
    tags: ["Technik", "Ordnung", "Schlafzimmer", "Apple"],
    amazonUrl: "https://www.amazon.de/dp/B0CCVBQTB8",
    image: null,
    featured: true
  },
  {
    id: "schuhtrockner",
    title: "Schuhtrockner mit Gebläse",
    shortBenefit: "Trocknet nasse Fußballschuhe deutlich schneller als Heizung oder Warten.",
    storyTeaser:
      "Ein Tipp aus dem Fußballumfeld, der bei uns voll eingeschlagen hat: Gerade im Herbst und Winter sind trockene Schuhe am nächsten Tag plötzlich kein Glücksspiel mehr.",
    category: "Sport",
    tags: ["Sport", "Kinder", "Winter", "Fußball"],
    amazonUrl: "https://www.amazon.de/dp/B0FPQM6F2D",
    image: null,
    featured: true
  },
  {
    id: "bleistiftspitzer-dahle",
    title: "Elektrischer Bleistiftspitzer",
    shortBenefit: "Spitzt viele Stifte schnell, sauber und ohne Batteriewechsel.",
    storyTeaser:
      "Mit zwei Schulkindern wird Stiftespitzen schnell zur Wochenroutine. Das war der erste elektrische Spitzer, der stark genug war und im Alltag nicht genervt hat.",
    category: "Schule",
    tags: ["Schule", "Kinder", "Alltag", "Netzbetrieb"],
    amazonUrl: "https://www.amazon.de/dp/B00G4A5A4G",
    image: null,
    featured: false
  },
  {
    id: "airtrack-matte",
    title: "AirTrack-Turnmatte",
    shortBenefit: "Bringt Bewegung, Räder und Kopfstand sicherer nach drinnen, wenn draußen gerade nichts geht.",
    storyTeaser:
      "Im Winter wird der Flur bei uns manchmal zur kleinen Turnhalle. Die Matte macht genau das möglich, ohne dass gleich das ganze Haus mitleidet.",
    category: "Sport",
    tags: ["Sport", "Kinder", "Winter", "Zuhause"],
    amazonUrl: "https://www.amazon.de/dp/B0BR5MHBMK",
    image: null,
    featured: false
  },
  {
    id: "microplane-reibe",
    title: "Microplane Parmesanreibe",
    shortBenefit: "Reibt Parmesan so leicht, dass selbst tägliche Pasta-Routinen nicht nerven.",
    storyTeaser:
      "Der Tipp kam aus der Familie und blieb. Seitdem ist Parmesanreiben bei uns keine kleine Küchenstrafarbeit mehr, sondern etwas, das sogar unser Sohn gern übernimmt.",
    category: "Küche",
    tags: ["Küche", "Parmesan", "Familie", "bewährt"],
    amazonUrl: "https://www.amazon.de/dp/B00151WA06",
    image: null,
    featured: false
  },
  {
    id: "flaschen-trockner",
    title: "Flaschen-Trockner",
    shortBenefit: "Gibt Trinkflaschen, Deckeln und Strohhalmen einen festen, sinnvollen Platz zum Trocknen.",
    storyTeaser:
      "Mit drei Kindern stehen abends schnell sehr viele Flaschen herum. Dieser Trockner nimmt dem Küchenchaos erstaunlich zuverlässig den Wind aus den Segeln.",
    category: "Ordnung",
    tags: ["Ordnung", "Küche", "Kinder", "Schule"],
    amazonUrl: "https://www.amazon.de/dp/B09B1CL7HY",
    image: null,
    featured: false
  },
  {
    id: "produkt-8-pruefen",
    title: "TODO: Produkt 8 prüfen",
    shortBenefit: "Dieser Link scheint auf einen zweiten elektrischen Bleistiftspitzer zu zeigen und muss noch verifiziert werden.",
    storyTeaser:
      "Hier fehlt uns noch die saubere Zuordnung. Bevor wir etwas Falsches empfehlen, markieren wir das offen und prüfen den Link noch einmal.",
    category: "Unklar",
    tags: ["TODO", "prüfen", "Transparenz"],
    amazonUrl: "https://www.amazon.de/dp/B07M65BJCC",
    image: null,
    featured: false,
    note: "Der Link scheint auf eine Dahle-Spitzmaschine zu verweisen und könnte ein Duplikat von Produkt 4 sein."
  }
];
