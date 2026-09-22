export const siteConfig = {
  name: "TollesDing",
  siteUrl: "https://www.tollesding.de",
  title: "TollesDing | Praktische Dinge, die wirklich helfen",
  description:
    "Sinnvolle Alltagshelfer für Zuhause und Familie: ehrlich ausgewählt, verständlich erklärt und ohne Fake-Tests oder beliebige Produktlisten.",
  ogDescription:
    "Sinnvolle Alltagshelfer für Zuhause und Familie – ehrlich ausgewählt und verständlich erklärt."
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
