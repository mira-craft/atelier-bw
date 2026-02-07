import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export interface Painting {
  id: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  src: string;
  aspectClass: string;
}

export const paintings: Painting[] = [
  {
    id: "ochre-field",
    title: "Ochre Field",
    year: "2024",
    medium: "Oil on canvas",
    dimensions: "180 × 320 cm",
    src: painting1,
    aspectClass: "aspect-[16/9]",
  },
  {
    id: "forest-veil",
    title: "Forest Veil",
    year: "2024",
    medium: "Oil on canvas",
    dimensions: "120 × 90 cm",
    src: gallery1,
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "deep-current",
    title: "Deep Current",
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "160 × 280 cm",
    src: painting2,
    aspectClass: "aspect-[16/9]",
  },
  {
    id: "warm-horizon",
    title: "Warm Horizon",
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "100 × 75 cm",
    src: gallery2,
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "morning-veil",
    title: "Morning Veil",
    year: "2024",
    medium: "Oil on canvas",
    dimensions: "150 × 260 cm",
    src: painting3,
    aspectClass: "aspect-[16/9]",
  },
  {
    id: "soft-field",
    title: "Soft Field",
    year: "2022",
    medium: "Oil on canvas",
    dimensions: "110 × 82 cm",
    src: gallery3,
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "amber-square",
    title: "Amber Square",
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "100 × 100 cm",
    src: gallery4,
    aspectClass: "aspect-square",
  },
  {
    id: "still-water",
    title: "Still Water",
    year: "2024",
    medium: "Oil on canvas",
    dimensions: "90 × 120 cm",
    src: gallery5,
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "teal-shore",
    title: "Teal Shore",
    year: "2022",
    medium: "Oil on canvas",
    dimensions: "130 × 97 cm",
    src: gallery6,
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "still-table",
    title: "Still Table",
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "140 × 240 cm",
    src: painting4,
    aspectClass: "aspect-[16/9]",
  },
];
