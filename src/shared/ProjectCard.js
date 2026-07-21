import { Link } from "react-router-dom";

import Badge from "./Badge";
import FallbackImage from "./FallbackImage";

// Compact project card used for the "cards" layout (websites / web apps / libraries).
function ProjectCard({ project }) {
  const { name, slug, label, tags = [], href, thumb, placeholder } = project;

  const card = (
    <div className="group h-full flex flex-col rounded-3xl border-2 border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 dark:hover:border-primary hover:shadow-lg hover:shadow-accent-200/50 dark:hover:shadow-black/30">
      <FallbackImage
        src={thumb || (label ? `/static/images/work/${label}/thumb.png` : undefined)}
        alt={name}
        label={name}
        className="w-full h-40 object-cover"
        wrapperClassName="w-full h-40 rounded-none border-0"
      />
      <div className="flex flex-col gap-2 p-5 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-black text-accent-700 dark:text-accent-300">
            {name}
          </h3>
          {placeholder && (
            <span className="shrink-0 rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
              Draft
            </span>
          )}
        </div>
        <p className="text-sm text-accent-600 dark:text-accent-400 flex-1">
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
