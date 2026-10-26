const sectors = [
  {
    number: "01",
    name: "Residential",
    description:
      "Renovations and considered improvements that make homes work better for everyday life.",
  },
  {
    number: "02",
    name: "Commercial",
    description:
      "Functional, welcoming property upgrades for offices, retail, and customer-facing spaces.",
  },
  {
    number: "03",
    name: "Industrial",
    description:
      "Practical improvements for workshops, storage, and operational environments.",
  },
];

export default function PropertySectors() {
  return (
    <section className="bg-[#29251f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-20 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a17f]">
              Property focus
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              One team for different kinds of spaces.
            </h2>
          </div>
          <div className="grid gap-6 border-t border-white/20 pt-6 sm:grid-cols-3 md:border-t-0 md:pt-0">
            {sectors.map((sector) => (
              <article
                key={sector.number}
                className="border-b border-white/20 pb-6 sm:border-b-0 sm:pb-0"
              >
                <p className="text-xs font-semibold text-[#d2a17f]">
                  {sector.number}
                </p>
                <h3 className="mt-3 text-xl font-medium">{sector.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {sector.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
