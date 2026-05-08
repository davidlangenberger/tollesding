# Tolles Ding

Onepage-Website fuer `tollesding.de`: eine persoenliche Empfehlungsseite fuer praktische, sinnvolle und alltagstaugliche Dinge, die das Familienleben einfacher machen.

## Projektbeschreibung

Diese Seite ist bewusst keine klassische Affiliate-Landingpage. Sie praesentiert eine kleine, kuratierte Sammlung an Produkten mit persoenlicher Einordnung, ehrlicher Tonalitaet und sichtbarer Transparenz bei Affiliate-Links.

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- App Router
- semantisches HTML
- responsive, mobile-first

## Lokal starten

```bash
npm install
npm run dev
```

Dann im Browser `http://localhost:3000` oeffnen.

## Produkte bearbeiten

Die Produktdaten liegen in [src/data/products.ts](/Users/davidlangenberger/chatGPT/Projekte/tollesding/src/data/products.ts).

Pro Produkt lassen sich dort aendern:
- `title`
- `shortBenefit`
- `storyTeaser`
- `category`
- `tags`
- `amazonUrl`
- `image`
- `featured`

## Amazon Associate Tag setzen

Die Konstante liegt in [src/data/products.ts](/Users/davidlangenberger/chatGPT/Projekte/tollesding/src/data/products.ts).

Aktueller Platzhalter:

```ts
export const AMAZON_ASSOCIATE_TAG = "TODO-DEINE-ID";
```

Sobald die PartnerNet-ID vorhanden ist:

1. Platzhalter ersetzen.
2. `npm run dev` oder `npm run build` erneut ausfuehren.
3. Die Amazon-Links erhalten dann automatisch den `tag`-Parameter.

Die Logik dafuer liegt in [src/lib/amazon.ts](/Users/davidlangenberger/chatGPT/Projekte/tollesding/src/lib/amazon.ts).

## Produktgeschichten ergaenzen

Die Vorlage liegt in [content/product-stories-template.md](/Users/davidlangenberger/chatGPT/Projekte/tollesding/content/product-stories-template.md).

Sobald die finalen Geschichten vorliegen:

1. Fragen pro Produkt beantworten.
2. Die Kurztexte in `src/data/products.ts` verfeinern.
3. Optional laengere Story-Abschnitte als zusaetzliche UI-Komponente ergaenzen.

## Bilder

Aktuell sind bewusst keine Amazon-Produktbilder eingebaut. Grund: Die rechtssichere Nutzung ist fuer dieses MVP nicht sauber geklaert.

Stattdessen ist die Datenstruktur bereits vorbereitet:

- `image: string | null` in `src/data/products.ts`
- Platzhalter-Visual in jeder Produktkarte

Wenn spaeter eigene Fotos vorhanden sind:

1. Bilder in `public/` ablegen, z. B. `public/products/eiswuerfelbox.jpg`
2. Im Produkt `image: "/products/eiswuerfelbox.jpg"` setzen
3. Produktkarte bei Bedarf auf `next/image` erweitern

## Deployment mit GitHub und Vercel

### Git initialisieren

```bash
git init
git add .
git commit -m "Initial Tolles Ding landing page"
```

### GitHub Repository anlegen und pushen

```bash
git branch -M main
git remote add origin git@github.com:DEIN-NAME/tollesding.git
git push -u origin main
```

### Mit Vercel deployen

Option A: ueber das Vercel Dashboard

1. Neues Projekt importieren
2. GitHub-Repository `tollesding` auswaehlen
3. Build Settings auf Standard fuer Next.js lassen
4. Deploy starten

Option B: ueber die CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## SEO und Metadaten

Enthalten:
- `layout.tsx` mit Title, Description, Keywords, Open Graph und Canonical
- `src/app/robots.ts`
- `src/app/sitemap.ts`

## Impressum, Datenschutz, Affiliate-Kennzeichnung

Die Seite enthaelt:
- sichtbaren Affiliate-Hinweis im Hero, im Produktbereich und im Footer
- Amazon-Partner-Hinweis im Transparenzbereich und Footer
- Platzhalter fuer Impressum und Datenschutz im Footer

Wichtig:
- Impressum und Datenschutzerklaerung muessen vor dem Livegang rechtlich final ergaenzt und geprueft werden.
- Affiliate-Kennzeichnung sollte vor Liveschaltung noch einmal im Gesamtkontext juristisch geprueft werden.

## Offene TODOs

- Amazon PartnerNet Tracking-ID einsetzen
- Produkt 8 final pruefen oder austauschen
- Impressum rechtlich final ergaenzen
- Datenschutzerklaerung rechtlich final ergaenzen
- Eigene Produktfotos optional nachreichen
- Optional Analytics nur nach bewusster Datenschutzpruefung einbauen
