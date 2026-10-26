import Image from "next/image";
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Respect for the space",
    description:
      "We look for what is already working, then shape the home around your real needs and routines.",
  },
  {
    number: "02",
    title: "Care in the details",
    description:
      "Materials, proportions, and practical decisions all contribute to a home that feels considered.",
  },
  {
    number: "03",
    title: "Clarity throughout",
    description:
      "Straightforward conversations and a well-defined scope help everyone move forward with confidence.",
  },
];

export default function AboutUs() {
  return (
    <div>
      <section className="relative flex min-h-88 items-end overflow-hidden bg-neutral-900 sm:min-h-112">
        <Image
          src="/images/services/our-services.jpg"
          alt="A thoughtfully finished contemporary interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/65 to-black/15" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-24 text-white sm:px-10 sm:pb-16 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            About DEZ
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Good spaces begin with understanding.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-24 lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
            Who we are
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl">
            Design-minded builders, focused on spaces that work well.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-7 text-neutral-600">
          <p>
            DEZ Construction &amp; Renovation brings design and building
            together across residential, commercial, and industrial properties.
            We care about how a space looks, how it works, and how the decisions
            behind it come together.
          </p>
          <p>
            Whether you are planning a home renovation, a commercial refresh, or
            improvements to an industrial property, our approach starts with
            listening. From there, we help turn ideas into a considered scope
            and a clear path forward.
          </p>
          <p>
            Our work is grounded in practical planning, open communication, and
            respect for the people who will live or work in the finished space.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f2ed]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 md:items-center md:gap-16 md:py-24 lg:px-12">
          <div className="relative order-2 aspect-4/3 overflow-hidden bg-neutral-200 md:order-1">
            <Image
              src="/images/services/dream-haven.jpg"
              alt="A comfortable home interior with warm materials"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
              What matters to us
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-neutral-900">
              A thoughtful process is part of a thoughtful result.
            </h2>
            <p className="mt-5 leading-7 text-neutral-600">
              We believe the experience of improving your home should feel as
              considered as the space itself.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-24 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
            Our principles
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            The way we approach every brief.
          </h2>
        </div>
        <div className="mt-10 grid gap-8 border-t border-neutral-200 pt-8 md:grid-cols-3 md:gap-10">
          {values.map((value) => (
            <article key={value.number}>
              <p className="text-sm font-semibold text-[#a97655]">
                {value.number}
              </p>
              <h3 className="mt-4 text-xl font-medium text-neutral-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#29251f] px-6 py-16 text-white sm:px-10 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a17f]">
              Your home, your brief
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Tell us what you have in mind.
            </h2>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex min-h-12 w-fit items-center bg-white px-6 text-sm font-semibold text-neutral-900"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
