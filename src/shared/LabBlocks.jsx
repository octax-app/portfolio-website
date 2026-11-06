import { Link } from "react-router-dom";

import Icon, { GithubGlyph } from "./Icon";
import Reveal from "./Reveal";
import { OpenSourcePill } from "./StatusPill";
import { App as Config } from "../config/AppConfig";

// Every live URL a visitor can open right now (product demos + live sites).
export function liveDemos() {
  const out = [];
  Config.Catalog.filter((p) => p.kind === "platform").forEach((p) => {
    const l = p.links || {};
    if (l.demo) out.push({ project: p, ...l.demo, kind: "Demo", note: "Free to use, sign up in seconds" });
    if (l.site) out.push({ project: p, ...l.site, kind: "Live site", note: "Customer-facing auction website" });
    if (l.admin) out.push({ project: p, ...l.admin, kind: "Admin", note: "Staff ERP & back office" });
  });
  return out;
}

export function DemoGrid() {
  const demos = liveDemos();
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {demos.map((d, i) => (
        <Reveal key={d.href} delay={0.05 + i * 0.06} className="h-full">
          <a
            href={d.href}
            target="_blank"
            rel="noreferrer"
            className={`tone-${d.project.tone} clay-tone clay-hover group flex h-full flex-col p-6`}
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/35 px-3 py-1 text-[11px] font-black uppercase tracking-wider">
                {d.kind}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/35 transition-transform duration-300 ease-spring group-hover:rotate-12 group-hover:scale-110">
                <Icon name={d.kind === "Demo" ? "play" : "external"} size={18} strokeWidth={2.4} />
              </span>
            </div>
            <p className="mt-6 font-display text-2xl font-black">{d.project.name}</p>
            <p className="mt-1 font-mono text-sm font-semibold opacity-90">{d.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}</p>
            <p className="mt-3 text-sm font-semibold opacity-80">{d.note}</p>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

const OSS_ORDER = { public: 0, "in-progress": 1, planned: 2 };

export function OpenSourceGrid() {
  // A project with a separate iOS repo gets a second card pointing at it.
  const items = Config.Catalog.filter((p) => p.openSource)
    .sort((a, b) => OSS_ORDER[a.openSource] - OSS_ORDER[b.openSource])
    .flatMap((p) => {
      const ios = p.links?.repoIos;
      if (!ios) return [p];
      return [
        p,
        { ...p, id: `${p.id}-ios`, name: `${p.name} for iOS`, tagline: ios.note || p.tagline, links: { repo: ios.href } },
      ];
    });

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {items.map((p, i) => {
        const repo = p.links?.repo || (p.links?.npm && p.links.npm);
        const body = (
          <>
            <span
              className={`tone-${p.tone} clay-soft flex h-12 w-12 shrink-0 items-center justify-center !rounded-2xl tone-text`}
            >
              <GithubGlyph size={24} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-display text-lg font-black text-ink">{p.name}</p>
                <OpenSourcePill state={p.openSource} />
              </div>
              <p className="mt-1 text-sm text-muted">
                {p.openSource === "public"
                  ? p.tagline
                  : p.openSource === "in-progress"
                    ? "Preparing a clean public repo under an MIT licence."
                    : "Will be published in full after the security audit."}
              </p>
            </div>
            <Icon
              name={repo ? "external" : "arrow"}
              size={18}
              className="shrink-0 text-muted transition-transform duration-300 ease-spring group-hover:translate-x-1"
            />
          </>
        );
        const cls = "clay clay-hover group flex h-full items-center gap-4 !rounded-[24px] p-4 pr-5";
        return (
          <Reveal key={p.id} delay={0.04 + i * 0.04} className="h-full">
            {repo ? (
              <a href={repo} target="_blank" rel="noreferrer" className={cls}>
                {body}
              </a>
            ) : (
              <Link to={`/work/${p.id}`} onClickCapture={() => window.scrollTo({ top: 0, left: 0 })} className={cls}>
                {body}
              </Link>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
