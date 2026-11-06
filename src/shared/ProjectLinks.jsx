import Icon, { AppleGlyph, GithubGlyph, PlayGlyph } from "./Icon";

// Collects every outward link a project has into a uniform list.
export function linksOf(project) {
  const l = project.links || {};
  const out = [];
  if (l.demo) out.push({ key: "demo", label: l.demo.label, href: l.demo.href, icon: <Icon name="play" size={15} />, primary: true });
  if (l.site) out.push({ key: "site", label: l.site.label, href: l.site.href, icon: <Icon name="external" size={15} />, primary: !l.demo });
  if (l.admin) out.push({ key: "admin", label: l.admin.label, href: l.admin.href, icon: <Icon name="dashboard" size={15} /> });
  if (l.appStore) out.push({ key: "appStore", label: "App Store", href: l.appStore, icon: <AppleGlyph size={15} /> });
  if (l.playStore) out.push({ key: "playStore", label: "Google Play", href: l.playStore, icon: <PlayGlyph size={14} /> });
  if (l.npm) out.push({ key: "npm", label: "npm", href: l.npm, icon: <Icon name="code" size={15} /> });
  if (l.repo) out.push({ key: "repo", label: l.repoIos ? "Web source" : "Source", href: l.repo, icon: <GithubGlyph size={15} /> });
  if (l.repoIos) out.push({ key: "repoIos", label: l.repoIos.label, href: l.repoIos.href, icon: <GithubGlyph size={15} /> });
  return out;
}

// Row of clay link buttons. `compact` renders small chips for cards.
function ProjectLinks({ project, compact = false, onlyPrimary = false }) {
  let links = linksOf(project);
  if (onlyPrimary) links = links.slice(0, 2);
  if (!links.length) return null;

  return (
    <div className="flex flex-wrap gap-2.5">
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={
            compact
              ? `inline-flex min-h-[36px] items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-transform duration-300 ease-spring hover:-translate-y-0.5 ${
                  link.primary ? "clay-btn-primary" : "bg-sunken text-ink"
                }`
              : `clay-btn text-sm ${link.primary ? "clay-btn-primary" : "clay-btn-ghost"}`
          }
        >
          {link.icon}
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default ProjectLinks;
