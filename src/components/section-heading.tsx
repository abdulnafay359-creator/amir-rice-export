export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-600">
        {eyebrow}
      </p>
      <Heading className="mt-3 font-serif text-3xl leading-tight tracking-tight text-forest-900 sm:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-forest-700/80">
          {description}
        </p>
      )}
    </div>
  );
}