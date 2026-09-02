import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const links = [
    {
      name: "Email",
      href: "mailto:xeniumsuwal1234@gmail.com",
      icon: <FiMail size={20} />,
    },
    {
      name: "GitHub",
      href: "https://github.com/xeniumhs",
      icon: <FaGithub size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/xeniumhs",
      icon: <FaLinkedinIn size={19} />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
              Contact
          </p>

            <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Have something in mind?
              <span className="block text-[var(--muted)]">
                Let&apos;s build it.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg">
              I&apos;m open to collaborations, freelance projects, internships,
              and interesting opportunities. Feel free to reach out.
            </p>
          </div>

          {/* Right */}
          <div>
            <div className="border-t border-[var(--border)]">
              {links.map((link) => {
                const isEmail = link.name === "Email";

                return (
                  <a
                    key={link.name}
                    href={
                      isEmail
                        ? "https://mail.google.com/mail/?view=cm&fs=1&to=xeniumsuwal1234@gmail.com"
                        : link.href
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="group flex items-center justify-between border-b border-[var(--border)] py-6 transition-opacity duration-300 hover:opacity-60"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--foreground)]">
                        {link.icon}
                      </span>

                      <span className="text-base font-medium text-[var(--foreground)]">
                        {link.name}
                      </span>
                    </div>

                    <FiArrowUpRight
                      size={19}
                      className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--foreground)]"
                    />
                  </a>
                );
              })}
            </div>

            {/* Primary CTA */}
            <div className="mt-10">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=xeniumsuwal1234@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send me an email"
                className="group inline-flex items-center gap-4 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
              >
                Send me an email
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[var(--foreground)]">
                  <FiArrowUpRight size={18} />
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
