"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectConcept } from "@/lib/projects";

export default function ProjectExplorer({
  project,
}: {
  project: ProjectConcept;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeLens, setActiveLens] = useState(0);
  const lens = project.lenses[activeLens];

  return (
    <div>
      <section
        aria-label={`${project.title} concept image gallery`}
        className="mx-auto max-w-360 px-6 pb-16 sm:px-10 lg:px-16"
      >
        <div className="relative aspect-4/3 overflow-hidden bg-[#e7e1d8] sm:aspect-16/8">
          <Image
            key={project.gallery[activeImage].src}
            src={project.gallery[activeImage].src}
            alt={project.gallery[activeImage].alt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-black/60 to-transparent px-5 pb-5 pt-16 text-white sm:px-8 sm:pb-7">
            <p className="max-w-sm text-sm leading-6 text-white/85">
              Concept imagery for visual direction. Final selections depend on
              your property and brief.
            </p>
            <span className="shrink-0 text-sm tabular-nums">
              {String(activeImage + 1).padStart(2, "0")}{" "}
              <span className="text-white/60">
                / {String(project.gallery.length).padStart(2, "0")}
              </span>
            </span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:mt-5 sm:gap-4">
          {project.gallery.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Show image ${index + 1}: ${image.alt}`}
              aria-pressed={activeImage === index}
              className={`group relative aspect-4/3 overflow-hidden bg-[#e7e1d8] outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#a97655] ${
                activeImage === index
                  ? "ring-2 ring-[#a97655] ring-offset-2"
                  : ""
              }`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(max-width: 640px) 30vw, 28vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
              />
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f2ed]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
              Explore the direction
            </p>
            <h2 className="mt-4 max-w-md font-serif text-4xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-5xl">
              A good concept has more than one layer.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-neutral-600">
              Switch between the details that shape the feel of this space.
              Treat each as a starting point for your own project.
            </p>
          </div>

          <div>
            <div
              role="group"
              aria-label="Explore concept details"
              className="flex flex-wrap gap-2 border-b border-neutral-300"
            >
              {project.lenses.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  aria-pressed={activeLens === index}
                  onClick={() => setActiveLens(index)}
                  className={`min-h-12 border-b-2 px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a97655] motion-reduce:transition-none ${
                    activeLens === index
                      ? "border-[#a97655] text-neutral-950"
                      : "border-transparent text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div
              aria-live="polite"
              aria-atomic="true"
              className="min-h-64 pt-7"
            >
              <h3 className="font-serif text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
                {lens.title}
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-neutral-600">
                {lens.description}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {lens.details.map((detail) => (
                  <li
                    key={detail}
                    className="border border-neutral-300 bg-white/70 px-3 py-2 text-xs text-neutral-700"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
