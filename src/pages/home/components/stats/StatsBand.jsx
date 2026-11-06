import Reveal from "../../../../shared/Reveal";
import { Section } from "../../../../shared/Section";
import { App as Config } from "../../../../config/AppConfig";

function StatsBand() {
  return (
    <Section className="!mt-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {Config.Home.Stats.map((stat, i) => (
          <Reveal key={stat.label} delay={0.05 + i * 0.06}>
            <div className={`tone-${stat.tone} clay-tone h-full p-6 text-center`}>
              <p className="font-display text-4xl font-black md:text-5xl">{stat.value}</p>
              <p className="mt-1 text-sm font-bold opacity-85">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default StatsBand;
