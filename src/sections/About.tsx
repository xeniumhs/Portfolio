"use client";

import { useRef } from "react";
import { FiMapPin, FiCode, FiCpu } from "react-icons/fi";

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (y / rect.height - 0.5) * -12;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;
  };

  return (
    <section
      id="about"
      className="border-t border-[var(--border)] bg-[var(--section)] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            A little about me.
          </h2>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* 3D Info Card */}
          <div className="relative" style={{ perspective: "1000px" }}>
            {/* Lavender atmosphere */}
            <div
              className="pointer-events-none absolute -inset-10 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, var(--glow-soft) 20%, transparent 70%)",
              }}
            />

            {/* Floating code element */}
            <div
              className="absolute -left-5 top-16 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]/80 font-mono text-sm text-[var(--accent)] shadow-lg backdrop-blur-xl"
              style={{
                animation: "float 4s ease-in-out infinite",
              }}
            >
              {"</>"}
            </div>

            {/* Floating AI element */}
            <div
              className="absolute -right-5 bottom-24 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/80 text-[10px] font-semibold text-[var(--accent)] shadow-lg backdrop-blur-xl"
              style={{
                animation: "float 5s ease-in-out infinite 0.6s",
              }}
            >
              AI
            </div>

            {/* Floating dot */}
            <div
              className="absolute -right-2 top-10 z-20 h-2 w-2 rounded-full bg-[var(--accent)]"
              style={{
                boxShadow: "0 0 18px var(--accent)",
                animation: "float 3s ease-in-out infinite",
              }}
            />

            {/* Main card */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 backdrop-blur-xl transition-transform duration-200 ease-out"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Background X */}
              <div
                className="pointer-events-none absolute -right-8 -top-12 select-none text-[180px] font-black leading-none text-[var(--accent)] opacity-[0.035]"
                style={{
                  transform: "translateZ(20px)",
                }}
              >
                X
              </div>

              {/* Decorative grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Top glass highlight */}
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              {/* Card content */}
              <div
                className="relative flex h-full flex-col"
                style={{
                  transform: "translateZ(35px)",
                }}
              >
                {/* Logo */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
                      xen<span className="text-[var(--accent)]">.</span>
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      Portfolio
                    </p>
                  </div>

                  {/* Small status */}
                  <div className="flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                      style={{
                        boxShadow: "0 0 10px var(--accent)",
                      }}
                    />

                    <span className="text-[10px] text-[var(--muted)]">
                      Active
                    </span>
                  </div>
                </div>

                {/* Education */}
                <div className="mt-10">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Education
                  </p>

                  <h3 className="mt-3 max-w-[240px] text-2xl font-semibold leading-tight tracking-tight text-[var(--foreground)]">
                    Computer
                    <br />
                    Engineering
                  </h3>

                  <div className="mt-4 inline-flex items-center rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/5 px-3 py-1.5">
                    <span className="text-xs font-medium text-[var(--accent)]">
                      Currently · 7th Semester
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)]">
                    <FiMapPin size={15} className="text-[var(--accent)]" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      Based in
                    </p>

                    <p className="mt-0.5 text-sm font-medium text-[var(--foreground)]">
                      Nepal
                    </p>
                  </div>
                </div>

                {/* Focus */}
                <div className="mt-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Focus
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {/* Full Stack */}
                    <div className="group rounded-2xl border border-[var(--border)] p-3 transition-colors duration-300 hover:border-[var(--accent)]/30">
                      <FiCode
                        size={18}
                        className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-110"
                      />

                      <p className="mt-3 text-xs font-medium text-[var(--foreground)]">
                        Full-Stack
                      </p>

                      <p className="mt-1 text-[9px] text-[var(--muted)]">
                        Web Development
                      </p>
                    </div>

                    {/* AI / ML */}
                    <div className="group rounded-2xl border border-[var(--border)] p-3 transition-colors duration-300 hover:border-[var(--accent)]/30">
                      <FiCpu
                        size={18}
                        className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-110"
                      />

                      <p className="mt-3 text-xs font-medium text-[var(--foreground)]">
                        AI / ML
                      </p>

                      <p className="mt-1 text-[9px] text-[var(--muted)]">
                        Exploring
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    2026
                  </p>

                  <p className="text-xs text-[var(--muted)]">
                    Learning · Building · Exploring
                  </p>
                </div>
              </div>
            </div>

            {/* Float animation */}
            <style jsx>{`
              @keyframes float {
                0%,
                100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-9px);
                }
              }
            `}</style>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl">
              Developer focused on building, learning, and solving real-world
              problems.
            </h3>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg text-justify ">
              <p >
                I&apos;m a developer who enjoys turning ideas into practical,
                well-built software. I&apos;m particularly interested in
                understanding how things work and creating solutions that are
                both useful and thoughtfully designed.
              </p>

              <p>
                My interests span full-stack web development, artificial
                intelligence, and machine learning. I enjoy working across the
                stack and exploring how different technologies come together to
                build complete applications.
              </p>

              <p>
                Beyond writing code, I&apos;m focused on continuous learning and
                strengthening my problem-solving skills through hands-on
                projects, experimentation, and building things from the ground
                up.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-12 grid grid-cols-2 gap-y-8 border-t border-[var(--border)] pt-8 sm:grid-cols-3">
              <div className="group">
                <p className="text-xl font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  MERN
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-[var(--muted)]">
                  Full Stack
                </p>
              </div>

              <div className="group">
                <p className="text-xl font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  Python
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-[var(--muted)]">
                  Backend / AI
                </p>
              </div>

              <div className="group">
                <p className="text-xl font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  AI/ML
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-[var(--muted)]">
                  Exploring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
