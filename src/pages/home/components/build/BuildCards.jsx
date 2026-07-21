import { Link } from "react-router-dom";

import Reveal from "../../../../shared/Reveal";

import { App as Config } from "../../../../config/AppConfig";

function BuildCards() {
  const { Build } = Config.Home;

  return (
    <section className="flex justify-center mt-20 md:mt-28 px-7 md:px-5 lg:px-0">
      <div className="max-w-[944px] w-full">
        <Reveal x={-50} y={0}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-primary mb-2">
            What I build
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-accent-700 dark:text-accent-300">
            From idea to shipped product.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {Build.map((item, i) => (
            <Reveal key={item.title} delay={0.1 + i * 0.05}>
              <Link
                to={item.to}
                onClickCapture={() => window.scrollTo({ top: 0, left: 0 })}
                className="group h-full flex flex-col rounded-3xl border-2 border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 dark:hover:border-primary hover:shadow-lg hover:shadow-accent-200/50 dark:hover:shadow-black/30"
              >
                <h3 className="text-lg font-black text-accent-700 dark:text-accent-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-accent-600 dark:text-accent-400 flex-1">
                  {item.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-500 dark:text-primary">
                  Explore
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuildCards;
