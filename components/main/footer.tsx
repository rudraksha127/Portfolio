import Link from "next/link";

const QUICK_LINKS = [
  { label: "About", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Cloud AWS", href: "#cloud-aws" },
  { label: "Algorithms", href: "#dsa-visualizer" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/rudraksha127", icon: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rudraksh-udiya", icon: "LI" },
  { label: "Twitter / X", href: "https://twitter.com/rudraksha127", icon: "X" },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-[#2A0E61]/60 bg-[#030014] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white font-bold text-xl">Rudraksh Udiya</h2>
            <p className="text-sm leading-relaxed">
              AWS Certified Data Engineer · Full Stack MERN Developer · DSA practitioner · AI/ML enthusiast.
              Building at the intersection of cloud, code, and intelligence.
            </p>
            <p className="text-xs text-gray-600">Indore, Madhya Pradesh, India</p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
              Navigate
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-purple-400 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
              Connect
            </h3>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
                  >
                    <span className="inline-flex w-6 h-6 items-center justify-center rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold shrink-0">
                      {icon}
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:rudraksha127@gmail.com"
                  className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
                >
                  <span className="inline-flex w-6 h-6 items-center justify-center rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold shrink-0">
                    @
                  </span>
                  rudraksha127@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#2A0E61]/40 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Rudraksh Udiya. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <span className="text-purple-400">Next.js 16</span> ·{" "}
            <span className="text-cyan-400">React 19</span> ·{" "}
            <span className="text-orange-400">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

