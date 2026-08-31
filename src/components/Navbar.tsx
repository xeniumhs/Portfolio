export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight text-white">
          xen.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#education"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Education
          </a>

          <a
            href="#experience"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
}
