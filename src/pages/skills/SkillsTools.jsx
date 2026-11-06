import { Tooltip } from "react-tooltip";

import { App as Config } from "../../config/AppConfig";
import Badge from "../../shared/Badge";
import PageHeader from "../../shared/PageHeader";
import Reveal from "../../shared/Reveal";
import { Section } from "../../shared/Section";
import Seo from "../../shared/Seo";
import StackSvg from "../home/components/hero/hero_svgs/StackSvg";

function SkillsTools() {
  const { Skills } = Config;

  return (
    <div className="SkillsTools">
      <Seo
        title="Stack"
        description="The languages, frameworks and tools Octax uses: Flutter, SwiftUI, Expo, React, Next.js, NestJS, Laravel, Go, Rust, Postgres, Docker and more."
      />
      <PageHeader eyebrow="Stack" tone="sky" title="Skills & tools." subtitle={Skills.Intro}>
        <div className="clay-inset mt-8 inline-flex flex-wrap items-center gap-6 rounded-full px-6 py-4">
          {Skills.FavoriteStack.map((s) => (
            <StackSvg key={s.type} type={s.type} onHoverColor={s.color} />
          ))}
        </div>
        <Tooltip id="stack-tooltip" />
      </PageHeader>

      <Section className="!mt-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Skills.Groups.map((group, i) => (
            <Reveal key={group.title} delay={0.05 + i * 0.05} className="h-full">
              <div className="clay h-full p-6">
                <div className="flex items-center gap-3">
                  <span className={`tone-${group.tone} clay-tone h-10 w-10 !rounded-[14px]`} />
                  <h2 className="text-xl font-black text-ink">{group.title}</h2>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} tone={group.tone}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default SkillsTools;
