import { App as Config, progressOf } from "../../config/AppConfig";
import { DemoGrid, OpenSourceGrid } from "../../shared/LabBlocks";
import PageHeader from "../../shared/PageHeader";
import PipelineCard from "../../shared/PipelineCard";
import Reveal from "../../shared/Reveal";
import { Section, SectionHeading } from "../../shared/Section";
import Seo from "../../shared/Seo";
import CtaCard from "../home/components/cta/CtaCard";

function Lab() {
  const tracked = Config.Catalog.filter((p) => p.milestones?.length);
  const all = tracked.flatMap((p) => p.milestones);
  const done = all.filter((m) => m.state === "done").length;
  const active = all.filter((m) => m.state === "active").length;
  const avg = Math.round(tracked.reduce((s, p) => s + progressOf(p), 0) / tracked.length);

  const summary = [
    { value: tracked.length, label: "Products tracked", tone: "violet" },
    { value: done, label: "Milestones shipped", tone: "mint" },
    { value: active, label: "In progress now", tone: "amber" },
    { value: `${avg}%`, label: "Average progress", tone: "pink" },
  ];

  return (
    <div className="Lab">
      <Seo
        title="Lab: progress, demos & open source"
        description="Live progress on OneERP, Octax Solobill and Octa Pass, demos you can try today, and Octax's open-source projects."
      />
      <PageHeader eyebrow="The Lab" tone="amber" title="Building in public." subtitle={Config.Lab.Intro}>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {summary.map((s) => (
            <div key={s.label} className={`tone-${s.tone} clay-soft p-4`}>
              <p className="font-display text-3xl font-black tone-text">{s.value}</p>
              <p className="text-sm font-semibold text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </PageHeader>

      <Section id="progress" className="!mt-20">
        <SectionHeading eyebrow="Progress" tone="violet" title="Roadmaps, milestone by milestone." />
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tracked.map((p, i) => (
            <Reveal key={p.id} delay={0.05 + i * 0.08} className="h-full">
              <PipelineCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="demos">
        <SectionHeading
          eyebrow="Demos"
          tone="mint"
          title="Running in production today."
          subtitle="Open any of these and click around."
        />
        <div className="mt-10">
          <DemoGrid />
        </div>
      </Section>

      <Section id="open-source">
        <SectionHeading
          eyebrow="Open source"
          tone="sky"
          title="Open source, and on the way."
          subtitle="What's public now, what's being prepared, and what comes next."
        />
        <div className="mt-10">
          <OpenSourceGrid />
        </div>
      </Section>

      <CtaCard title="Want something like this for your business?" />
    </div>
  );
}

export default Lab;
