"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiImage,
  FiX,
} from "react-icons/fi";
import { FaGithub, FaYoutube } from "react-icons/fa6";

import { projects } from "@/data/projects";
import type { Project } from "@/types";

const layoutClasses = {
  wide: "lg:col-span-2",
  normal: "lg:col-span-1",
};

export default function Projects() {
  const [viewer, setViewer] = useState<{
    project: Project;
    imageIndex: number;
  } | null>(null);

  const openViewer = (project: Project, imageIndex = 0) => {
    if (project.images.length) setViewer({ project, imageIndex });
  };

  const closeViewer = () => setViewer(null);

  const nextImage = () => {
    if (!viewer) return;

    setViewer({
      ...viewer,
      imageIndex: (viewer.imageIndex + 1) % viewer.project.images.length,
    });
  };

  const previousImage = () => {
    if (!viewer) return;

    setViewer({
      ...viewer,
      imageIndex:
        (viewer.imageIndex - 1 + viewer.project.images.length) %
        viewer.project.images.length,
    });
  };

  useEffect(() => {
    if (!viewer) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeViewer();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") previousImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [viewer]);

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)] px-6 py-24 md:py-32"
      >
        {/* Atmospheric Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Main glow */}
          <div
            className="absolute left-1/2 top-[35%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--glow-strong) 0%, var(--glow-medium) 40%, transparent 70%)",
            }}
          />

          {/* Left glow */}
          <div
            className="
              absolute
              -left-[20%] top-[20%]
              h-[700px] w-[700px]
              rounded-full
              blur-[150px]
            "
            style={{
              background:
                "radial-gradient(circle, var(--glow-medium) 0%, transparent 68%)",
            }}
          />

          {/* Bottom glow */}
          <div
            className="
              absolute
              bottom-[-35%] right-[15%]
              h-[800px] w-[800px]
              rounded-full
              blur-[160px]
            "
            style={{
              background:
                "radial-gradient(circle, var(--glow-soft) 0%, transparent 65%)",
            }}
          />

          {/* Concentrated glow */}
          <div
            className="
              absolute
              right-[25%] top-[18%]
              h-[280px] w-[280px]
              rounded-full
              blur-[90px]
            "
            style={{
              background: "var(--glow-small)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
              Projects
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Things I&apos;ve built.
            </h2>

            <p className="mt-6 text-base leading-7 text-[var(--muted)] sm:text-lg">
              A collection of projects where I turn ideas into practical
              applications while exploring modern web development, AI, and
              software engineering.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpenViewer={openViewer}
                className={layoutClasses[project.layout]}
              />
            ))}
          </div>
        </div>
      </section>

      {viewer && (
        <ImageViewer
          project={viewer.project}
          imageIndex={viewer.imageIndex}
          onClose={closeViewer}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </>
  );
}


function ProjectCard({
  project,
  index,
  onOpenViewer,
  className,
}: {
  project: Project;
  index: number;
  onOpenViewer: (project: Project, imageIndex?: number) => void;
  className: string;
}) {
  const hasImages = project.images.length > 0;

  return (
    <article
      className={`
        group relative flex h-full flex-col overflow-hidden
        rounded-3xl
        border border-[var(--border)]
        bg-[var(--surface)]/45
        backdrop-blur-xl
        shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_8px_30px_rgba(0,0,0,0.10)]
        transition-all duration-300

        hover:-translate-y-1
        hover:border-[var(--accent)]/25
        hover:bg-[var(--surface-hover)]/55
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_40px_rgba(0,0,0,0.14),0_0_30px_rgba(155,138,251,0.12)]

        ${className}
      `}
    >
      {/* Glass highlight */}
      <div
        className="
          pointer-events-none absolute inset-x-6 top-0 z-20
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/15
          to-transparent
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />
      <div className="relative">
        <Placeholder project={project} />

        {/* Project Number */}
        <span className="absolute left-4 top-4 text-xs font-medium text-white/80 drop-shadow-lg">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Featured Badge */}
        {project.featured && (
          <span
            className="
        absolute bottom-4 left-4
        rounded-full
        border border-white/10
        bg-black/30
        px-3 py-1
        text-xs font-medium
        text-white
        backdrop-blur-md
      "
          >
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
            {project.title}
          </h3>

          <span
            className={`
      shrink-0
      rounded-full
      border
      px-2.5 py-1
      text-[10px]
      font-medium
      backdrop-blur-md
      ${
        project.status === "working"
          ? "border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)]"
          : "border-[var(--border)]/70 bg-white/[0.02] text-[var(--muted)]"
      }
    `}
          >
            {project.status === "working" && (
              <span className="mr-1 animate-pulse">●</span>
            )}
            {project.status === "working" ? "Work in progress" : "Completed"}
          </span>
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border border-[var(--border)]
                bg-white/[0.03]
                px-2.5 py-1
                text-[10px]
                font-medium
                text-[var(--muted)]
                backdrop-blur-md
                transition-colors
                group-hover:border-[var(--accent)]/40
              "
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {project.github && (
            <ActionLink
              href={project.github}
              primary
              icon={<FaGithub size={15} />}
              label="GitHub"
            />
          )}

          {project.demo && (
            <ActionLink
              href={project.demo}
              icon={<FiArrowUpRight size={15} />}
              label="Demo"
            />
          )}

          {project.youtube && (
            <ActionLink
              href={project.youtube}
              icon={<FaYoutube size={15} />}
              label="Video"
            />
          )}

          {hasImages && (
            <button
              type="button"
              onClick={() => onOpenViewer(project)}
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-[var(--border)]
                bg-white/[0.03]
                px-3 py-2
                text-xs font-medium
                text-[var(--muted)]
                backdrop-blur-md
                transition-all duration-300

                hover:border-[var(--accent)]
                hover:text-[var(--accent)]
                hover:shadow-[0_0_18px_rgba(155,138,251,0.20)]
              "
            >
              <FiImage size={15} />

              {project.images.length > 1
                ? `${project.images.length} Images`
                : "Image"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}


function ActionLink({
  href,
  icon,
  label,
  primary = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-2 rounded-full border px-3 py-2
        text-xs font-medium backdrop-blur-md transition-all
        ${
          primary
            ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--background)] hover:opacity-85"
            : "border-[var(--border)] bg-white/[0.03] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        }
      `}
    >
      {icon}
      {label}
    </a>
  );
}

function Placeholder({ project }: { project: Project }) {
  const Icon = project.placeholderIcon;

  return (
    <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-[var(--accent)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glassmorphism icon container */}
      <div
        className="
    group relative flex aspect-[16/9] w-full items-center justify-center
    overflow-hidden
    border-b border-[var(--border)]
    bg-[var(--surface)]/45
    backdrop-blur-xl
    shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]
    transition-all duration-300
    group-hover:bg-[var(--surface-hover)]/55
  "
      >
        <Icon
          size={68}
          strokeWidth={1.2}
          className="
            text-[var(--foreground)]
            opacity-80
            transition-all duration-300
            group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]
          "
        />
      </div>
    </div>
  );
}

function ImageViewer({
  project,
  imageIndex,
  onClose,
  onNext,
  onPrevious,
}: {
  project: Project;
  imageIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        aria-label="Close image viewer"
      >
        <FiX size={22} />
      </button>

      {project.images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-md transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:left-8"
          aria-label="Previous image"
        >
          <FiArrowLeft size={22} />
        </button>
      )}

      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={project.images[imageIndex]}
          alt={`${project.title} screenshot ${imageIndex + 1}`}
          width={1800}
          height={1100}
          priority
          className="max-h-[85vh] w-auto rounded-xl object-contain shadow-2xl"
        />

        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
          {imageIndex + 1} / {project.images.length}
        </span>
      </div>

      {project.images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-md transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:right-8"
          aria-label="Next image"
        >
          <FiArrowRight size={22} />
        </button>
      )}
    </div>
  );
}
