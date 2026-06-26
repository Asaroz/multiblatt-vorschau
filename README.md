# Multiblatt – Redesign-Entwurf (Pitch-Vorschau)

Moderner Gestaltungs-Entwurf für die Website von **Multiblatt** (Büro- &
Schreibservice, Angela Aldenhoff, Rees). Inhalte und Funktionsumfang
entsprechen der aktuellen Seite – Gestaltung, Struktur und Lesbarkeit sind neu.

> ⚠️ **Entwurf, nicht die offizielle Website.** Einzelne Beschreibungstexte sind
> als Entwurf gekennzeichnet (Kommentare im Code), und die Rechtstexte
> (Impressum / Datenschutz) sind nur als Layout-Gerüst angelegt. Sie müssen von
> der Inhaberin bzw. über einen Generator / eine Rechtsberatung befüllt werden.

## Schnellstart

Voraussetzung: **Node.js ≥ 18** (getestet mit Node 24).

```bash
npm install      # Abhängigkeiten installieren (einmalig)
npm run dev      # Entwicklungs-Server starten
```

Danach im Browser öffnen: **http://localhost:4321**

Weitere Befehle:

```bash
npm run build    # Statische Seite nach dist/ bauen
npm run preview  # Gebaute Seite lokal ansehen
```

## Tech-Stack

- **[Astro](https://astro.build/)** – statische Multipage-Site, kein SPA, sehr schlank.
- **[Tailwind CSS v4](https://tailwindcss.com/)** – via offiziellem Vite-Plugin.
- **Self-hosted Schriften** über `@fontsource` (Inter + Source Serif 4) –
  **keine Google-Fonts-CDN**, alles wird lokal mitgeliefert.
- Deutschsprachig, Mobile-First, semantisches HTML, A11y-bewusst.

## Projektstruktur

Die Seite ist als **Single Page** aufgebaut: Alle zusammenfassbaren Bereiche
(Leistungen, Über uns, Anfahrt, Kontakt) sind Abschnitte auf der Startseite,
erreichbar über Anker-Navigation mit Scrollspy. Nur die Rechtstexte sind
eigene Seiten.

```
public/images/
├─ placeholder/            # PLATZHALTER-Stockfotos (im UI sichtbar markiert)
└─ from-current-site/      # Bild(er) von der aktuellen Website (Angelas Foto)
src/
├─ data/site.ts            # ZENTRALE Inhalte: Kontakt, Navigation, Leistungen, Werte, Bildpfade
├─ layouts/Base.astro      # Grundgerüst (Head, Meta, Header/Footer, SEO/JSON-LD)
├─ components/
│  ├─ Header.astro         # Single-Page-Navigation (Anker + Scrollspy, mobiles Menü)
│  ├─ Footer.astro
│  ├─ PageHero.astro       # Seitenkopf für die Rechtstexte
│  ├─ Figure.astro         # Bild-Wrapper inkl. „Platzhalter“-Badge
│  └─ ParallaxBand.astro   # Voll-breiter Bild-Trenner mit dezentem Parallax
├─ styles/global.css       # Design-Tokens (Farben, Schriften) + Basis-Stile + Reveal-Animation
└─ pages/
   ├─ index.astro          # KOMPLETTE Single Page (Hero, Leistungen, Über uns, Anfahrt, Kontakt)
   ├─ impressum.astro      # Platzhalter
   └─ datenschutz.astro    # Platzhalter
```

**Inhalte ändern:** Die meisten Texte (Adresse, Telefon, Leistungen, Werte,
Problem-Situationen) und die Bildpfade liegen zentral in
[`src/data/site.ts`](src/data/site.ts). Eine Änderung dort wirkt sich überall aus.

**Farben/Schriften ändern:** Die Design-Tokens stehen oben in
[`src/styles/global.css`](src/styles/global.css) im `@theme`-Block.

## Bilder (WICHTIG: Platzhalter!)

- Die Fotos in `public/images/placeholder/` sind **temporäre Stockfotos** und
  im Layout **sichtbar mit einem „Platzhalter“-Badge** gekennzeichnet. Sie sind
  **nicht** fürs finale Produkt gedacht und sollten durch eigene/lizenzierte
  Bilder ersetzt werden. Quelle der aktuellen Platzhalter: Unsplash.
- Angelas Foto unter „Über mich“ (`public/images/from-current-site/`) stammt von
  der **aktuellen Website** und ist als „Foto: aktuelle Website“ markiert – am
  besten gegen ein höher aufgelöstes, aktuelles Foto tauschen.
- Bild austauschen: Datei in `public/images/...` ersetzen oder den Pfad in
  [`src/data/site.ts`](src/data/site.ts) anpassen. Badge entfernen:
  `badge={null}` an der `<Figure>` setzen (siehe `src/components/Figure.astro`).

## Datenschutz „by design“

- Keine externen Ressourcen von Drittservern beim normalen Seitenaufruf
  (Bilder & Schriften werden lokal ausgeliefert).
- Keine Tracking-/Marketing-Cookies, **kein** Cookie-Banner nötig.
- Schriften lokal eingebunden (kein Google-Fonts-CDN).
- Die Karte im Abschnitt **Anfahrt** lädt OpenStreetMap **erst nach Klick** (Einwilligung).

## Noch zu erledigen (vor dem Live-Gang)

- [ ] **Platzhalter-Bilder ersetzen** (siehe oben) und Badges entfernen.
- [x] Leistungs- und Kontakttexte von der aktuellen Website übernommen (verbatim, in `src/data/site.ts`).
- [ ] „Über mich“-Text + Foto durch aktuelle, persönliche Version ersetzen (für diesen Abschnitt gibt es auf der alten Seite keinen Fließtext).
- [ ] Vollständige Sprechzeiten ergänzen (aktuell nur Freitag als Platzhalter).
- [ ] Impressum & Datenschutz rechtsverbindlich befüllen.
- [ ] Exakte Karten-Koordinaten für die Anschrift prüfen (Skript in `src/pages/index.astro`).
- [ ] Kontaktformular an einen sicheren Versand (Server-Endpunkt / E-Mail-Dienst) anbinden – **nur über HTTPS**.

## Google Analytics – sinnvoll oder nicht?

Kurz: **Für diese Seite eher nicht** – jedenfalls nicht Google Analytics.

- Google Analytics ist DSGVO-rechtlich heikel (US-Datentransfer) und würde ein
  Cookie-Banner mit Einwilligung **erzwingen** – das macht die bewusst schlanke,
  cookie-freie Seite komplizierter und genau das zunichte, was hier ein Vorteil ist.
- Eine kleine, lokale Dienstleister-Seite braucht selten detailliertes Tracking.
- **Falls** Reichweiten-Zahlen gewünscht sind: eine **cookielose, datensparsame
  Lösung** wählen, z. B. *Plausible* oder *Matomo* (EU-Hosting, anonymisiert) –
  idealerweise so konfiguriert, dass keine Einwilligung nötig ist. Häufig
  genügen aber bereits die **anonymen Server-Statistiken des Hosters**.
