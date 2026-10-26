"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu when navigating to another page.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Support Escape key and prevent background scrolling.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Header */}
      <header
        className="fixed inset-x-0 top-0 z-40 border-b border-black/10 bg-white"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          {/* Replace with your company logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-neutral-950"
          >
            <Image
              src="/assets/dez-logo.png"
              alt="Dez Logo"
              width={60}
              height={60}
            />
          </Link>

          {/* Hamburger button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="side-navigation"
            className="group flex items-center gap-3 py-3 text-sm uppercase tracking-[0.18em] text-neutral-950 hover:cursor-pointer"
          >
            <span className="hidden sm:inline">Menu</span>

            <span className="flex w-7 flex-col items-end gap-1.5">
              <span className="h-px w-7 bg-current" />
              <span className="h-px w-5 bg-current" />
            </span>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 ${
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* Side drawer */}
      <aside
        id="side-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed right-0 top-0 z-60 flex h-dvh w-full max-w-120 flex-col bg-[#f5f3ee] px-7 pb-8 pt-6 sm:px-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-black/15 pb-6">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Navigation
          </span>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            tabIndex={isOpen ? 0 : -1}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 hover:cursor-pointer hover:bg-black hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-1 flex-col justify-center" aria-label="Pages">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(`${item.href}/`));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    tabIndex={isOpen ? 0 : -1}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className="group flex items-center justify-between border-b border-black/10 py-4 text-3xl font-light tracking-tight text-neutral-900 hover:text-neutral-500 sm:py-5 sm:text-4xl"
                  >
                    <span>{item.label}</span>

                    <span className="text-lg text-neutral-400 group-hover:text-neutral-900">
                      ↗
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="border-t border-black/15 pt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Have a project in mind?
          </p>

          <Link
            href="/contact-us"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex items-center gap-2 text-base font-medium text-neutral-900 underline underline-offset-4 hover:opacity-60"
          >
            Let&apos;s talk
          </Link>

          <p className="mt-8 text-xs text-neutral-500">
            © 2026 DEZ Construction & Renovation
          </p>
        </div>
      </aside>
    </>
  );
}
