/* Hilfsfunktion für interne Links/Asset-Pfade, die den konfigurierten
   Base-Pfad berücksichtigt (nötig, wenn die Seite in einem Unterverzeichnis
   liegt – z. B. GitHub Pages: https://user.github.io/<repo>/).

   Lokal (base '/') ändert sich nichts; auf GitHub Pages wird der Repo-Pfad
   vorangestellt. Externe Links, tel:/mailto: und reine #Anker bleiben unberührt. */
const raw = import.meta.env.BASE_URL || '/';
const BASE = raw.endsWith('/') ? raw.slice(0, -1) : raw; // '' lokal, '/<repo>' auf Pages

export function withBase(path: string): string {
  if (/^(https?:|tel:|mailto:|#)/i.test(path)) return path;
  return BASE + (path.startsWith('/') ? path : '/' + path);
}
