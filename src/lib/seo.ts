export const siteConfig = {
  name: "TollesDing",
  siteUrl: "https://www.tollesding.de",
  title: "TollesDing | Ehrliche Alltags-Helfer für Familien (Geprüft in Augsburg)",
  description:
    "Keine Fake-Tests. Nur Dinge, die unseren Alltag mit 3 Kindern wirklich erleichtern. Von der Eiswürfelbox bis zum Schuhtrockner – persönlich ausgewählt.",
  ogDescription:
    "Keine Fake-Tests. Nur Dinge, die unseren Alltag mit 3 Kindern wirklich erleichtern."
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
