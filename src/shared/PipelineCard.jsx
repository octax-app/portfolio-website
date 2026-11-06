import { Link } from "react-router-dom";

import Icon from "./Icon";
import ProgressBar from "./ProgressBar";
import ProjectLinks from "./ProjectLinks";
import { OpenSourcePill, StatusPill } from "./StatusPill";
import { progressOf } from "../config/AppConfig";

function MilestoneDot({ state }) {
  if (state === "done") {
    return (
      <span className="tone-bg flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white shadow-[inset_0_-3px_6px_rgba(0,0,0,.18),inset_0_3px_6px_rgba(255,255,255,.4)]">
        <Icon name="check" size={15} strokeWidth={3} />
      </span>
    );
  }
  if (state === "active") {
    return (
      <span className="clay-soft flex h-7 w-7 shrink-0 items-center justify-center !rounded-full">
        <span className="tone-bg pulse-dot h-3 w-3 rounded-full" />
      </span>
    );
  }
  return <span className="clay-inset h-7 w-7 shrink-0 rounded-full" />;
}

// Progress-tracking card: header, % complete, milestone checklist, demo links.
function PipelineCard({ project, compact = false }) {
  const { id, name, tagline, tone, status, openSource, milestones = [] } = project;
  const progress = progressOf(project);
  const done = milestones.filter((m) => m.state === "done").length;
  const next = milestones.find((m) => m.state === "active");
  const shown = compact ? milestones.slice(0, 5) : milestones;

  const icon = project.image ? (
    <img
      src={`/static/images/work/${project.image}`}
      alt=""
      className="h-14 w-14 rounded-[18px] shadow-lg"
    />
  ) : (
    <span className="clay-tone flex h-14 w-14 items-center justify-center !rounded-[18px]">
      <Icon name={project.icon || "sparkle"} size={28} strokeWidth={2.2} />
    </span>
  );

  return (
    <article className={`tone-${tone} clay flex h-full flex-col p-6 md:p-7`}>
      <div className="flex items-start gap-4">
        {icon}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <StatusPill status={status} />
            {openSource && <OpenSourcePill state={openSource} />}
          </div>
          <h3 className="mt-2 text-2xl font-black text-ink">{name}</h3>
        </div>
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-muted">{tagline}</p>

      <div className="mt-5">
        <ProgressBar
          value={progress}
          tone={tone}
          label={`${done} of ${milestones.length} milestones`}
        />
        {next && (
          <p className="mt-2 text-sm text-muted">
            <span className="font-bold tone-text">Now: </span>
            {next.title}
          </p>
        )}
      </div>

      <ol className="mt-5 flex-1 space-y-3">
        {shown.map((m) => (
          <li key={m.title} className="flex items-center gap-3">
            <MilestoneDot state={m.state} />
            <span
              className={`text-[15px] ${
                m.state === "todo" ? "text-muted" : "font-semibold text-ink"
              }`}
            >
              {m.title}
              {m.note && <span className="ml-1.5 text-sm font-normal text-muted">· {m.note}</span>}
            </span>
          </li>
        ))}
        {compact && milestones.length > shown.length && (
          <li className="pl-10 text-sm font-semibold text-muted">
            +{milestones.length - shown.length} more
          </li>
        )}
      </ol>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <ProjectLinks project={project} compact />
        <Link
          to={`/work/${id}`}
          onClickCapture={() => window.scrollTo({ top: 0, left: 0 })}
          className="ml-auto inline-flex items-center gap-1 text-sm font-bold tone-text hover:underline"
        >
          Details <Icon name="arrow" size={16} strokeWidth={2.5} />
        </Link>
      </div>
    </article>
  );
}

export default PipelineCard;
