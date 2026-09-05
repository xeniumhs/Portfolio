import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--foreground)] transition-opacity hover:opacity-70"
        >
          xen.
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {/* <a
            href="#home"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Home
          </a> */}

          <Link
            href="/#projects"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Skills
          </Link>
          <Link
            href="/#certificates"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Certificates
          </Link>
          <Link
            href="/#about"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* <Link
            href="/timer"
            className="hidden rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] px-4 py-2 text-sm font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)]/[0.15] sm:inline-flex"
          >
            Timer
          </Link> */}

          <Link
            href="/#contact"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-all hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </nav>
    </header>
  );
}
