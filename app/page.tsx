import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      {/* Hero section */}
      <section className="relative h-screen w-full">
        <Image
          src="/assets/villa-hero-1.jpg"
          alt="DEZ construction project"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
          <h1 className="text-5xl font-bold">A Better Space Starts Here.</h1>
          <p className="mt-4 text-lg lg:w-4xl">
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

      <section className="flex justify-center items-center py-40 px-20">
        <div className="max-w-5xl flex gap-12">
          {/* Meet Dez */}
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-[#AF7B5B] font-semibold">
              Meet Dez Construction & Renovation
            </span>

            <div className="mt-4">
              <p className="text-5xl italic">Influential</p>
              <p className="text-5xl font-semibold">and Impactful.</p>
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
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative h-full w-full">
              <Image
                src="/assets/house-frame.png"
                alt="House Frame"
                fill
                className="object-contain scale-150"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-sm text-[#444] font-semibold">Helps Almost</p>

              <p className="text-9xl text-[#444] font-bold mt-2">11,264</p>

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
