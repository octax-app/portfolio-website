import { App as Config } from "../../config/AppConfig";
import Icon from "../../shared/Icon";
import PageHeader from "../../shared/PageHeader";
import Reveal from "../../shared/Reveal";
import { Section, SectionHeading } from "../../shared/Section";
import Seo from "../../shared/Seo";
import CtaCard from "../home/components/cta/CtaCard";

function Studio() {
  const { Studio: studio } = Config;

  return (
    <div className="Studio">
      <Seo
        title="Services"
        description="Octax builds mobile apps (Flutter, Expo, SwiftUI), web platforms (React, Next.js, NestJS, Laravel), UI/UX design systems and realtime systems, from discovery to launch."
      />
      <PageHeader eyebrow="Services" tone="violet" title={studio.Tagline} subtitle={studio.Intro} />

      <Section className="!mt-20">
        <SectionHeading eyebrow="What we do" tone="pink" title="Design and engineering under one roof." />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {studio.Services.map((s, i) => (
            <Reveal key={s.title} delay={0.05 + i * 0.06} className="h-full">
              <div className="clay clay-hover h-full p-6">
                <span className={`tone-${s.tone} clay-tone flex h-14 w-14 items-center justify-center !rounded-[18px]`}>
                  <Icon name={s.icon} size={26} strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 text-xl font-black text-ink">{s.title}</h3>
                <p className="mt-2 text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" tone="amber" title="How we work." />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {studio.Process.map((phase, i) => (
            <Reveal key={phase.step} delay={0.05 + i * 0.06} className="h-full">
              <div className={`tone-${phase.tone} clay-tone h-full p-6`}>
                <span className="font-display text-5xl font-black opacity-60">{phase.step}</span>
                <h3 className="mt-3 text-2xl font-black">{phase.title}</h3>
                <p className="mt-1 font-semibold opacity-85">{phase.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Values" tone="mint" title="What we believe." />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {studio.Values.map((value, i) => (
            <Reveal key={value} delay={0.05 + i * 0.05}>
              <div className="clay flex items-center gap-4 !rounded-[24px] p-5">
                <span className="tone-mint clay-soft flex h-11 w-11 shrink-0 items-center justify-center !rounded-full tone-text">
                  <Icon name="check" size={20} strokeWidth={3} />
                </span>
                <p className="font-display text-lg font-extrabold text-ink">{value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaCard title={studio.Cta.title} desc={studio.Cta.desc} button="Start a project" />
    </div>
  );
}

export default Studio;
