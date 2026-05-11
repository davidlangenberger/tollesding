export const siteConfig = {
  name: "TollesDing",
  siteUrl: "https://www.tollesding.de",
  title: "TollesDing: praktische Alltagshelfer für Familien",
  description:
    "Praktische Alltagshelfer für Familien: ehrlich kuratiert, persönlich bewährt und direkt verlinkt.",
  ogDescription:
    "Ehrlich kuratierte Alltagshelfer für Familien, die praktische Lösungen lieben."
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
