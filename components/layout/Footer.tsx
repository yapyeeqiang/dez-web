"use client";

import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#171714] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="DEZ Construction & Renovation home"
              className="inline-block"
            >
              <div className="relative h-40 w-40 overflow-hidden">
                <Image
                  src="/assets/dez-logo.png"
                  alt="DEZ Construction & Renovation"
                  fill
                  className="object-contain scale-200 -ml-10"
                  priority
                />
              </div>
            </Link>

            <p className="mt-2 max-w-md text-sm leading-7 text-white/60">
              Thoughtfully built. Beautifully lived. We bring spaces to life
              through considered craftsmanship and a commitment to quality.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#C6A15B] transition-colors hover:text-white"
            >
              Start your project
              <span aria-hidden="true" className="font-sans">
                ↗︎
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Explore
            </h2>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#C6A15B]"
                  >
                    {item.label}
                    <span aria-hidden="true" className="font-sans text-xs">
                      ↗︎
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Get in Touch
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Have a space in mind? Let's discuss how we can bring your vision
              to life.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[#C6A15B]"
            >
              Contact our team
              <span aria-hidden="true" className="font-sans">
                ↗︎
              </span>
            </Link>

            {/* Add verified business details when available */}

            <p className="mt-6 text-sm text-white/60">
              Email: hello@yourdomain.com
            </p>
            <p className="mt-2 text-sm text-white/60">
              Phone: +60 XX-XXXX XXXX
            </p>
          </div>
        </div>

        {/* Gold divider */}
        <div className="mt-16 h-px bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © 2026 DEZ Construction & Renovation. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-white/40">
            Built with purpose. Made to last.
          </p>
        </div>
      </div>
    </footer>
  );
}
