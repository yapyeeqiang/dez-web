import Image from "next/image";
import Link from "next/link";
import PropertySectors from "@/components/ui/PropertySectors";

const services = [
  {
    number: "01",
    title: "Residential renovation",
    description:
      "Refresh, rework, or reimagine your home with a plan grounded in your needs, the character of the property, and the way you live.",
    includes: [
      "Interior upgrades",
      "Room-by-room improvements",
      "Home refreshes",
    ],
  },
  {
    number: "02",
    title: "Interior design & space planning",
    description:
      "Make better use of the space you have with help shaping layouts, finishes, and a cohesive visual direction.",
    includes: [
      "Layout planning",
      "Material and finish direction",
      "Design development",
    ],
  },
  {
    number: "03",
    title: "Construction & project coordination",
    description:
      "Bring the moving parts of a building project into one considered plan, with clear scope and organised coordination.",
    includes: [
      "Scope definition",
      "Build coordination",
      "Progress communication",
    ],
  },
  {
    number: "04",
    title: "Commercial & industrial property improvements",
    description:
      "Plan practical upgrades for offices, retail, workshops, storage, and operational spaces around how the property is used.",
    includes: [
      "Commercial spaces",
      "Industrial properties",
      "Functional upgrades",
    ],
  },
  {
    number: "05",
    title: "Repair & maintenance",
    description:
      "Address the practical needs of your property with repair and maintenance work planned around the problem at hand.",
    includes: ["Home repairs", "Finish repairs", "Maintenance planning"],
  },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your space, goals, priorities, and the conditions of the project.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We shape the brief and agree the work to be considered before moving into delivery.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "With a shared scope in place, the work can be coordinated with care and clear communication.",
  },
];

export default function Services() {
  return (
    <div>
      <section className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-neutral-900">
        <Image
          src="/images/services/hero.jpg"
          alt="Contemporary interior for a residential renovation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/25 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-24 text-white sm:px-10 sm:pb-20 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            How we can help
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            One property. Many ways to make it work better.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            From an early design idea to the details of the build, find support
            for residential, commercial, and industrial properties.
          </p>
        </div>
      </section>

      <PropertySectors />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-24 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
            Our services
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Practical expertise, thoughtfully brought together.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
            Every project is different. We can help with a focused part of your
            home or work with you to plan a more complete transformation.
          </p>
        </div>

        <div className="mt-10 border-t border-neutral-200">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-5 border-b border-neutral-200 py-7 md:grid-cols-[3rem_0.8fr_1.2fr] md:gap-8 md:py-9"
            >
              <span className="text-sm font-semibold text-[#a97655]">
                {service.number}
              </span>
              <h3 className="text-2xl font-medium tracking-tight text-neutral-900">
                {service.title}
              </h3>
              <div>
                <p className="max-w-2xl text-sm leading-6 text-neutral-600">
                  {service.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f2ed]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 md:items-center md:gap-16 md:py-24 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
              A considered process
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-5xl">
              From first conversation to a clear next step.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-neutral-600">
              Good coordination starts with understanding what matters. We work
              with you to clarify the brief before the work begins.
            </p>
            <Link
              href="/contact-us"
              className="mt-7 inline-flex min-h-12 items-center bg-[#a97655] px-6 text-sm font-semibold text-white hover:bg-[#8e6044]"
            >
              Discuss your project
            </Link>
          </div>
          <div className="relative aspect-4/3 overflow-hidden bg-neutral-200">
            <Image
              src="/images/services/dream-haven.jpg"
              alt="A welcoming residential interior with balanced materials"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-24 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
          A simple starting point
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
          Understand the brief. Agree the plan. Move forward together.
        </h2>
        <div className="mt-10 grid gap-8 border-t border-neutral-200 pt-8 md:grid-cols-3 md:gap-10">
          {steps.map((step) => (
            <article key={step.number}>
              <p className="text-sm font-semibold text-[#a97655]">
                {step.number}
              </p>
              <h3 className="mt-3 text-xl font-medium text-neutral-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
