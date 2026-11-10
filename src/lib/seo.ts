export const siteConfig = {
  name: "TollesDing",
  siteUrl: "https://www.tollesding.de/",
  title: "TollesDing – Praktische Dinge für unseren Familienalltag",
  description:
    "Hier sammle ich Dinge, die ich selbst ausprobiert habe und die bei uns zu Hause wirklich nützlich sind. Vielleicht ist ja auch ein guter Tipp für dich dabei.",
  ogDescription:
    "Hier sammle ich Dinge, die ich selbst ausprobiert habe und die bei uns zu Hause wirklich nützlich sind. Vielleicht ist ja auch ein guter Tipp für dich dabei."
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
