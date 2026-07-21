import { Link } from "react-router-dom";

import Badge from "./Badge";
import FallbackImage from "./FallbackImage";

// Compact project card used for the "cards" layout (websites / web apps / libraries).
function ProjectCard({ project }) {
  const { name, slug, label, tags = [], href, thumb, placeholder, price } =
    project;

  const card = (
    <div className="flex flex-col h-full overflow-hidden transition-all duration-300 border-2 group rounded-3xl border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 hover:-translate-y-1 hover:border-blue-400 dark:hover:border-primary hover:shadow-lg hover:shadow-accent-200/50 dark:hover:shadow-black/30">
      <FallbackImage
        src={thumb || (label ? `/static/images/work/${label}.png` : undefined)}
        alt={name}
        label={name}
        className="object-cover w-full h-40"
        wrapperClassName="w-full h-40 rounded-none border-0"
      />
      <div className="flex flex-col flex-1 gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-black text-accent-700 dark:text-accent-300">
            {name}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {price !== undefined && (
              <span
                className={`rounded-full text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 ${
                  price === 0
                    ? "bg-emerald-400/20 text-emerald-600 dark:text-emerald-400"
                    : "bg-blue-400/20 text-blue-600 dark:text-primary"
                }`}
              >
                {price === 0 ? "Free" : `$${price}`}
              </span>
            )}
            {placeholder && (
              <span className="rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                Draft
              </span>
            )}
          </div>
        </div>
        <p className="flex-1 text-sm text-accent-600 dark:text-accent-400">
          {slug}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block h-full">
        {card}
      </a>
    );
  }
  if (label) {
    return (
      <Link to={`/work/${label}`} className="block h-full">
        {card}
      </Link>
    );
  }
  return card;
}

export default ProjectCard;
