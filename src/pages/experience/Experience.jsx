import { App as Config } from "../../config/AppConfig";
import PageHeader from "../../shared/PageHeader";
import Reveal from "../../shared/Reveal";
import Badge from "../../shared/Badge";

const CONTAINER = "max-w-[944px] w-full px-7 md:px-5 lg:px-0";

function Experience() {
  const { Experience: exp } = Config;

  return (
    <div className="pb-24 plus-font">
      <PageHeader eyebrow="Career" title="Experience" subtitle={exp.Intro} />

      <div className="flex justify-center mt-12">
        <div className={CONTAINER}>
          <div className="relative ml-2 border-l-2 border-accent-200 dark:border-accent-700">
            {exp.Timeline.map((job, i) => (
              <Reveal
                key={`${job.company}-${i}`}
                delay={0.1}
                className="relative pl-7 md:pl-10 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-accent-100 dark:border-accent-900 bg-blue-500 dark:bg-primary" />

                <div className="rounded-3xl border-2 border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-black text-accent-700 dark:text-accent-300">
                      {job.role}
                    </h3>
                    {job.current && <Badge tone="primary">Current</Badge>}
                  </div>

                  <p className="text-blue-500 dark:text-primary font-semibold mt-1">
                    {job.company}
                  </p>
                  <p className="text-sm text-accent-500 dark:text-accent-400 mt-1">
                    {job.period} · {job.location}
                  </p>

                  <p className="text-accent-600 dark:text-accent-400 mt-4">
                    {job.summary}
                  </p>

                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="flex gap-2 text-accent-600 dark:text-accent-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {job.stack && job.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5">
                      {job.stack.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
