import Reveal from "../../../../shared/Reveal";

import { App as Config } from "../../../../config/AppConfig";

function StatsBand() {
  const { Stats } = Config.Home;

  return (
    <section className="flex justify-center mt-20 md:mt-28 px-7 md:px-5 lg:px-0">
      <div className="max-w-[944px] w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {Stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.05 + i * 0.05}>
              <div className="h-full rounded-3xl border-2 border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 p-6 text-center">
                <p className="text-3xl md:text-4xl font-black text-blue-500 dark:text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-accent-500 dark:text-accent-400">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBand;
