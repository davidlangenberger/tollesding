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
    shortBenefit:
      "Diese Eiswürfelbox löst ein sehr banales, aber im Familienalltag erstaunlich nerviges Problem: zu wenig Eis im Gefrierfach. Statt ständig kleine Mengen nachzulegen, lässt sich hier auf einmal genug vorbereiten, damit mehrere Kindergetränke, Sommerabende und spontane Besuchsrunden entspannt abgedeckt sind.",
    storyTeaser:
      "Unsere Kinder mixen im Sommer mit großer Begeisterung ihre eigenen alkoholfreien Cocktails aus Säften, Minze und allem, was ihnen gerade einfällt. Was dabei nie fehlen darf, sind Eiswürfel. Genau deshalb war diese Box bei uns ein echter Wendepunkt: kein Gefrierfach-Gefummel mehr, kein dauerndes Nachproduzieren, sondern eine einfache Lösung, aus der die Kinder ihre Eiswürfel direkt selbst nehmen können.",
    category: "Küche",
    tags: ["Sommer", "Kinder", "Küche", "familientauglich"],
    amazonUrl:
      "https://www.amazon.de/TOPAHGOD-Eisw%C3%BCrfelform-Eisw%C3%BCrfelbeh%C3%A4lter-Einfaches-Eisw%C3%BCrfelbox/dp/B0DGL1HH57",
    image: "/products/eiswuerfelbox.png",
    featured: true
  },
  {
    id: "airtrack-matte",
    title: "AirTrack-Turnmatte",
    shortBenefit:
      "Wenn Kinder sich gern bewegen, turnen und auch zuhause nicht stillsitzen wollen, ist eine gute Turnmatte überraschend viel wert. Sie schafft einen sicheren Rahmen für Räder, Kopfstand und kleine Turneinheiten, gerade dann, wenn Garten, Verein oder Spielplatz wetterbedingt ausfallen.",
    storyTeaser:
      "Unsere Tochter liebt Turnen, und genau im Winter fehlt oft der einfache Raum dafür. Die Matte passt bei uns in den Flur und macht daraus in wenigen Sekunden eine kleine Turnfläche. Im Sommer kann sie auch in den Garten wandern. Das Schöne daran ist weniger der große Effekt nach außen als die ganz praktische Tatsache, dass Bewegung zuhause plötzlich viel einfacher möglich wird.",
    category: "Sport",
    tags: ["Sport", "Kinder", "Winter", "Zuhause"],
    amazonUrl: "https://www.amazon.de/dp/B0BR5MHBMK",
    image: "/products/airtrack-matte.png",
    featured: false
  },
  {
    id: "microplane-reibe",
    title: "Microplane Parmesanreibe",
    shortBenefit:
      "Eine gute Küchenreibe wirkt erstmal unscheinbar, bis man sie jeden zweiten Tag benutzt. Gerade für Parmesan, Zitronenschale oder feine Reibearbeiten ist dieses Modell deutlich angenehmer als viele Standardreiben: präziser, leichter zu führen und nach dem Essen schneller wieder sauber.",
    storyTeaser:
      "Der Tipp kam von meiner Schwester, nachdem uns normale Reiben im Alltag immer wieder genervt hatten. Seitdem ist Parmesanreiben bei uns keine kleine Küchenstrafarbeit mehr. Unser Sohn liebt Parmesan auf Pasta, nutzt die Reibe selbst gern und genau das sagt schon viel: Wenn ein Produkt oft genutzt wird, leicht funktioniert und danach nicht kompliziert sauberzumachen ist, bleibt es einfach dauerhaft im Einsatz.",
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
    category: "Ordnung",
    tags: ["Ordnung", "Küche", "Kinder", "Schule"],
    amazonUrl: "https://www.amazon.de/dp/B09B1CL7HY",
    image: "/products/flaschen-trockner.png",
    featured: false
  }
];
