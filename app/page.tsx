import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      {/* Hero section */}
      <section className="relative h-[calc(100svh-5rem)] w-full lg:h-screen">
        <Image
          src="/assets/villa-hero-1.jpg"
          alt="DEZ construction project"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white sm:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            A Better Space Starts Here.
          </h1>
          <p className="mt-4 max-w-3xl text-base sm:text-lg">
            Every home has a story. We help you shape yours with thoughtful
            renovations, reliable workmanship, and spaces designed around the
            way you live.
          </p>

          <Link
            href="/contact-us"
            className="mt-8 bg-white rounded-md py-3 px-6"
          >
            <p className="text-black text-sm font-semibold">
              Let's Build Together
            </p>
          </Link>
        </div>
      </section>

      <section className="flex items-center justify-center px-6 py-20 sm:px-10 md:px-12 md:py-40 lg:px-20">
        <div className="flex w-full max-w-5xl flex-col gap-10 md:flex-row md:gap-12">
          {/* Meet Dez */}
          <div className="flex flex-1 flex-col justify-center">
            <span className="text-[#AF7B5B] font-semibold">
              Meet Dez Construction & Renovation
            </span>

            <div className="mt-4">
              <p className="text-4xl italic sm:text-5xl">Influential</p>
              <p className="text-4xl font-semibold sm:text-5xl">
                and Impactful.
              </p>
            </div>

            <p className="font-medium text-gray-500 mt-6">
              Through a unique combination of engineering, construction and
              design disciplines and expertise, delivers{" "}
              <span className="font-semibold text-gray-800">
                world class infrastructure
              </span>{" "}
              solutions to customers and stakeholders across a broad range of
              industry sectors.
            </p>
          </div>

          {/* Image */}
          <div className="relative flex aspect-square w-full flex-1 items-center justify-center overflow-hidden md:aspect-auto md:min-h-96">
            <div className="absolute inset-0">
              <Image
                src="/assets/house-frame.png"
                alt="House Frame"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="scale-100 object-contain md:scale-150"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-sm text-[#444] font-semibold">Helps Almost</p>

              <p className="mt-2 text-6xl font-bold text-[#444] sm:text-7xl md:text-8xl lg:text-9xl">
                11,264
              </p>

              <p className="text-sm text-[#444] font-semibold mt-4">
                Home owner
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
