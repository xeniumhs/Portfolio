export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)] px-6 pt-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main ambient glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/[0.07] blur-3xl" />

        {/* Small secondary glow */}
        <div className="absolute right-[10%] top-[20%] h-[250px] w-[250px] rounded-full bg-[var(--accent)]/[0.05] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          {/* Label */}
          <div className="mb-8 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)] sm:text-sm">
              Full-Stack Developer • AI/ML Enthusiast
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-[var(--muted)]">Hi, I&apos;m</span>

            <span className="mt-3 block text-[var(--foreground)]">
              Xenium<span className="text-[var(--accent)]">.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-7 text-2xl font-medium tracking-tight text-[var(--foreground)]/80 sm:text-3xl md:text-4xl">
            I build things for the web &amp; beyond.
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I build full-stack applications with MERN, Django, React, and
            Python, while exploring artificial intelligence, machine learning,
            and emerging technologies.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-all hover:brightness-110"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] px-7 py-3.5 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.06]"
            >
              Get In Touch
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-wider text-[var(--muted)] opacity-60 sm:text-sm">
            <span>MERN</span>
            <span className="opacity-40">•</span>
            <span>Django</span>
            <span className="opacity-40">•</span>
            <span>React</span>
            <span className="opacity-40">•</span>
            <span>Python</span>
            <span className="opacity-40">•</span>
            <span className="text-[var(--accent)] opacity-100">AI/ML</span>
          </div>
        </div>
      </div>
    </section>
  );
}
