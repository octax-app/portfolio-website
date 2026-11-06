import { Link } from "react-router-dom";

import Badge from "./Badge";
import Icon from "./Icon";
import ProgressBar from "./ProgressBar";
import ProjectLinks from "./ProjectLinks";
import ProjectThumb from "./ProjectThumb";
import { OpenSourcePill, StatusPill } from "./StatusPill";
import { progressOf } from "../config/AppConfig";

const KIND_LABEL = {
  platform: "Product",
  mobile: "Mobile app",
  webapp: "Web app",
  website: "Website",
  library: "Library",
  community: "Community",
};

// Catalog card: preview, status, short pitch, stack, progress (if tracked) and links.
function ProjectCard({ project }) {
  const { id, name, tagline, tags = [], status, openSource, tone } = project;
  const progress = progressOf(project);
  const inProgress = (project.milestones || []).some((m) => m.state !== "done");

  return (
    <article className="clay clay-hover group relative flex h-full flex-col p-3">
      <ProjectThumb project={project} />

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill status={status} />
          {openSource && <OpenSourcePill state={openSource} />}
        </div>

        <h3 className="mt-3 text-xl font-black text-ink">
          {/* stretched link → whole card opens the detail page */}
          <Link
            to={`/work/${id}`}
            onClickCapture={() => window.scrollTo({ top: 0, left: 0 })}
            className="after:absolute after:inset-0 after:rounded-[32px] focus-visible:outline-none"
          >
            {name}
          </Link>
        </h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted">
          {KIND_LABEL[project.kind]}
        </p>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{tagline}</p>

        {inProgress && progress !== null && (
          <div className="mt-4">
            <ProgressBar value={progress} tone={tone} label="Roadmap" height="h-3" />
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
          {tags.length > 4 && <Badge>+{tags.length - 4}</Badge>}
        </div>

        <div className="relative z-10 mt-5 flex items-center justify-between gap-3">
          <ProjectLinks project={project} compact onlyPrimary />
          <span
            className={`tone-${tone} ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full clay-soft tone-text transition-transform duration-300 ease-spring group-hover:translate-x-1`}
            aria-hidden="true"
          >
            <Icon name="arrow" size={18} strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
