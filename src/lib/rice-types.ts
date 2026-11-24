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
    name: "1121 Steam Basmati Rice",
    category: "Basmati",
    image: "/images/rice-catalog/1121-steam.webp",
    grainLength: "8.3–8.4 mm",
    description: "A premium extra long grain rice appreciated for its natural aroma, delicate texture and excellent elongation after cooking. An ideal choice for premium retail and foodservice markets.",
  },
  {
    slug: "1121-sella-parboiled",
    name: "1121 Creamy Sella Rice",
    category: "Parboiled",
    image: "/images/rice-catalog/1121-sella.webp",
    grainLength: "8.3–8.4 mm",
    description: "A premium parboiled Basmati variety with a creamy appearance and firm texture. Its grains remain separate during cooking, making it suitable for restaurants, catering and large scale food preparation.",
  },
  {
    slug: "super-basmati",
    name: "Super Basmati Rice",
    category: "Basmati",
    image: "/images/rice-catalog/super-basmati.webp",
    grainLength: "7.0–7.2 mm",
    description: "A traditional aromatic rice known for its distinctive fragrance, fine texture and rich flavour. Available in white, steam and parboiled varieties.",
  },
  {
    slug: "1509-basmati",
    name: "1509 Basmati Rice",
    category: "Basmati",
    image: "/images/rice-catalog/1509.webp",
    grainLength: "8.3–8.4 mm",
    description: "An extra long grain variety offering excellent cooking characteristics and an appealing appearance. Available in white, steam and parboiled forms to suit different market requirements.",
  },
  {
    slug: "pk-386-parmal",
    name: "PK-386 Rice",
    category: "Non-Basmati",
    image: "/images/rice-catalog/pk-386.webp",
    grainLength: "6.8 mm",
    description: "A versatile long grain rice with a slender appearance and pleasant texture. Available in white and parboiled forms, it is suitable for everyday consumption and wholesale distribution.",
  },
  {
    slug: "irri-6-white",
    name: "IRRI-6 Rice",
    category: "Non-Basmati",
    image: "/images/rice-catalog/irri-6.webp",
    grainLength: "6.4 mm",
    description: "An economical long grain rice with a soft texture and consistent cooking performance. A practical option for bulk distribution and everyday meals.",
  },
  {
    slug: "irri-9",
    name: "IRRI-9 (C9) Rice",
    category: "Non-Basmati",
    image: "/images/rice-catalog/irri-9.webp",
    grainLength: "6.8 mm",
    description: "A long grain Non Basmati variety offering a balance of quality, texture and value. Suitable for wholesale buyers, foodservice businesses and large scale distribution.",
  },
  {
    slug: "broken-rice",
    name: "IRRI-6 Broken Rice",
    category: "Non-Basmati",
    image: "/images/rice-catalog/broken.webp",
    grainLength: "Below 4.5 mm",
    description: "A 100% broken rice grade suitable for food processing, commercial applications and buyers seeking an economical rice solution.",
  },
  {
    slug: "brown-basmati",
    name: "Super Kernel Brown Basmati Rice",
    category: "Basmati",
    image: "/images/rice-catalog/brown.webp",
    grainLength: "7.4–7.6 mm",
    description: "An aromatic whole grain rice that retains its natural bran layer, offering a nutty flavour and slightly chewy texture. A great addition to whole grain and health conscious product ranges.",
  },
  {
    slug: "d98-basmati",
    name: "D98 Basmati Rice",
    category: "Basmati",
    image: "/images/rice-catalog/d98.webp",
    grainLength: null,
    description: "An aromatic long grain Basmati variety with a distinctive fragrance and pleasant cooking texture. Suitable for both retail and wholesale markets.",
  },
];
