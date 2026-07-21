import Reveal from "../../../shared/Reveal";
import ProjectCard from "../../../shared/ProjectCard";
import LinkCard from "../../../shared/LinkCard";
import AppSection from "./app_section/AppSection";

const CONTAINER = "max-w-[944px] w-full px-7 md:px-5 lg:px-0";

function CategorySection({ category }) {
  const { id, title, subtitle, layout, projects = [] } = category;
  const count = projects.length;

  return (
    <section className="mt-20 md:mt-28 scroll-mt-24" id={id}>
      {/* Category header */}
      <div className="flex justify-center">
        <div className={CONTAINER}>
          <Reveal x={-50} y={0}>
            <div className="flex items-end justify-between gap-4 border-b border-accent-200 dark:border-accent-700 pb-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-accent-700 dark:text-accent-300">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-accent-500 dark:text-accent-400 mt-1">
                    {subtitle}
                  </p>
                )}
              </div>
              <span className="hidden sm:block shrink-0 text-sm font-semibold text-accent-400 dark:text-accent-500">
                {count} {count === 1 ? "project" : "projects"}
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Showcase layout — large screenshot reveal */}
      {layout === "showcase" && (
        <div className="mt-8">
          {projects.map((p) => (
            <AppSection
              key={p.label}
              name={p.name}
              slug={p.slug}
              label={p.label}
              hasDark={p.hasDark}
              tags={p.tags}
              appStore={p.appStore}
              playStore={p.playStore}
              huaweiStore={p.huaweiStore}
              isDark={localStorage.theme === "dark"}
            />
          ))}
        </div>
      )}

      {/* Card / link grids */}
      {(layout === "cards" || layout === "links") && (
        <div className="flex justify-center mt-8">
          <div
            className={`${CONTAINER} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`}
          >
            {projects.map((p, i) => (
              <Reveal key={p.label || p.name} delay={0.1 + i * 0.05}>
                {layout === "cards" ? (
                  <ProjectCard project={p} />
                ) : (
                  <LinkCard project={p} />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default CategorySection;
