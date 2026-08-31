export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
            Software Developer
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I'm
            <span className="block text-gray-400">Xenium.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            I build modern web applications and explore the intersection of
            software development, AI, and technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
    </section>
  );
}
