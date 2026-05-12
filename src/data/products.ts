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
  imageAlt: string;
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
    id: "schuhtrockner",
    title: "Schuhtrockner mit Gebläse",
    shortBenefit:
      "Gerade für Familien mit sportlichen Kindern ist ein guter Schuhtrockner fast schon ein kleines Rettungsgerät. Nasse Fußballschuhe, feuchte Hallenschuhe oder durchweichte Winterstiefel trocknen deutlich schneller als auf der Heizung, und genau das macht an regnerischen Trainingswochen einen echten Unterschied.",
    storyTeaser:
      "Unser Sohn spielt fast täglich Fußball, und im Herbst oder Winter war die Frage nach trockenen Schuhen am nächsten Morgen regelmäßig ein Thema. Der entscheidende Tipp kam aus dem Fußballumfeld: nicht irgendein heizender Schuhtrockner, sondern ein Modell mit Gebläse. Seitdem sind selbst richtig nasse Schuhe oft in ein bis zwei Stunden wieder einsatzbereit. Das ist bei uns eines der Produkte mit dem klarsten Aha-Effekt überhaupt.",
    imageAlt:
      "Schuhtrockner im Einsatz für nasse Fußballschuhe und Sportschuhe",
    category: "Sport",
    tags: ["Sport", "Kinder", "Winter", "Fußball"],
    amazonUrl: "https://www.amazon.de/dp/B0FPQM6F2D",
    image: "/products/schuhtrockner.png",
    featured: true
  },
  {
    id: "airtrack-matte",
    title: "AirTrack-Turnmatte",
    shortBenefit:
      "Wenn Kinder sich gern bewegen, turnen und auch zuhause nicht stillsitzen wollen, ist eine gute Turnmatte überraschend viel wert. Sie schafft einen sicheren Rahmen für Räder, Kopfstand und kleine Turneinheiten, gerade dann, wenn Garten, Verein oder Spielplatz wetterbedingt ausfallen.",
    storyTeaser:
      "Unsere Tochter liebt Turnen, und genau im Winter fehlt oft der einfache Raum dafür. Die Matte passt bei uns in den Flur und macht daraus in wenigen Sekunden eine kleine Turnfläche. Im Sommer kann sie auch in den Garten wandern. Das Schöne daran ist weniger der große Effekt nach außen als die ganz praktische Tatsache, dass Bewegung zuhause plötzlich viel einfacher möglich wird.",
    imageAlt:
      "Turnmatte im Einsatz für Kinder beim Turnen und Bewegen zuhause",
    category: "Sport",
    tags: ["Sport", "Kinder", "Winter", "Zuhause"],
    amazonUrl: "https://www.amazon.de/dp/B0BR5MHBMK",
    image: "/products/airtrack-matte.png",
    featured: false
  },
  {
    id: "bleistiftspitzer-dahle",
    title: "Elektrischer Bleistiftspitzer",
    shortBenefit:
      "Mit Schulkindern wird Stiftespitzen schnell von einer Nebensache zu einer ziemlich regelmäßigen Aufgabe. Dieses Modell spart dabei nicht nur Zeit, sondern auch Nerven: es arbeitet schnell, sauber und vor allem mit Netzanschluss statt mit ständig leeren Batterien.",
    storyTeaser:
      "Wir haben vorher mehrere Spitzer ausprobiert, auch elektrische, aber wirklich überzeugt hat uns keiner. Entweder waren sie zu schwach oder im Alltag einfach umständlich. Dieser hier ist zwar nicht billig, aber es war der erste, bei dem wir das Gefühl hatten: genau so sollte das funktionieren. Besonders mit zwei Schulkindern merkt man schnell, wie angenehm es ist, wenn viele Stifte in kurzer Zeit sauber gespitzt sind.",
    imageAlt:
      "Elektrischer Bleistiftspitzer im Einsatz für Schulkinder",
    category: "Schule",
    tags: ["Schule", "Kinder", "Alltag", "Netzbetrieb"],
    amazonUrl: "https://www.amazon.de/dp/B07M65BJCC",
    image: "/products/bleistiftspitzer.png",
    featured: false
  },
  {
    id: "eiswuerfelbox",
    title: "Eiswürfelbox mit Deckel",
    shortBenefit:
      "Diese Eiswürfelbox löst ein sehr banales, aber im Familienalltag erstaunlich nerviges Problem: zu wenig Eis im Gefrierfach. Statt ständig kleine Mengen nachzulegen, lässt sich hier auf einmal genug vorbereiten, damit mehrere Kindergetränke, Sommerabende und spontane Besuchsrunden entspannt abgedeckt sind.",
    storyTeaser:
      "Unsere Kinder mixen im Sommer mit großer Begeisterung ihre eigenen alkoholfreien Cocktails aus Säften, Minze und allem, was ihnen gerade einfällt. Was dabei nie fehlen darf, sind Eiswürfel. Genau deshalb war diese Box bei uns ein echter Wendepunkt: kein Gefrierfach-Gefummel mehr, kein dauerndes Nachproduzieren, sondern eine einfache Lösung, aus der die Kinder ihre Eiswürfel direkt selbst nehmen können.",
    imageAlt:
      "Eiswürfelbox im Einsatz für gekühlte Kindergetränke im Familienalltag",
    category: "Küche",
    tags: ["Sommer", "Kinder", "Küche", "familientauglich"],
    amazonUrl:
      "https://www.amazon.de/TOPAHGOD-Eisw%C3%BCrfelform-Eisw%C3%BCrfelbeh%C3%A4lter-Einfaches-Eisw%C3%BCrfelbox/dp/B0DGL1HH57",
    image: "/products/eiswuerfelbox.png",
    featured: true
  },
  {
    id: "wireless-ladestation",
    title: "3-in-1 Ladestation",
    shortBenefit:
      "Wer keine Lust auf herumliegende Kabel, lose Ladepads und ein ständig verschwundenes Apple-Watch-Kabel hat, bekommt hier eine angenehm aufgeräumte Lösung. iPhone, Apple Watch und AirPods landen abends an einem festen Platz, laden gleichzeitig und sorgen nebenbei für deutlich mehr Ruhe auf dem Nachttisch oder Schreibtisch.",
    storyTeaser:
      "Genau das war bei uns der Hauptgrund für den Kauf: dieses ständige Ein- und Ausstecken an mehreren Geräten hat genervt, und das lange Watch-Kabel lag immer irgendwie im Weg. Mit der Station reicht abends ein Griff, morgens ist alles geladen und der Platz sieht auch noch deutlich ordentlicher aus. Kein spektakuläres Produkt, aber eines, das jeden Tag leise seine Arbeit macht.",
    imageAlt:
      "3-in-1 Ladestation zum gleichzeitigen Laden von Smartphone, Smartwatch und Kopfhörern",
    category: "Technik",
    tags: ["Technik", "Ordnung", "Schlafzimmer", "Apple"],
    amazonUrl: "https://www.amazon.de/dp/B0CCVBQTB8",
    image: "/products/wireless-ladestation.png",
    featured: true
  },
  {
    id: "sicherheitskabel-burg-waechter",
    title: "Burg-Wächter Sicherheitskabel",
    shortBenefit:
      "Gerade bei größeren und teureren Dingen wie einem Fahrradanhänger ist ein langes Sicherheitskabel oft deutlich praktischer als ein klassisches kurzes Schloss. Es schafft mehr Spielraum beim Anschließen, spart unterwegs Zeit und macht genau die Situationen einfacher, die sonst schnell umständlich werden.",
    storyTeaser:
      "Bei uns ging es ganz konkret um einen teuren Fahrradanhänger und die immer gleiche Frage: Wie macht man ihn sinnvoll fest, wenn man unterwegs kurz anhält oder irgendwo parkt? Seit wir dieses Sicherheitskabel am Anhänger haben, lässt sich der Anhänger einfach direkt mit ans Fahrrad oder an einen Gegenstand in der Nähe anschließen. Besonders praktisch ist das auch mit Kindern: Man kann unterwegs mehrere Kinderräder gleich mit einfädeln und zusammen abschließen, statt jedes einzelne Rad separat zu sichern. Das spart im Alltag wirklich Zeit, Gefummel und unnötige Umstände.",
    imageAlt:
      "Sicherheitskabel zum Abschließen von Fahrradanhänger und Kinderrädern unterwegs",
    category: "Ordnung",
    tags: ["Sicherheit", "Fahrrad", "Kinder", "unterwegs"],
    amazonUrl: "https://www.amazon.de/dp/B00G4A5A4G",
    image: "/products/sicherheitskabel.png",
    featured: false
  },
  {
    id: "microplane-reibe",
    title: "Microplane Parmesanreibe",
    shortBenefit:
      "Eine gute Küchenreibe wirkt erstmal unscheinbar, bis man sie jeden zweiten Tag benutzt. Gerade für Parmesan, Zitronenschale oder feine Reibearbeiten ist dieses Modell deutlich angenehmer als viele Standardreiben: präziser, leichter zu führen und nach dem Essen schneller wieder sauber.",
    storyTeaser:
      "Der Tipp kam von meiner Schwester, nachdem uns normale Reiben im Alltag immer wieder genervt hatten. Seitdem ist Parmesanreiben bei uns keine kleine Küchenstrafarbeit mehr. Unser Sohn liebt Parmesan auf Pasta, nutzt die Reibe selbst gern und genau das sagt schon viel: Wenn ein Produkt oft genutzt wird, leicht funktioniert und danach nicht kompliziert sauberzumachen ist, bleibt es einfach dauerhaft im Einsatz.",
    imageAlt:
      "Microplane Parmesanreibe im Einsatz für frisch geriebenen Käse in der Familienküche",
    category: "Küche",
    tags: ["Küche", "Parmesan", "Familie", "bewährt"],
    amazonUrl: "https://www.amazon.de/dp/B00151WA06",
    image: "/products/microplane-reibe.png",
    featured: false
  },
  {
    id: "flaschen-trockner",
    title: "Flaschen-Trockner",
    shortBenefit:
      "In Haushalten mit mehreren Kindern tauchen jeden Abend erstaunlich viele Trinkflaschen, Deckel und Strohhalme auf. Ein guter Flaschentrockner bringt genau an dieser Stelle Ruhe rein: alles hat einen festen Platz, kippt nicht um und trocknet deutlich ordentlicher als irgendwo am Rand der Spüle.",
    storyTeaser:
      "Mit drei Kindern ist das kein kleines Nebenthema, sondern echte Abendroutine. Nach Schule, Kita und Alltag stehen plötzlich mehrere Flaschen herum, dazu Deckel und wiederverwendbare Strohhalme. Genau deshalb mögen wir diesen Trockner so gern: er sieht nicht störend aus, funktioniert zuverlässig und nimmt dem typischen Küchenchaos am Abend erstaunlich effektiv den Wind aus den Segeln. Sogar Flaschen vom Wassersprudler passen bei uns gut hinein.",
    imageAlt:
      "Flaschentrockner im Einsatz für Trinkflaschen und Strohhalme von Kindern",
    category: "Ordnung",
    tags: ["Ordnung", "Küche", "Kinder", "Schule"],
    amazonUrl: "https://www.amazon.de/dp/B09B1CL7HY",
    image: "/products/flaschen-trockner.png",
    featured: false
  }
];
