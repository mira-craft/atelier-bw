/**
 * Metadaten für einzelne Kunstwerke (Material und Größe).
 * 
 * Diese Daten werden separat gepflegt, da sie nicht vom Cloudflare Worker kommen.
 * Jeder Eintrag ist über die Bild-ID (Dateiname ohne Erweiterung) referenziert.
 * 
 * Felder:
 * - medium: Material des Kunstwerks (z.B. "Acryl auf Leinwand", "Öl auf Leinwand", "Aquarell auf Papier")
 * - dimensions: Größe im Format BxH in cm (z.B. "40×50 cm", "100×120 cm")
 */

import { PaintingMetadata } from "./paintings";

/**
 * Metadaten-Map: Bild-ID → Metadaten
 * 
 * Die Bild-ID entspricht dem Dateinamen ohne Erweiterung, wie er vom Worker kommt.
 * Beispiel: Wenn das Bild "landschaft-2024.jpg" heißt, ist die ID "landschaft-2024".
 */
export const paintingMetadata: Record<string, PaintingMetadata> = {
  // TODO: Ersetze diese Mock-Einträge mit deinen echten Daten
  // Die IDs müssen mit den Dateinamen (ohne Erweiterung) aus dem Worker übereinstimmen
  
  // Beispiel-Einträge (bitte anpassen):
  "beispiel-bild-1": {
    medium: "Acryl auf Leinwand",
    dimensions: "40×50 cm",
  },
  
  "beispiel-bild-2": {
    medium: "Öl auf Leinwand",
    dimensions: "60×80 cm",
  },
  
  "beispiel-bild-3": {
    medium: "Aquarell auf Papier",
    dimensions: "30×40 cm",
  },
  
  // Weitere Bilder hier hinzufügen...
  // "dein-bild-id": {
  //   medium: "Material hier",
  //   dimensions: "BxH cm",
  // },
};

/**
 * Hilfsfunktion: Holt Metadaten für eine bestimmte Bild-ID.
 * Gibt undefined zurück, wenn keine Metadaten vorhanden sind.
 */
export function getMetadataForPainting(id: string): PaintingMetadata | undefined {
  return paintingMetadata[id];
}
