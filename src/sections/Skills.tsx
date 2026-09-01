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
      className="border-t border-(--border) px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-6 text-base leading-7 text-(--muted) sm:text-lg">
            A collection of technologies and tools I use to build applications,
            solve problems, and explore new ideas.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-(--accent)/40 bg-(--accent-soft) text-foreground"
                    : "border-(--border) bg-(--surface)/40 text-(--muted) hover:border-(--accent)/30 hover:bg-(--surface) hover:text-foreground"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => {
            const needsGlow = ["Express.js", "Next.js", "GitHub"].includes(
              skill.name,
            );

            return (
              <article
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl border border-(--border) bg-(--surface)/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-(--accent)/25 hover:bg-(--surface)/70"
              >
                {/* Top Highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start gap-5">
                  {/* Logo */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-(--border) bg-(--background)/50">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      className={`h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110 ${
                        needsGlow
                          ? "drop-shadow-[0_0_7px_rgba(156,163,175,0.55)]"
                          : ""
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {skill.name}
                      </h3>

                      <span className="shrink-0 rounded-full border border-(--border) bg-(--background)/40 px-3 py-1 text-xs font-medium text-(--muted)">
                        {skill.category}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-(--muted)">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
