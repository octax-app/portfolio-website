import { Link } from "react-router-dom";

import HelloSvg from "../hero/hero_svgs/HelloSvg";
import Icon, { XGlyph } from "../../../../shared/Icon";
import Reveal from "../../../../shared/Reveal";
import { Section } from "../../../../shared/Section";
import { App as Config } from "../../../../config/AppConfig";

// The person behind Octax.
function FounderCard() {
  const { Founder } = Config;
  return (
    <Section>
      <Reveal>
        <div className="clay grid grid-cols-1 items-center gap-8 !rounded-[40px] p-7 sm:p-10 md:grid-cols-[auto_1fr_auto]">
          <div className="tone-pink clay-tone relative mx-auto flex h-36 w-36 items-center justify-center !rounded-[40px] md:mx-0">
            <span className="font-display text-6xl font-black">H</span>
            <span className="absolute -bottom-3 -right-3 flex h-14 w-14 items-center justify-center rounded-full bg-surface shadow-lg">
              <HelloSvg />
            </span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">The founder</p>
            <h2 className="mt-2 text-3xl font-black text-ink md:text-4xl">
              Hi, I'm Haitham.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              {Founder.Bio} I started Octax to build products I'd want to use myself, and to help
              clients ship theirs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:flex-col">
            <Link
              to="/experience"
              onClickCapture={() => window.scrollTo({ top: 0, left: 0 })}
              className="clay-btn clay-btn-primary text-sm"
            >
              My story <Icon name="arrow" size={16} strokeWidth={2.5} />
            </Link>
            <a href={Config.Twitter} target="_blank" rel="noreferrer" className="clay-btn clay-btn-ghost text-sm">
              <XGlyph size={16} /> Follow
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default FounderCard;
