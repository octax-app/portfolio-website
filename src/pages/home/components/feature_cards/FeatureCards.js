import Reveal from "../../../../shared/Reveal";
import CardSvg from "../info_cards/card/CardSvg";

import { App as Config } from "../../../../config/AppConfig";

function FeatureCard({ title, desc, accent }) {
  return (
    <div className="group h-full rounded-3xl border-2 border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-200/50 dark:hover:shadow-black/30">
      <div
        className="h-24 rounded-2xl mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]"
        style={{
          backgroundImage: `linear-gradient(135deg, ${accent}40, ${accent}10)`,
        }}
      >
        <CardSvg title={title} />
      </div>
      <h3 className="text-xl font-black text-accent-700 dark:text-accent-300">
        {title}
      </h3>
      <p className="mt-2 text-accent-600 dark:text-accent-400">{desc}</p>
    </div>
  );
}

function FeatureCards() {
  const { Features } = Config.Home;

  return (
    <section className="flex justify-center mt-20 md:mt-28 px-7 md:px-5 lg:px-0">
      <div className="max-w-[944px] w-full">
        <Reveal x={-50} y={0}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-primary mb-2">
            How I work
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-accent-700 dark:text-accent-300">
            Clean. Elegant. Efficient.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {Features.map((feature, i) => (
            <Reveal key={feature.title} delay={0.1 + i * 0.05}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCards;
