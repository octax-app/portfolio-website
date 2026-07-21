import { App as Config } from "../../config/AppConfig";
import Reveal from "../../shared/Reveal";

const CONTAINER = "max-w-[944px] w-full px-7 md:px-5 lg:px-0";

function Studio() {
  const { Studio: studio, AboutMe, Github } = Config;
  const whatsapp = `https://wa.me/${AboutMe.PhoneNumber}`;

  return (
    <div className="pb-24 plus-font">
      {/* Hero */}
      <section className="flex justify-center mt-12 md:mt-24">
        <div className={CONTAINER}>
          <Reveal x={-50} y={0}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-primary mb-3">
              Studio
            </p>
            <h1 className="text-6xl md:text-8xl font-black text-accent-700 dark:text-accent-300 leading-none">
              {studio.Name}
            </h1>
            <p className="mt-6 text-2xl md:text-3xl font-bold text-accent-600 dark:text-accent-300 max-w-2xl">
              {studio.Tagline}
            </p>
            <p className="mt-4 text-lg text-accent-500 dark:text-accent-400 max-w-2xl">
              {studio.Intro}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-2.5 rounded-full bg-accent-700 dark:bg-primary text-white font-semibold hero-button transition-transform active:scale-95"
              >
                Start a project
              </a>
              <a
                href={Github}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-2.5 rounded-full border-2 border-accent-300 dark:border-accent-600 text-accent-700 dark:text-accent-200 font-semibold hover:bg-accent-200 dark:hover:bg-accent-800 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="flex justify-center mt-24">
        <div className={CONTAINER}>
          <Reveal x={-50} y={0}>
            <h2 className="text-2xl md:text-3xl font-black text-accent-700 dark:text-accent-300 border-b border-accent-200 dark:border-accent-700 pb-3">
              What we do
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {studio.Services.map((service, i) => (
              <Reveal key={service.title} delay={0.1 + i * 0.05}>
                <div className="h-full rounded-3xl border-2 border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 p-6">
                  <h3 className="text-lg font-black text-accent-700 dark:text-accent-300">
                    {service.title}
                  </h3>
                  <p className="text-accent-600 dark:text-accent-400 mt-2">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="flex justify-center mt-24">
        <div className={CONTAINER}>
          <Reveal x={-50} y={0}>
            <h2 className="text-2xl md:text-3xl font-black text-accent-700 dark:text-accent-300 border-b border-accent-200 dark:border-accent-700 pb-3">
              How we work
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {studio.Process.map((phase, i) => (
              <Reveal key={phase.step} delay={0.1 + i * 0.05}>
                <div className="h-full rounded-3xl border-2 border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 p-6">
                  <span className="text-3xl font-black text-blue-500/40 dark:text-primary/40">
                    {phase.step}
                  </span>
                  <h3 className="text-lg font-black text-accent-700 dark:text-accent-300 mt-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-accent-600 dark:text-accent-400 mt-1">
                    {phase.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="flex justify-center mt-24">
        <div className={CONTAINER}>
          <Reveal x={-50} y={0}>
            <h2 className="text-2xl md:text-3xl font-black text-accent-700 dark:text-accent-300 border-b border-accent-200 dark:border-accent-700 pb-3">
              What we believe
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {studio.Values.map((value, i) => (
              <Reveal key={value} delay={0.1 + i * 0.05}>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-blue-500 dark:text-primary font-black">
                    ✦
                  </span>
                  <p className="text-lg text-accent-600 dark:text-accent-300">
                    {value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex justify-center mt-24">
        <div className={CONTAINER}>
          <Reveal>
            <div className="rounded-3xl border-2 border-accent-200 dark:border-accent-700 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-800 dark:to-accent-900 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-4xl font-black text-accent-700 dark:text-accent-300">
                {studio.Cta.title}
              </h2>
              <p className="text-accent-600 dark:text-accent-400 mt-3 max-w-xl mx-auto">
                {studio.Cta.desc}
              </p>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 px-8 py-3 rounded-full bg-accent-700 dark:bg-primary text-white font-semibold hero-button transition-transform active:scale-95"
              >
                Get in Touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default Studio;
