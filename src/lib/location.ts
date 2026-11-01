/* Standort von Multiblatt (Zur Rosau 3, Rees) – gemeinsam genutzt vom
   Routen-Link im Markup und von der Klick-zum-Laden-Karte im Skript. */
export const MAP_LAT = 51.79171;
export const MAP_LON = 6.3564148;

/** Statischer Routen-Link (funktioniert auch ohne JavaScript). */
export const routeHref = `https://www.openstreetmap.org/directions?to=${MAP_LAT}%2C${MAP_LON}`;
