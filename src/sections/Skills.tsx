"use client";

import { useState } from "react";
import { skills } from "@/data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(skills.map((skill) => skill.category))),
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
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
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-6 text-base leading-7 text-[var(--muted)] sm:text-lg">
            A collection of technologies and tools I use to build applications,
            solve problems, and explore new ideas.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-xl transition-all duration-300 ${
                activeCategory === category
                  ? "border-[var(--accent)]/40 bg-[var(--accent-soft)] text-[var(--accent)] shadow-[0_0_20px_rgba(155,138,251,0.14)]"
                  : "border-[var(--border)]/70 bg-white/[0.025] text-[var(--muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-[var(--accent)]/20 hover:bg-white/[0.045] hover:text-[var(--accent)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-[var(--border)]
                bg-[var(--surface)]/45
                p-6
                shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_8px_30px_rgba(0,0,0,0.10)]
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[var(--accent)]/25
                hover:bg-[var(--surface-hover)]/55
                hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_40px_rgba(0,0,0,0.14),0_0_30px_rgba(155,138,251,0.12)]
              "
            >
              {/* Glass highlight */}
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="grid grid-cols-[64px_1fr] items-center gap-6">
                {/* Logo */}
                <div className="flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className={`h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105 ${
                      ["Express.js", "Next.js", "GitHub"].includes(skill.name)
                        ? "drop-shadow-[0_0_7px_rgba(156,163,175,0.55)]"
                        : ""
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {skill.name}
                    </h3>

                    <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--background)]/40 px-3 py-1 text-xs font-medium text-[var(--muted)] backdrop-blur-md">
                      {skill.category}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
