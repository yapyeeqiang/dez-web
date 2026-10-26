import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProjectExplorer from "@/components/projects/ProjectExplorer";
import { projectConcepts } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectConcepts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectConcepts.find((item) => item.slug === slug);

  if (!project) return { title: "Project not found | DEZ" };

  return {
    title: `${project.title} | DEZ Project Concept`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectDetailFallback />}>
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}

async function ProjectDetailContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectConcepts.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <article>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:px-10 sm:pt-14 lg:px-12">
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-neutral-700 underline decoration-[#a97655] underline-offset-4 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97655]"
        >
          <span aria-hidden="true">←</span> All project concepts
        </Link>

        <div className="mt-9 grid gap-8 pb-10 md:grid-cols-[1fr_0.55fr] md:items-end md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a97655]">
              Concept {project.number} · {project.location}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-medium leading-[1.03] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900">
              {project.concept}
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {project.introduction}
            </p>
          </div>
        </div>
        <p className="mb-5 inline-flex items-center gap-2 border border-[#a97655]/40 bg-[#f5f2ed] px-3 py-2 text-xs font-medium text-neutral-700">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#a97655]" />
          Illustrative concept · Not a completed client project
        </p>
      </div>

      <ProjectExplorer project={project} />

      <section className="bg-[#29251f] px-6 py-16 text-white sm:px-10 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a17f]">
              Your space, your story
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Have a different vision in mind?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
              Let&apos;s talk about what would make your own property feel
              right.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex min-h-12 w-fit shrink-0 items-center bg-white px-6 text-sm font-semibold text-neutral-900 hover:bg-[#f4f0e9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </article>
  );
}

function ProjectDetailFallback() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading project concept"
      className="mx-auto max-w-7xl animate-pulse px-6 pb-8 pt-10 sm:px-10 sm:pt-14 lg:px-12 motion-reduce:animate-none"
    >
      <div className="h-5 w-36 bg-neutral-200" />
      <div className="mt-9 h-14 max-w-2xl bg-neutral-200 sm:h-20" />
      <div className="mt-4 h-5 max-w-xl bg-neutral-100" />
      <div className="mt-8 aspect-[4/3] bg-neutral-100 sm:aspect-[16/8]" />
    </div>
  );
}
