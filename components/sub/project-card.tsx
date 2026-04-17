import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tags?: readonly string[];
};

const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  AWS: { bg: "bg-orange-500/15", text: "text-orange-300", border: "border-orange-500/30" },
  MERN: { bg: "bg-cyan-500/15", text: "text-cyan-300", border: "border-cyan-500/30" },
  DSA: { bg: "bg-purple-500/15", text: "text-purple-300", border: "border-purple-500/30" },
  "AI/ML": { bg: "bg-green-500/15", text: "text-green-300", border: "border-green-500/30" },
  Next: { bg: "bg-white/10", text: "text-gray-200", border: "border-white/20" },
  React: { bg: "bg-cyan-500/15", text: "text-cyan-300", border: "border-cyan-500/30" },
  Node: { bg: "bg-green-500/15", text: "text-green-300", border: "border-green-500/30" },
  TypeScript: { bg: "bg-blue-500/15", text: "text-blue-300", border: "border-blue-500/30" },
};

function tagStyle(tag: string) {
  return TAG_COLORS[tag] ?? { bg: "bg-purple-500/15", text: "text-purple-300", border: "border-purple-500/30" };
}

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  tags,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[#2A0E61] bg-[#0a0616]/80 shadow-lg hover:border-purple-500/60 hover:shadow-purple-900/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image container with overlay on hover */}
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={src}
          alt={title}
          width={600}
          height={338}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-[#030014]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
          <span className="flex items-center gap-1.5 text-white text-sm font-semibold bg-purple-600/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => {
              const s = tagStyle(tag);
              return (
                <span
                  key={tag}
                  className={`px-2 py-0.5 text-[11px] font-semibold rounded-full border ${s.bg} ${s.text} ${s.border}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        )}

        <h2 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {title}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
      </div>
    </Link>
  );
};
