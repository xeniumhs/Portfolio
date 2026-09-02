import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-[var(--foreground)] transition-opacity hover:opacity-70"
        >
          xen.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {/* <a
            href="#home"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Home
          </a> */}

          
<a
            href="#projects"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Skills
          </a>
          <a
            href="#certificates"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Certificates
          </a>
<a
            href="#about"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-all hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>
    </header>
  );
}
