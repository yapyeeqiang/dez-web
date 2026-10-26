import Link from "next/link";

export default function ContactUs() {
  return (
    <div>
      <section className="bg-[#29251f] text-white">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-12 sm:px-10 sm:pb-20 sm:pt-16 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a17f]">
            Contact DEZ
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
            Let&apos;s talk about your space.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
            Tell us what you are planning, what is not working, or simply where
            you would like to begin. A little detail helps us prepare for a
            useful first conversation.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-10 sm:py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-20 lg:px-12">
        <aside>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
            Start here
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-neutral-900">
            A few details go a long way.
          </h2>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            Share the property type, your location, and what you hope to
            change. We&apos;ll use it to understand the project before we speak.
          </p>

          <div className="mt-8 border-t border-neutral-200 pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Email
            </h3>
            <Link
              href="mailto:hello@yourdomain.com"
              className="mt-2 inline-block text-base font-medium text-neutral-900 underline decoration-[#a97655] underline-offset-4"
            >
              hello@yourdomain.com
            </Link>
            <p className="mt-2 text-xs leading-5 text-neutral-500">
              Sample contact address — replace with your business inbox before
              launch.
            </p>
          </div>

          <div className="mt-7 border-t border-neutral-200 pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Typical first steps
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
              <li>Tell us about your property and what you want to improve.</li>
              <li>We discuss the scope, priorities, and next steps.</li>
              <li>We work toward a clear brief for your project.</li>
            </ul>
          </div>
        </aside>

        <div className="bg-[#f5f2ed] p-6 sm:p-9">
          <h2 className="text-2xl font-medium text-neutral-900">
            Send a project enquiry
          </h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Complete the fields below. Your email app will open with the details
            ready to send.
          </p>
          <form
            action="mailto:hello@yourdomain.com"
            method="post"
            encType="text/plain"
            className="mt-7 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-neutral-800">
                Your name
                <input
                  name="Name"
                  autoComplete="name"
                  required
                  className="mt-2 min-h-12 w-full border border-neutral-300 bg-white px-3 text-base text-neutral-900 outline-none focus:border-[#a97655]"
                />
              </label>
              <label className="block text-sm font-medium text-neutral-800">
                Email address
                <input
                  name="Email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 min-h-12 w-full border border-neutral-300 bg-white px-3 text-base text-neutral-900 outline-none focus:border-[#a97655]"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-neutral-800">
                Property type
                <select
                  name="Property type"
                  defaultValue=""
                  required
                  className="mt-2 min-h-12 w-full border border-neutral-300 bg-white px-3 text-base text-neutral-900 outline-none focus:border-[#a97655]"
                >
                  <option value="" disabled>
                    Choose a property type
                  </option>
                  <option>Residential property</option>
                  <option>Commercial property</option>
                  <option>Industrial property</option>
                  <option>Interior design and planning</option>
                  <option>Construction and project coordination</option>
                  <option>Repairs and maintenance</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-neutral-800">
                Project location
                <input
                  name="Project location"
                  autoComplete="address-level2"
                  placeholder="City or area"
                  className="mt-2 min-h-12 w-full border border-neutral-300 bg-white px-3 text-base text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#a97655]"
                />
              </label>
            </div>
            <label className="block text-sm font-medium text-neutral-800">
              Tell us a little about your project
              <textarea
                name="Project details"
                required
                rows={5}
                placeholder="What would you like to change? Is there a timeline or priority we should know about?"
                className="mt-2 w-full resize-y border border-neutral-300 bg-white px-3 py-3 text-base text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#a97655]"
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center bg-[#a97655] px-6 text-sm font-semibold text-white hover:bg-[#8e6044]"
            >
              Prepare enquiry email
            </button>
            <p className="text-xs leading-5 text-neutral-500">
              This sample form uses your device&apos;s email app and a
              placeholder DEZ address. Replace the address before publishing.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
