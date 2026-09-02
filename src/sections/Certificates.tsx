"use client";

import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section
      id="certificates"
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
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            Certificates
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Things I&apos;ve learned.
          </h2>

          <p className="mt-6 text-base leading-7 text-[var(--muted)] sm:text-lg">
            A collection of certifications and courses that reflect my technical
            learning, development journey, and continuous growth.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificateCard({
  certificate,
  index,
}: {
  certificate: (typeof certificates)[number];
  index: number;
}) {
  const Icon = certificate.icon;

  return (
    <article
      className="
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
      "
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

      {/* Certificate Placeholder */}
      <div className="relative">
        <div
          className="
            relative flex aspect-[16/9] w-full
            items-center justify-center
            overflow-hidden
            bg-[var(--accent)]
          "
        >
          {/* Grid */}
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

          {/* Glass Icon Container */}
          <div
            className="
              relative flex aspect-[16/9] w-full
              items-center justify-center
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

        {/* Certificate Number */}
        <span className="absolute left-4 top-4 text-xs font-medium text-white/80 drop-shadow-lg">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
          {certificate.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--muted)]">
          {certificate.issuer}
        </p>

        {/* Bottom Actions */}
        <div className="mt-auto flex items-center justify-between pt-7">
          {/* Date */}
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-[var(--border)]
              bg-white/[0.03]
              px-3 py-2
              text-xs font-medium
              text-[var(--muted)]
              backdrop-blur-md
            "
          >
            <FiCalendar size={14} />
            {certificate.date}
          </span>

          {/* View Certificate */}
          <a
            href={certificate.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${certificate.title}`}
            title="View certificate"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              border border-[var(--border)]
              bg-white/[0.03]
              text-[var(--muted)]
              backdrop-blur-md
              transition-all duration-300

              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
              hover:shadow-[0_0_18px_rgba(155,138,251,0.20)]
            "
          >
            <FiArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
