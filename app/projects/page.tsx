import Image from "next/image";
import Link from "next/link";

const concepts = [
  {
    title: "Soft modern living",
    type: "Living area",
    description:
      "A calm palette, generous seating, and tactile finishes create a relaxed centre for everyday life.",
    image: "/images/services/luxe.jpg",
    alt: "Softly lit modern living room",
    number: "01",
  },
  {
    title: "A home that gathers",
    type: "Residential interior",
    description:
      "An inviting direction that brings natural tones and comfortable proportions into balance.",
    image: "/images/services/dream-haven.jpg",
    alt: "Warm contemporary residential interior",
    number: "02",
  },
  {
    title: "Warmth in the details",
    type: "Material palette",
    description:
      "Layered finishes and subtle contrast give a simple interior depth and character.",
    image: "/images/services/our-services.jpg",
    alt: "Interior material palette and thoughtful detailing",
    number: "03",
  },
  {
    title: "A fresh perspective",
    type: "Home renovation",
    description:
      "A brighter, more connected approach to the rooms where daily routines unfold.",
    image: "/assets/villa-hero-1.jpg",
    alt: "Contemporary home interior with a bright, open feel",
    number: "04",
  },
];

export default function Projects() {
  return (
    <div>
      <section className="bg-[#f5f2ed]">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-12 sm:px-10 sm:pb-20 sm:pt-16 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
            Project directions
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12">
            <h1 className="max-w-3xl text-5xl font-medium leading-[1.08] tracking-tight text-neutral-900 sm:text-6xl">
              Spaces shaped around real life.
            </h1>
            <p className="max-w-xl leading-7 text-neutral-600">
              A collection of illustrative design directions for the kinds of
              spaces DEZ can help bring to life. These are sample concepts, not
              completed client projects.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-20 lg:px-12">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {concepts.map((concept) => (
            <article key={concept.number}>
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <Image
                  src={concept.image}
                  alt={concept.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a97655]">
                    {concept.type} · Concept
                  </p>
                  <h2 className="mt-2 text-2xl font-medium tracking-tight text-neutral-900">
                    {concept.title}
                  </h2>
                </div>
                <span className="pt-1 text-sm text-neutral-400">
                  {concept.number}
                </span>
              </div>
              <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-600">
                {concept.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#29251f] px-6 py-16 text-white sm:px-10 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a17f]">
              Made for your space
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              Your project deserves its own point of view.
            </h2>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex min-h-12 w-fit items-center bg-white px-6 text-sm font-semibold text-neutral-900"
          >
            Share your brief
          </Link>
        </div>
      </section>
    </div>
  );
}
