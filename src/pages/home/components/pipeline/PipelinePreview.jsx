import { Link } from "react-router-dom";

import Icon from "../../../../shared/Icon";
import PipelineCard from "../../../../shared/PipelineCard";
import Reveal from "../../../../shared/Reveal";
import { Section, SectionHeading } from "../../../../shared/Section";
import { App as Config } from "../../../../config/AppConfig";

// "In the lab" — progress tracking for every product with a roadmap.
function PipelinePreview() {
  const tracked = Config.Catalog.filter((p) => p.milestones?.length);

  return (
    <Section id="progress">
      <SectionHeading
        eyebrow="Building in public"
        tone="amber"
        title="What's shipping, and what's next."
        subtitle="Live progress on the products Octax is building right now."
        action={
          <Link
            to="/lab"
            onClickCapture={() => window.scrollTo({ top: 0, left: 0 })}
            className="clay-btn clay-btn-ghost text-sm"
          >
            Visit the Lab <Icon name="flask" size={16} />
          </Link>
        }
      />

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tracked.map((p, i) => (
          <Reveal key={p.id} delay={0.05 + i * 0.08} className="h-full">
            <PipelineCard project={p} compact />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default PipelinePreview;
