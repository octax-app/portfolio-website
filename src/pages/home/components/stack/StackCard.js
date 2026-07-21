import Reveal from "../../../../shared/Reveal";
import StackSvg from "../hero/hero_svgs/StackSvg";

import { App as Config } from "../../../../config/AppConfig";

function StackCard() {
  const { FavoriteStack } = Config.Skills;

  return (
    <section className="flex justify-center mt-20 md:mt-28 px-7 md:px-5 lg:px-0">
      <div className="max-w-[944px] w-full">
        <Reveal>
          <div className="rounded-3xl border-2 border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 p-8 md:p-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-primary mb-2">
              My toolkit
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-accent-700 dark:text-accent-300">
              Current favorite stack & tools
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-7 mt-7">
              {FavoriteStack.map((s) => (
                <StackSvg key={s.type} type={s.type} onHoverColor={s.color} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default StackCard;
