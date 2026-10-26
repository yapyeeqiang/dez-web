import Image from "next/image";
import Link from "next/link";
import PropertySectors from "@/components/ui/PropertySectors";

const projectConcepts = [
  {
    title: "A quieter kind of luxury",
    type: "Living room · Concept direction",
    image: "/images/services/luxe.jpg",
    alt: "Warm contemporary living room with layered materials",
  },
  {
    title: "Room to gather",
    type: "Family home · Concept direction",
    image: "/images/services/dream-haven.jpg",
    alt: "Comfortable modern home interior",
  },
  {
    title: "A considered first impression",
    type: "Interior finishes · Concept direction",
    image: "/images/services/our-services.jpg",
    alt: "Refined interior materials and detailing",
  },
];

const principles = [
  {
    number: "01",
    title: "Listen before we plan",
    description:
      "We start with your priorities, your space, and the way you want to live in it.",
  },
  {
    number: "02",
    title: "Make the details make sense",
    description:
      "Clear scopes and considered choices keep design intent connected to the build.",
  },
  {
    number: "03",
    title: "Build with care",
    description:
      "Thoughtful coordination and close attention to finishes shape a better result.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-neutral-900 lg:min-h-[calc(100svh-5rem)]">
        <Image
          src="/assets/villa-hero-1.jpg"
          alt="Warm, contemporary residential interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/25 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-24 text-white sm:px-10 sm:pb-20 lg:px-12 lg:pb-24">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            DEZ Construction &amp; Renovation
          </p>
          <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Better spaces, built for what comes next.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Thoughtful renovation, considered design, and dependable project
            coordination for residential, commercial, and industrial properties.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="inline-flex min-h-12 items-center bg-[#a97655] px-6 text-sm font-semibold text-white hover:bg-[#8e6044]"
            >
              Talk about your project
            </Link>
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center border border-white/70 px-6 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explore concept work
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 md:grid-cols-2 md:items-center md:gap-16 md:py-28 lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
            A better build starts with a good conversation
          </p>
          <h2 className="mt-5 max-w-xl text-4xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-5xl">
            Your property, understood from the inside out.
          </h2>
          <p className="mt-6 max-w-xl leading-7 text-neutral-600">
            Every property and every brief is different. We bring design
            thinking and construction planning together, making decisions easier
            to understand from the first conversation through to the finishing
            details.
          </p>
          <Link
            href="/about-us"
            className="mt-7 inline-flex border-b border-[#a97655] pb-1 text-sm font-semibold text-neutral-900"
          >
            Get to know DEZ
          </Link>
        </div>
        <div className="relative aspect-4/3 overflow-hidden bg-[#eee9e3]">
          <Image
            src="/assets/house-frame.png"
            alt="Architectural line drawing of a home"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-6 sm:p-10"
          />
        </div>
      </section>

      <PropertySectors />

      <section className="bg-[#f5f2ed] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
                Ideas for considered living
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
                A few directions we love.
              </h2>
            </div>
            <Link
              href="/projects"
              className="w-fit border-b border-neutral-400 pb-1 text-sm font-semibold text-neutral-900"
            >
              View all concepts
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600">
            These images are illustrative concept directions, not a record of
            completed client projects.
          </p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectConcepts.map((project) => (
              <article key={project.title} className="bg-white">
                <div className="relative aspect-4/3 overflow-hidden bg-neutral-200">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#a97655]">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-xl font-medium text-neutral-900">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
              How we work
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-5xl">
              Clear steps. Thoughtful decisions.
            </h2>
            <p className="mt-5 leading-7 text-neutral-600">
              A practical process helps keep your brief, budget, and build
              working together.
            </p>
            <Link
              href="/services"
              className="mt-7 inline-flex border-b border-[#a97655] pb-1 text-sm font-semibold"
            >
              See how we can help
            </Link>
          </div>
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5"
              >
                <span className="text-sm font-semibold text-[#a97655]">
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">
                    {principle.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-600">
                    {principle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#29251f] px-6 py-16 text-white sm:px-10 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a17f]">
              Ready when you are
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              Let&apos;s make a plan for your space.
            </h2>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex min-h-12 w-fit items-center bg-white px-6 text-sm font-semibold text-neutral-900"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
