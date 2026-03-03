/**
 * Metadaten, die manuell gepflegt werden (Material und Größe).
 */
export interface PaintingMetadata {
  medium?: string;    // z.B. "Acryl auf Leinwand"
  dimensions?: string; // z.B. "40×50 cm"
}

export interface Painting extends PaintingMetadata {
  id: string;
  title: string;
  year: string; // z. B. "2024" oder "2018 - 2022"
  src: string;
  aspectClass?: string; // CSS-Klasse für Seitenverhältnis
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
