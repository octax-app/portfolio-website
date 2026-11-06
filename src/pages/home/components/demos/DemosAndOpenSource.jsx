import { DemoGrid, OpenSourceGrid } from "../../../../shared/LabBlocks";
import { Section, SectionHeading } from "../../../../shared/Section";
import { App as Config } from "../../../../config/AppConfig";
import { GithubGlyph } from "../../../../shared/Icon";

export function Demos() {
  return (
    <Section id="demos">
      <SectionHeading
        eyebrow="Live demos"
        tone="mint"
        title="Don't take our word for it. Try it."
        subtitle="These are running in production today. Open one in a new tab."
      />
      <div className="mt-10">
        <DemoGrid />
      </div>
    </Section>
  );
}

export function OpenSource() {
  return (
    <Section id="open-source">
      <SectionHeading
        eyebrow="Open source"
        tone="sky"
        title="Code we share with the community."
        subtitle="Published, being published, and on the way."
        action={
          <a href={Config.Github} target="_blank" rel="noreferrer" className="clay-btn clay-btn-ghost text-sm">
            <GithubGlyph size={18} /> {Config.GithubOrg}
          </a>
        }
      />
      <div className="mt-10">
        <OpenSourceGrid />
      </div>
    </Section>
  );
}
