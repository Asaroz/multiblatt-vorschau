/* =============================================================================
   Zentrale Inhalts- und Konfigurationsdaten fuer den Multiblatt-Entwurf.

   Alle echten Stammdaten (Adresse, Telefon, E-Mail ...) sind hier gebuendelt,
   damit sie nur an EINER Stelle gepflegt werden muessen. Texte, die als
   Entwurf erst noch von der Inhaberin freigegeben/ergaenzt werden, sind im
   Code entsprechend gekennzeichnet.
   ========================================================================== */

import { withBase } from '../lib/url';

export const site = {
  name: 'Multiblatt',
  tagline: 'schreibt – sortiert – organisiert – optimiert – vermittelt',
  owner: 'Angela Aldenhoff',
  // Sinngemaess uebernommener Markentext (sprachlich geglaettet, Inhalt = Original)
  shortIntro:
    'Büro-Dienstleistungen und Schreibbüro aus Rees – für Selbstständige, kleine Betriebe und Privatpersonen.',
} as const;

export const contact = {
  owner: 'Angela Aldenhoff',
  company: 'Multiblatt',
  street: 'Zur Rosau 3',
  zip: '46459',
  city: 'Rees',
  country: 'Deutschland',
  // Telefon/Fax/Mobil als E.164 fuer tel:-Links + lesbare Schreibweise
  phoneHref: '+4928519652282',
  phoneLabel: '+49 2851 965 22 82',
  mobileHref: '+491749439621',
  mobileLabel: '+49 174 94 39 621',
  faxLabel: '+49 2851 965 22 83',
  email: 'info@multiblatt.de',
  // Bisher nur ein Zeitfenster bekannt (offen – siehe OFFEN!-Marker auf der Seite).
  hours: [{ day: 'Freitag', time: '08:00 – 12:00 Uhr' }],
  hoursNote: 'Weitere Sprechzeiten nach Vereinbarung.',
} as const;

/** Single-Page-Navigation: Anker-Links auf Abschnitte der Startseite.
   Als `/#id` notiert, damit die Links auch von Unterseiten (Impressum,
   Datenschutz) aus funktionieren. */
export const nav: NavItem[] = [
  { label: 'Leistungen', id: 'leistungen' },
  { label: 'Über uns', id: 'ueber' },
  { label: 'Anfahrt', id: 'anfahrt' },
  { label: 'Kontakt', id: 'kontakt' },
];

export interface NavItem {
  label: string;
  /** Abschnitts-ID auf der Startseite (ohne #). */
  id: string;
}

/** Bildquellen. Alle „placeholder"-Bilder sind PLATZHALTER (Stockfotos,
   nicht fürs finale Produkt). Angelas Foto stammt von der aktuellen Website. */
export const media = {
  hero: withBase('/images/placeholder/hero.jpg'),
  trust: withBase('/images/placeholder/trust.jpg'),
  angela: withBase('/images/from-current-site/about-angela.jpg'),
  bandIntro: withBase('/images/placeholder/band-intro.jpg'),
  bandStatement: withBase('/images/placeholder/band-statement.jpg'),
  bandCta: withBase('/images/placeholder/band-cta.jpg'),
} as const;

/** Problem-/Bedarfssituationen der Zielgruppe (echte Inhalte der aktuellen Seite). */
export const problems: string[] = [
  'Zu viel zum Schreiben, aber nicht genügend Personal?',
  'Sie sammeln Ihre Unterlagen in einem Karton und geben diesen beim Steuerberater ab?',
  'Sie haben keine Zeit, Rechnungen zu schreiben?',
  'Zu Hause den Überblick über Ihre Unterlagen verloren?',
  'Sie brauchen Struktur und Ordnung, Hilfe beim Ausfüllen von Formularen, Schreiben von Kündigungen etc.?',
];

/** Werte / Versprechen (prominent, aber dezent). */
export const values: { title: string; text: string }[] = [
  {
    title: 'Verschwiegenheit & Diskretion',
    text: 'Ihre Unterlagen und Informationen werden absolut vertraulich behandelt – das ist selbstverständlich.',
  },
  {
    title: 'Gewissenhaftigkeit',
    text: 'Sorgfältiges, genaues Arbeiten hat oberste Priorität – damit Sie sich auf das Ergebnis verlassen können.',
  },
  {
    title: 'Pünktlichkeit',
    text: 'Vereinbarte Termine und Fristen werden zuverlässig eingehalten.',
  },
  {
    title: 'Flexibilität',
    text: 'Die Tätigkeiten werden individuell auf Ihre Bedürfnisse angepasst.',
  },
];

export interface Service {
  slug: string;
  href: string;
  title: string;
  hook: string; // Aufhaenger (echter Inhalt der Originalseite)
  summary: string; // Kurzbeschreibung
  body: string[]; // Beschreibungstexte – WÖRTLICH von der Originalseite uebernommen
  examples: string[]; // Leistungen – von der Originalseite uebernommen
  image: string; // PLATZHALTER-Stockfoto
}

/** Die drei Dienstleistungsbereiche mit je eigener Unterseite. */
export const services: Service[] = [
  {
    slug: 'schreibdienste',
    href: '/dienstleistungen/schreibdienste/',
    title: 'Schreibdienste',
    hook: 'Viel zum Schreiben, zu wenig Personal?',
    summary:
      'Wir unterstützen Sie bei Ihrem Engpass – und schreiben Ihre Diktate wunschgemäß.',
    body: [
      'In Ihrer Kanzlei oder Firma geht es drunter und drüber, weil sich die „Digitalbänder“ stapeln? Alles muss schnell fertig werden, doch die Personalkapazität ist erschöpft? Multiblatt unterstützt Sie bei Ihrem Engpass!',
      'Egal ob Klagen, Schriftsätze, notarielle Kaufverträge, Inventuren oder Aktenspiegel – wir schreiben Ihre Diktate wunschgemäß. Nehmen Sie Kontakt mit uns auf, um nähere Informationen zu erhalten.',
    ],
    examples: [
      'Klagen & Schriftsätze',
      'Notarielle Kaufverträge',
      'Inventuren',
      'Aktenspiegel',
      'Diktate nach Wunsch',
    ],
    image: withBase('/images/placeholder/service-schreibdienste.jpg'),
  },
  {
    slug: 'buerotaetigkeiten',
    href: '/dienstleistungen/buerotaetigkeiten/',
    title: 'Bürotätigkeiten',
    hook: 'Sie geben Ihre Buchhaltung in einem Karton ab?',
    summary:
      'Kein oder zu wenig Büropersonal? Wir kümmern uns um Rechnungen, Fristen und Ablage.',
    body: [
      'Sie sind Inhaber einer Firma und haben kein oder zu wenig Büropersonal? Sie befassen sich den ganzen Tag mit Ihrer eigentlichen Arbeit und haben keine Zeit und Lust, sich am späten Abend noch an den PC zu setzen, um Rechnungen zu schreiben oder Unterlagen zu sortieren?',
      'Auf Ihrem Schreibtisch herrscht Chaos und jeder braucht Ihre Hilfe? Ständig verpassen Sie Termine oder Fristen zur Abgabe von Unterlagen? Dann bietet Multiblatt Ihnen Folgendes an:',
    ],
    examples: [
      'Rechnungen schreiben',
      'Geldeingänge überwachen',
      'Mahnungen schreiben',
      'Termine & Fristen überwachen',
      'Unterlagen für den Steuerberater zusammenstellen',
      'Botengänge übernehmen',
      'Unterlagen sortieren',
      'Büroorganisation optimieren',
    ],
    image: withBase('/images/placeholder/service-buerotaetigkeiten.jpg'),
  },
  {
    slug: 'privat-zu-hause',
    href: '/dienstleistungen/privat-zu-hause/',
    title: 'Privat zu Hause',
    hook: 'Sie haben zu Hause den Überblick verloren?',
    summary:
      'Keine Ordnung in den Unterlagen? Wir helfen beim Sortieren, Abheften, Ausfüllen und Schreiben.',
    body: [
      'Sie haben keine Ordnung in Ihren Unterlagen? Sie sind ein Büromuffel und Ihre Post landet stets in einer Schublade?',
      'Sie müssten eigentlich schon lange einen Vertrag kündigen oder auf einen Brief reagieren, wissen aber nicht wie? Formulare über Formulare und Sie wissen nicht, wie man sie ausfüllt?',
      'Kontaktieren Sie Multiblatt! Wir unterstützen Sie beim Sortieren, Abheften, Ausfüllen und/oder Schreiben.',
    ],
    examples: [
      'Unterlagen sortieren',
      'Post & Ablage ordnen',
      'Formulare ausfüllen',
      'Verträge kündigen',
      'Auf Briefe reagieren',
      'Abheften & Schreiben',
    ],
    image: withBase('/images/placeholder/service-privat.jpg'),
  },
];
