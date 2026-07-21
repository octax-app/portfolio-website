import { App as Config } from "../../config/AppConfig";
import PageHeader from "../../shared/PageHeader";
import Reveal from "../../shared/Reveal";
import Badge from "../../shared/Badge";
import StackSvg from "../home/components/hero/hero_svgs/StackSvg";

const CONTAINER = "max-w-[944px] w-full px-7 md:px-5 lg:px-0";

function SkillsTools() {
  const { Skills } = Config;

  return (
    <div className="pb-24 plus-font">
      <PageHeader eyebrow="What I use" title="Skills & Tools" subtitle={Skills.Intro} />

      {/* Favorite stack */}
      <div className="flex justify-center mt-10">
        <div className={CONTAINER}>
          <Reveal>
            <div className="rounded-3xl border-2 border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 p-6">
              <p className="text-accent-500 dark:text-accent-300 mb-4 font-semibold">
                Current favorite stack
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                {Skills.FavoriteStack.map((s) => (
                  <StackSvg key={s.type} type={s.type} onHoverColor={s.color} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Skill groups */}
      <div className="flex justify-center mt-6">
        <div className={`${CONTAINER} grid grid-cols-1 md:grid-cols-2 gap-5`}>
          {Skills.Groups.map((group, i) => (
            <Reveal key={group.title} delay={0.1 + i * 0.05}>
              <div className="h-full rounded-3xl border-2 border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 p-6">
                <h3 className="text-lg font-black text-accent-700 dark:text-accent-300 mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsTools;
