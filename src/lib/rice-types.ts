export type RiceType = {
  slug: string;
  name: string;
  category: "Basmati" | "Non-Basmati" | "Parboiled";
  image: string;
  grainLength: string | null;
  description: string;
};

export const riceTypes: RiceType[] = [
  {
    slug: "1121-steam-basmati",
    name: "1121 Steam Basmati",
    category: "Basmati",
    image: "/images/rice-catalog/1121-steam.webp",
    grainLength: "8.3–8.4 mm",
    description: "Aromatic extra-long grain that elongates during cooking.",
  },
  {
    slug: "1121-sella-parboiled",
    name: "1121 Creamy Sella",
    category: "Parboiled",
    image: "/images/rice-catalog/1121-sella.webp",
    grainLength: "8.3–8.4 mm",
    description: "Parboiled Basmati with firm grains that hold their shape during cooking.",
  },
  {
    slug: "super-basmati",
    name: "Super Basmati",
    category: "Basmati",
    image: "/images/rice-catalog/super-basmati.webp",
    grainLength: "7.0–7.2 mm",
    description: "Traditional aromatic Basmati offered in white, steam and parboiled forms.",
  },
  {
    slug: "1509-basmati",
    name: "1509 Basmati",
    category: "Basmati",
    image: "/images/rice-catalog/1509.webp",
    grainLength: "8.3–8.4 mm",
    description: "An extra-long grain offered in white, steam and parboiled forms.",
  },
  {
    slug: "pk-386-parmal",
    name: "PK-386",
    category: "Non-Basmati",
    image: "/images/rice-catalog/pk-386.webp",
    grainLength: "6.8 mm",
    description: "A slender long-grain rice available in white and parboiled forms.",
  },
  {
    slug: "irri-6-white",
    name: "IRRI-6",
    category: "Non-Basmati",
    image: "/images/rice-catalog/irri-6.webp",
    grainLength: "6.4 mm",
    description: "Soft long-grain rice from Sindh.",
  },
  {
    slug: "irri-9",
    name: "IRRI-9 (C9)",
    category: "Non-Basmati",
    image: "/images/rice-catalog/irri-9.webp",
    grainLength: "6.8 mm",
    description: "A long-grain rice grown in Sindh.",
  },
  {
    slug: "broken-rice",
    name: "IRRI-6 Broken Rice",
    category: "Non-Basmati",
    image: "/images/rice-catalog/broken.webp",
    grainLength: "Below 4.5 mm",
    description: "A 100% broken grade of IRRI-6.",
  },
  {
    slug: "brown-basmati",
    name: "Super Kernel Brown Basmati",
    category: "Basmati",
    image: "/images/rice-catalog/brown.webp",
    grainLength: "7.4–7.6 mm",
    description: "Aromatic brown Basmati from Punjab.",
  },
  {
    slug: "d98-basmati",
    name: "D98 Basmati",
    category: "Basmati",
    image: "/images/rice-catalog/d98.webp",
    grainLength: null,
    description: "An aromatic long-grain Basmati grown in Sindh.",
  },
];
