import Reveal from "../../../../shared/Reveal";

import { App as Config } from "../../../../config/AppConfig";

function CtaCard() {
  const { Cta } = Config.Home;
  const whatsapp = `https://wa.me/${Config.AboutMe.PhoneNumber}`;

  return (
    <section className="flex justify-center mt-20 md:mt-28 px-7 md:px-5 lg:px-0">
      <div className="max-w-[944px] w-full">
        <Reveal>
          <div className="rounded-[2rem] border-2 border-accent-200 dark:border-accent-700 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-800 dark:to-accent-900 p-8 md:p-14 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-accent-700 dark:text-accent-300 max-w-2xl mx-auto">
              {Cta.title}
            </h2>
            <p className="mt-3 text-accent-600 dark:text-accent-400 max-w-xl mx-auto">
              {Cta.desc}
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-7 px-8 py-3 rounded-full bg-accent-700 dark:bg-primary text-white font-semibold hero-button transition-transform active:scale-95"
            >
              {Cta.button}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CtaCard;
