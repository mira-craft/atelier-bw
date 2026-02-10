export interface Painting {
  id: string;
  title: string;
  year: string; // z. B. "2024" oder "2018 - 2022"
  src: string;

  // optional / future-proof
  medium?: string;
  dimensions?: string;
  aspectClass?: string;
}

/**
 * Ableitung eines Anzeigenamens aus dem Dateinamen.
 * Keine Interpretation – nur Darstellung.
 */
export function filenameToTitle(filename: string): string {
  return filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
