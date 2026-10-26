import Link from "next/link";
import Image from "next/image";
import { projectConcepts } from "@/lib/projects";

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
          {projectConcepts.map((concept) => (
            <article key={concept.slug}>
              <Link
                href={`/projects/${concept.slug}`}
                className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97655]"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-neutral-200">
                  <Image
                    src={concept.image}
                    alt={concept.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a97655]">
                      {concept.type} · Illustrative concept
                    </p>
                    <h2 className="mt-2 text-2xl font-medium tracking-tight text-neutral-900 transition-colors duration-300 ease-out group-hover:text-[#8e6044] motion-reduce:transition-none">
                      {concept.title}
                    </h2>
                  </div>
                  <span className="pt-1 text-sm text-neutral-400">
                    {concept.number}
                  </span>
                </div>
              </Link>
              <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-600">
                {concept.description}
              </p>
              <Link
                href={`/projects/${concept.slug}`}
                className="mt-4 inline-flex min-h-10 items-center text-sm font-semibold text-neutral-900 underline decoration-[#a97655] underline-offset-4 hover:text-[#8e6044] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97655]"
              >
                Explore this concept{" "}
                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
              </Link>
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
