/* =============================================================================
   Kundenstimmen für Multiblatt.

   Geplanter Ablauf (Absprache mit Angela, WhatsApp 08.–11.09.2026):
   Kundinnen und Kunden füllen ein Formular aus (Logo, Firmenname, freier Text),
   Angela bekommt eine Mail mit „Annehmen"/„Ablehnen" und erst nach dem
   Annehmen erscheint der Eintrag hier. KEINE Sterne-Bewertung (ausdrücklicher
   Wunsch von Angela).

   `testimonials` enthält nur echte, freigegebene Einträge – aktuell noch keine.
   `exampleTestimonials` sind ERFUNDENE Beispieltexte nur für die interne
   Testseite /kundenstimmen-test/ und dürfen nie auf der echten Seite landen.
   ========================================================================== */

import { withBase } from '../lib/url';

/** Firmenlogo. Die Form entscheidet über die Darstellung:
   `wide`  = Banner/Schriftzug (z. B. wie Angelas eigenes Logo) → als Briefkopf,
   `round` = Icon-, Kreis- oder quadratisches Logo → im Kreis.
   Beim späteren Hochladen lässt sich die Form am Seitenverhältnis erkennen
   (Breite/Höhe > 1,6 → `wide`). */
export interface TestimonialLogo {
  src: string;
  shape: 'wide' | 'round';
}

export interface Testimonial {
  /** Firmenname, wie er angezeigt wird (auch Alt-Text fürs Logo). */
  company: string;
  /** Optional: Name/Funktion der Person, die geschrieben hat. */
  person?: string;
  /** `null` = kein Logo → Monogramm aus den Initialen der Firma. */
  logo: TestimonialLogo | null;
  /** Freier Text der Kundin/des Kunden – Länge bewusst nicht begrenzt. */
  text: string;
  /** Monat der Freigabe, z. B. „September 2026". */
  date: string;
}

export const testimonials: Testimonial[] = [];

/* Spaß-Beispiele für Angela: bewusst PARODIE-Firmen mit selbst gezeichneten
   Logos (keine echten Marken/Behörden-Embleme), decken alle Logo-Formen ab:
   2× Banner, 2× rund, 1× ohne Logo; kurze und sehr lange Texte. */
const demo = (file: string) => withBase(`/images/kundenstimmen-beispiel/${file}`);

export const exampleTestimonials: Testimonial[] = [
  {
    company: 'McOrdner',
    person: 'Filialleitung Rees',
    logo: { src: demo('mcordner.svg'), shape: 'wide' },
    text: 'Seit Frau Aldenhoff unser Mahnwesen übernommen hat, kommen die offenen Rechnungen schneller rein als die Pommes raus.',
    date: 'Oktober 2026',
  },
  {
    company: 'Bundesamt für Geheimablage',
    person: 'Name der Redaktion bekannt',
    logo: { src: demo('geheimablage.svg'), shape: 'round' },
    text: 'Wir dürfen leider nicht sagen, was Frau Aldenhoff für uns sortiert hat. Nur so viel: Es liegt jetzt alles da, wo es hingehört. Und niemand hat etwas gesehen. Diskretion: einwandfrei.',
    date: 'September 2026',
  },
  {
    company: 'N.A.S.A. – Nationale Aktenordner-Sortier-Agentur',
    person: 'Missionskontrolle',
    logo: { src: demo('nasa.svg'), shape: 'round' },
    text: 'Houston, wir hatten ein Problem: vierzig Jahre Raketenbelege in Schuhkartons, quer über drei Hangars verteilt. Frau Aldenhoff hat in drei Wochen alles gesichtet, sortiert und digitalisiert, unsere Ablage auf ein System umgestellt, das sogar die Astronauten verstehen, und uns ganz nebenbei fit für die eRechnung gemacht – rechtzeitig vor der nächsten Mondlandung. Selbst die Lieferanten vom Mars zahlen jetzt pünktlich, seit sie das Mahnwesen übernommen hat. Ein kleiner Schritt für sie, ein großer Schritt für unsere Buchhaltung.',
    date: 'August 2026',
  },
  {
    company: 'Weihnachtsmann & Co. KG',
    person: 'Geschäftsführung, Nordpol',
    logo: { src: demo('weihnachtsmann.svg'), shape: 'wide' },
    text: 'Früher: zwei Milliarden Wunschzettel im Chaos. Heute: alphabetisch, nach Bravheit sortiert und fristgerecht abgearbeitet. Die Rentiere sind begeistert, die Wichtel haben endlich wieder Feierabend.',
    date: 'Dezember 2025',
  },
  {
    company: 'Familie Mustermann',
    logo: null,
    text: 'Endlich wieder Überblick über unsere Unterlagen zu Hause.',
    date: 'Juli 2026',
  },
];

/** Initialen für das Monogramm-Logo, z. B. „Musterbau GmbH" → „MG". */
export const initials = (company: string): string =>
  company
    .replace(/[^\p{L}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
