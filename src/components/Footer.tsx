import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const iconClass = `
    group relative flex h-11 w-11 items-center justify-center
    overflow-hidden rounded-full
    border border-[var(--border)]
    bg-white/[0.035]
    text-[var(--muted)]
    backdrop-blur-xl
    shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
    transition-all duration-300
    hover:-translate-y-1
    hover:border-[var(--accent)]/35
    hover:bg-[var(--accent)]/10
    hover:text-[var(--accent)]
    hover:shadow-[0_0_22px_rgba(155,138,251,0.14)]
  `;

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="flex flex-col gap-8">
          {/* Top */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-[var(--foreground)] transition-opacity hover:opacity-70"
            >
              xen.
            </a>

            <p className="text-sm text-[var(--muted)] opacity-70">
              Building, learning, and exploring through code.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/xeniumhs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconClass}
            >
              <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <FaGithub size={21} />
            </a>

            <a
              href="https://linkedin.com/in/xeniumhs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconClass}
            >
              <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://youtube.com/@thexenjourney"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={iconClass}
            >
              <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <FaYoutube size={20} />
            </a>
            <a
              href="https://instagram.com/xeniumhs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={iconClass}
            >
              <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <FaInstagram size={20} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=xeniumsuwal1234@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className={iconClass}
            >
              <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <FiMail size={20} />
            </a>

            <a href="#home" aria-label="Back to top" className={iconClass}>
              <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <FiArrowUp size={19} />
            </a>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} xen.</p>
            <p>Built with Next.js &amp; TypeScript.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
