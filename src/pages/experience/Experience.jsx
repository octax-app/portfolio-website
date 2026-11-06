import { App as Config } from "../../config/AppConfig";
import { founderLd, graph } from "../../config/seo";
import Badge from "../../shared/Badge";
import { XGlyph } from "../../shared/Icon";
import PageHeader from "../../shared/PageHeader";
import Reveal from "../../shared/Reveal";
import { Section, SectionHeading } from "../../shared/Section";
import Seo from "../../shared/Seo";

const JSON_LD = graph(founderLd());

function Experience() {
  const { Experience: exp, Founder } = Config;

  return (
    <div className="Experience">
      <Seo
        title={`About · ${Founder.Name}, founder`}
        description={`${Founder.Name} is the founder and lead engineer of Octax. ${Founder.Bio}`}
        jsonLd={JSON_LD}
      />
      <PageHeader eyebrow="About" tone="pink" title="The people behind Octax." subtitle={exp.Intro} />

      {/* Founder profile */}
      <Section className="!mt-16">
        <Reveal>
          <div className="clay grid grid-cols-1 items-center gap-8 !rounded-[40px] p-7 sm:p-10 md:grid-cols-[auto_1fr]">
            <div className="tone-pink clay-tone mx-auto flex h-40 w-40 items-center justify-center !rounded-[44px] md:mx-0">
              <span className="font-display text-7xl font-black">H</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{Founder.Role}</p>
              <h2 className="mt-2 text-3xl font-black text-ink md:text-5xl">{Founder.Name}</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted">{Founder.Bio}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a href={Config.Twitter} target="_blank" rel="noreferrer" className="clay-btn clay-btn-ghost text-sm">
                  <XGlyph size={16} /> @HaithamDev_
                </a>
                <a href={`https://wa.me/${Config.Contact.WhatsApp}`} target="_blank" rel="noreferrer" className="clay-btn clay-btn-primary text-sm">
                  Say hello
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeading eyebrow="Timeline" tone="violet" title="The road so far." />
        <ol className="relative mt-10 ml-5 border-l-4 border-dashed border-line">
          {exp.Timeline.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} as="li" className="relative pb-10 pl-8 last:pb-0 md:pl-12">
              <span
                className={`tone-${job.tone} clay-tone absolute -left-[18px] top-6 h-8 w-8 !rounded-full`}
                aria-hidden="true"
              />
              <div className="clay p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl font-black text-ink">{job.role}</h3>
                  {job.current && <Badge tone="mint">Current</Badge>}
                </div>
                <p className={`tone-${job.tone} mt-1 font-display text-lg font-extrabold tone-text`}>{job.company}</p>
                <p className="mt-1 text-sm text-muted">
                  {job.period} · {job.location}
                </p>
                <p className="mt-4 text-muted">{job.summary}</p>
                {job.highlights?.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className={`tone-${job.tone} flex gap-3 text-ink`}>
                        <span className="tone-bg mt-2 h-2 w-2 shrink-0 rounded-full" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {job.stack?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
    </div>
  );
}

export default Experience;
