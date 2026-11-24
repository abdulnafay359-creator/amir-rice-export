import Image from "next/image";

const markers = [
  { name: "Canada", position: "left-[21%] top-[22%]" },
  { name: "USA", position: "left-[23%] top-[36%]" },
  { name: "Europe", position: "left-[52%] top-[25%]" },
  { name: "Africa", position: "left-[54%] top-[56%]" },
  { name: "Middle East", position: "left-[61%] top-[41%]" },
  { name: "Asia", position: "left-[77%] top-[32%]" },
];

export default function ExportMarketsMap() {
  return (
    <div aria-hidden="true" className="relative mt-6 aspect-[5/2] overflow-hidden rounded-xl border border-forest-950/10 bg-forest-50">
      <Image src="/images/export-markets-map.svg" alt="" fill unoptimized className="object-contain" />
      {markers.map(({ name, position }) => (
        <span key={name} className={`absolute flex -translate-y-1/2 items-center gap-1.5 ${position}`}>
          <span className="size-2.5 rounded-full bg-forest-800 ring-2 ring-gold-300 sm:size-3" />
          <span className="hidden rounded bg-cream px-1.5 py-0.5 text-xs font-semibold text-forest-950 sm:block">{name}</span>
        </span>
      ))}
    </div>
  );
}
