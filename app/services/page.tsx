import Accordion from "@/components/ui/Accordion";
import Image from "next/image";

const services = [
  {
    title: "Residential Renovation",
    content:
      "We help transform residential spaces through renovation work tailored to your property, requirements, and budget.",
  },
  {
    title: "Interior Design & Space Planning",
    content:
      "We help plan functional, comfortable spaces with thoughtful layouts, material choices, and design details.",
  },
  {
    title: "Construction & Project Management",
    content:
      "From project coordination to execution, we help keep construction work organised and aligned with the agreed scope.",
  },
  {
    title: "Repair & Maintenance",
    content:
      "We provide repair and maintenance solutions to help keep your property functional and well maintained.",
  },
];

export default function Services() {
  return (
    <div className="relative w-full h-full">
      {/* Hero section */}
      <section className="relative h-[calc(100svh-5rem)] w-full lg:h-screen">
        <Image
          src="/images/services/hero.jpg"
          alt="Services hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-center px-6 text-white sm:px-10">
          <div className="bg-[#AF7B5B] w-fit px-4 rounded-full">
            <p className="uppercase text-white font-bold text-sm">
              Our Services
            </p>
          </div>

          <div className="flex flex-col mt-8">
            <h2 className="font-dancing text-5xl font-semibold sm:text-6xl md:text-8xl lg:text-9xl">
              Influential
            </h2>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl lg:text-8xl">
              and impactful
            </h1>
          </div>
        </div>
      </section>

      {/* Our Services Overview Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Text */}
          <div className="flex flex-col">
            <div className="mb-5 w-fit rounded-full bg-[#F0EAE5] px-4 py-2">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#AF7B5B]">
                What We Do
              </p>
            </div>

            <h2 className="font-playfair text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
              Our Services
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-neutral-600">
              From thoughtful renovations to complete project coordination, we
              help bring your ideas to life through considered planning and
              quality workmanship.
            </p>

            <div className="mt-8">
              <Accordion items={services} />
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-100 md:aspect-4/5">
            <Image
              src="/images/services/dream-haven.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              alt="Contemporary residential interior with considered materials and finishes"
            />
          </div>
        </div>
      </section>

      {/* Section: Service 1 */}
      {/* Section: Service 2 */}
      {/* Section: Service 3 */}
      {/* Section: Service 4 */}
    </div>
  );
}
