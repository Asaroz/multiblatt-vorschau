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
  // Sinngemaess uebernommener Markentext (sprachlich geglaettet, Inhalt = Original).
  // „Schreibbüro" sichtbar entfernt (Angela, 08.09.2026: „echt überholt") –
  // steht nur noch in der Meta-Description, damit die Google-Suche sie findet.
  shortIntro:
    'Büro-Dienstleistungen aus Rees – für Selbstständige, kleine Betriebe und Privatpersonen.',
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
  // Flexibilität zuerst (passt zu „Flexibel"); bisher ist nur ein festes
  // Zeitfenster bekannt – Sprechzeiten mit Angela noch bestätigen.
  hoursLead: 'Termine flexibel nach Vereinbarung',
  hours: [{ day: 'Freitag', time: '08:00 – 12:00 Uhr' }],
} as const;

/** Single-Page-Navigation: Anker-Links auf Abschnitte der Startseite.
   Als `/#id` notiert, damit die Links auch von Unterseiten (Impressum,
   Datenschutz) aus funktionieren. */
export const nav: NavItem[] = [
  { label: 'Leistungen', id: 'leistungen' },
  { label: 'Über mich', id: 'ueber' },
  { label: 'Anfahrt', id: 'anfahrt' },
  { label: 'Kontakt', id: 'kontakt' },
];

export interface NavItem {
  label: string;
  /** Abschnitts-ID auf der Startseite (ohne #). */
  id: string;
}

/** Bildquellen. Alle „placeholder"-Bilder sind PLATZHALTER (Stockfotos,
   nicht fürs finale Produkt). Angelas Porträt hat sie selbst geschickt
   (WhatsApp, 10.09.2026). OFFEN: Für `trust` wünscht sie sich ein Foto von
   sich am PC/im Bürostuhl – bis das da ist, steht dort ihr Porträt.
   Jedes Stockfoto wird genau einmal verwendet. Hero: Schreibtisch-Motiv statt
   Füller/Notizbuch (weg vom „Schreibbüro"-Eindruck). */
export const media = {
  hero: withBase('/images/placeholder/band-statement.jpg'),
  trust: withBase('/images/angela/angela-portrait.jpg'),
  angela: withBase('/images/angela/angela-kopf.jpg'),
  bandIntro: withBase('/images/placeholder/band-intro.jpg'),
  bandCta: withBase('/images/placeholder/band-cta.jpg'),
} as const;

/** Problem-/Bedarfssituationen der Zielgruppe (echte Inhalte der aktuellen Seite,
   angepasst nach Angelas Feedback vom 08.09.2026: „Bürokram" statt „Schreiben",
   Mahnwesen ergänzt). */
export const problems: string[] = [
  'Zu viel Bürokram, aber nicht genügend Personal?',
  'Offene Rechnungen, aber keine Zeit für Zahlungserinnerungen und Mahnungen?',
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
  hook: string; // Aufhaenger (Originaltext Angela)
  summary: string; // Kurzbeschreibung
  body: string[]; // Beschreibungstexte – WÖRTLICH aus Angelas Textvorlage
  benefits: string[]; // „Ihre Vorteile" – WÖRTLICH aus Angelas Textvorlage
  /** PLATZHALTER-Stockfoto. `null` = es fehlt noch ein Bild fuer diesen Bereich. */
  image: string | null;
}

/** Einleitung ueber den Leistungen – Originaltext Angela. */
export const servicesIntro =
  'Als selbstständige Bürodienstleisterin unterstütze ich kleine Unternehmen flexibel und zuverlässig bei allem, was rund ums Büro anfällt. Hier ein Überblick über meine Leistungen:';

/** Die vier Dienstleistungsbereiche.
   Quelle: „Multiblatt_Dienstleistungstexte.docx", von Angela Aldenhoff
   per E-Mail am 05.07.2026 geschickt. Texte woertlich uebernommen.
   Reihenfolge: Forderungsmanagement & Mahnwesen zuerst (Angela, 08.09.2026). */
export const services: Service[] = [
  {
    slug: 'forderungsmanagement',
    href: '/dienstleistungen/forderungsmanagement/',
    title: 'Forderungsmanagement & Mahnwesen',
    hook: 'Offene Rechnungen? Ich kümmere mich darum.',
    summary:
      'Komplettes Mahnwesen – von der Zahlungserinnerung bis zur Vollstreckung.',
    body: [
      'Nicht bezahlte Rechnungen kosten Zeit, Nerven und manchmal auch Geld. Damit Sie sich nicht selbst um das Nachtelefonieren kümmern müssen, übernehme ich für Sie das komplette Mahnwesen – zuverlässig und konsequent.',
      'Mein Service reicht von der ersten freundlichen Zahlungserinnerung über die Mahnung bis hin zum gerichtlichen Mahn- und Vollstreckungsbescheid. Sollte auch das nicht zum Erfolg führen, unterstütze ich Sie bei der Beauftragung des Gerichtsvollziehers.',
    ],
    benefits: [
      'Professionelles Mahnwesen aus einer Hand',
      'Von der Erinnerung bis zur Vollstreckung',
      'Zeitersparnis und weniger Stress für Sie',
      'Konsequentes Vorgehen bei offenen Forderungen',
    ],
    image: withBase('/images/placeholder/service-privat.jpg'),
  },
  {
    slug: 'digitalisierung-erechnung',
    href: '/dienstleistungen/digitalisierung-erechnung/',
    title: 'Digitalisierung & eRechnung',
    hook: 'Fit für die eRechnung – ich begleite Sie in die digitale Zukunft.',
    summary:
      'Schritt für Schritt zur elektronischen Rechnungsstellung – inklusive unabhängiger Software-Beratung.',
    body: [
      'Die eRechnung ist da – und viele kleine Unternehmen stehen vor der Frage: Wo fange ich an? Ich unterstütze Sie dabei, den Umstieg auf die elektronische Rechnungsstellung Schritt für Schritt und ohne Stress zu meistern.',
      'Gemeinsam schauen wir uns Ihre bisherigen Abläufe an, klären offene Fragen und finden eine Lösung, die zu Ihrem Betrieb passt. Auch bei der Suche nach der passenden Software – ob für Buchhaltung, Rechnungsstellung oder allgemeine Büroorganisation – berate ich Sie gerne und unabhängig.',
    ],
    benefits: [
      'Gesetzeskonforme Umstellung auf eRechnung',
      'Verständliche Begleitung ohne Fachchinesisch',
      'Individuelle Beratung zur passenden Software',
      'Weniger Papier, mehr Übersicht',
    ],
    // OFFEN: fuer diesen (neuen) Bereich gibt es noch kein Bild.
    image: null,
  },
  {
    slug: 'buero-organisation',
    href: '/dienstleistungen/buero-organisation/',
    title: 'Büro-Organisation & Umstrukturierung',
    hook: 'Ordnung im Büro – für mehr Überblick im Alltag.',
    summary:
      'Struktur in Unterlagen und Ablage – vom Sortieren bis zur Umstellung auf digitale Prozesse.',
    body: [
      'Gerade kleine Firmen ohne eigene Bürokraft kennen das Problem: Der Schreibtisch wird voller, die Ablage unübersichtlicher, wichtige Unterlagen sind schwer auffindbar. Ich helfe Ihnen, Struktur in Ihr Büro zu bringen – praxisnah und auf Ihre Bedürfnisse zugeschnitten.',
      'Vom Sortieren bestehender Unterlagen über die Einführung sinnvoller Ablagesysteme bis hin zur Umstellung auf digitale Prozesse: Ich unterstütze Sie dabei, den Weg weg vom Papier zu gehen – Schritt für Schritt und in Ihrem Tempo.',
    ],
    benefits: [
      'Klare, nachvollziehbare Ablagestrukturen',
      'Weniger Papierchaos, mehr digitale Übersicht',
      'Individuell angepasst an Ihren Betrieb',
      'Mehr Zeit für Ihr eigentliches Geschäft',
    ],
    // Vorher Foto mit Steuerformularen – auf Angelas Wunsch (08.09.2026) raus,
    // sonst erwarten Kunden Steuererklärungen.
    image: withBase('/images/placeholder/hero.jpg'),
  },
  {
    slug: 'schreibdienste',
    href: '/dienstleistungen/schreibdienste/',
    title: 'Schreibdienste',
    hook: 'Schreibarbeiten zuverlässig ausgelagert.',
    summary:
      'Korrespondenz, Schriftverkehr und Protokolle – übernommen, wenn intern die Zeit fehlt.',
    body: [
      'Ob Korrespondenz, Schriftverkehr, Protokolle oder sonstige Schreibarbeiten – wenn intern die Zeit oder das Personal fehlt, übernehme ich diese Aufgaben zuverlässig und professionell für Sie.',
    ],
    benefits: [
      'Schnelle, professionelle Bearbeitung',
      'Entlastung Ihres Tagesgeschäfts',
      'Flexibel einsetzbar, je nach Bedarf',
    ],
    image: withBase('/images/placeholder/service-schreibdienste.jpg'),
  },
];

/** „Über mich" – Originaltext Angela („Dokument1.docx", E-Mail vom 05.07.2026).
   Einzige Aenderung: „An- u. Verkauf" zu „An- und Verkauf" ausgeschrieben. */
export const aboutAngela: string[] = [
  'Mein Name ist Angela Aldenhoff, ich lebe in Rees – und Büroorganisation ist bei mir keine trockene Pflichtübung, sondern echte Leidenschaft.',
  'Meinen beruflichen Weg begann ich als Rechtsanwalts- und Notarfachangestellte. Nach einigen Jahren in diesem Beruf führte mich mein Weg 2002 in die Dienstleistungen für Insolvenzverwalter – ein Bereich, der mich fachlich enorm geprägt hat. Hier habe ich gelernt, auch in komplexen und oft unübersichtlichen Situationen den Überblick zu behalten: beim Inventarisieren und Bewerten von Anlagegütern, beim Organisieren und Optimieren von Büroabläufen sowie beim Verkauf von Geschäftsausstattung, Fahrzeugen und Warenbeständen.',
  'Im weiteren Verlauf kamen Erfahrungen im Bereich der Immobilienverwaltung hinzu – unter anderem im Erstellen von Nebenkostenabrechnungen und auch dem An- und Verkauf von Immobilien.',
  'Diese Vielseitigkeit ist heute mein größtes Kapital – denn kaum eine Büro-Herausforderung ist mir fremd. Mit Multiblatt biete ich Ihnen genau das: eine erfahrene, verlässliche Ansprechpartnerin, die genau weiß, worauf es ankommt – ob bei der Umstellung auf eRechnung, der Neuorganisation Ihrer Büroabläufe oder im professionellen Umgang mit offenen Forderungen. Und auch für einfache Schreibarbeiten, die im Alltag gerne mal liegen bleiben, bin ich jederzeit gerne für Sie da.',
  'Mir ist wichtig, dass Sie sich bei mir gut aufgehoben fühlen. Deshalb nehme ich mir Zeit für Ihre individuellen Anliegen und finde gemeinsam mit Ihnen praktikable Lösungen – unkompliziert, diskret und auf Augenhöhe.',
  'Ich freue mich darauf, Sie kennenzulernen!',
];
