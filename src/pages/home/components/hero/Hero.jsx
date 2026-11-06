import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Icon from "../../../../shared/Icon";
import ProgressBar from "../../../../shared/ProgressBar";
import { StatusPill } from "../../../../shared/StatusPill";
import { Container } from "../../../../shared/Section";
import { App as Config, findProject, progressOf } from "../../../../config/AppConfig";

const WORD_TONES = [null, "amber", "pink", "violet", null];

const spring = { type: "spring", stiffness: 220, damping: 22 };

// Floating clay tiles showing what's live and what's in the lab.
function HeroBoard() {
  const oneerp = findProject("oneerp");
  const mg = findProject("solobill");
  const op = findProject("openpass");

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[460px] sm:h-[460px]">
      {/* big live card */}
      <motion.a
        href={oneerp.links.site.href}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 40, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ ...spring, delay: 0.15 }}
        whileHover={{ rotate: 0, y: -6 }}
        className="tone-amber clay-tone absolute left-0 top-2 w-[72%] p-6"
      >
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/35">
            <Icon name="auction" size={26} strokeWidth={2.4} />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/40 px-3 py-1 text-[11px] font-black uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-600" /> Live
          </span>
        </div>
        <p className="mt-5 font-display text-2xl font-black">OneERP</p>
        <p className="mt-1 text-sm font-semibold opacity-80">{oneerp.links.site.label}</p>
      </motion.a>

      {/* demo card */}
      <motion.a
        href={mg.links.demo.href}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, x: 40, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 4 }}
        transition={{ ...spring, delay: 0.3 }}
        whileHover={{ rotate: 0, y: -6 }}
        className="tone-violet clay absolute right-0 top-[120px] w-[62%] p-5"
      >
        <div className="flex items-center gap-3">
          <span className="clay-tone flex h-11 w-11 shrink-0 items-center justify-center !rounded-2xl">
            <Icon name="receipt" size={22} strokeWidth={2.4} />
          </span>
          <div>
            <p className="font-display text-lg font-black text-ink">Solobill</p>
            <p className="text-xs font-semibold text-muted">Free · open source</p>
          </div>
        </div>
        <span className="clay-btn clay-btn-primary mt-4 w-full !min-h-[40px] text-sm">
          <Icon name="play" size={15} /> Try the demo
        </span>
      </motion.a>

      {/* progress card */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ ...spring, delay: 0.45 }}
        whileHover={{ rotate: 0, y: -6 }}
        className="clay absolute bottom-2 left-[6%] w-[70%] p-5"
      >
        <div className="flex items-center gap-3">
          <img src={`/static/images/work/${op.image}`} alt="" className="h-10 w-10 rounded-xl shadow-md" />
          <div className="min-w-0 flex-1">
            <p className="font-display text-base font-black text-ink">Open Pass</p>
            <StatusPill status={op.status} />
          </div>
        </div>
        <div className="mt-4">
          <ProgressBar value={progressOf(op)} tone="sky" label="Road to 1.0" height="h-3" />
        </div>
      </motion.div>

      {/* sparkle bubble */}
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ...spring, delay: 0.6 }}
        className="tone-pink clay-tone absolute bottom-[120px] right-[4%] flex h-16 w-16 items-center justify-center !rounded-full"
        aria-hidden="true"
      >
        <Icon name="sparkle" size={28} />
      </motion.span>
    </div>
  );
}

function Hero() {
  const { Hero: hero } = Config.Home;
  const whatsapp = `https://wa.me/${Config.Contact.WhatsApp}`;

  return (
    <Container className="mt-6 md:mt-12">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="tone-violet clay-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] tone-text"
          >
            <span className="tone-bg pulse-dot h-2 w-2 rounded-full" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.05 }}
            className="mt-6 text-[44px] font-black leading-[1.02] text-ink sm:text-6xl lg:text-[68px]"
          >
            {hero.title.map((word, i) => (
              <span key={word}>
                {WORD_TONES[i] ? (
                  <span className={`tone-${WORD_TONES[i]} tone-text`}>{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <a href={whatsapp} target="_blank" rel="noreferrer" className="clay-btn clay-btn-primary !px-7 text-base">
              {hero.primaryCta}
              <Icon name="arrow" size={18} strokeWidth={2.5} />
            </a>
            <Link
              to="/work"
              onClickCapture={() => window.scrollTo({ top: 0, left: 0 })}
              className="clay-btn clay-btn-ghost !px-7 text-base"
            >
              {hero.secondaryCta}
            </Link>
          </motion.div>

          {/* founder chip — keeps Haitham in the picture */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex justify-center lg:justify-start"
          >
            <Link
              to="/experience"
              onClickCapture={() => window.scrollTo({ top: 0, left: 0 })}
              className="clay clay-hover inline-flex items-center gap-3 !rounded-full py-2 pl-2 pr-5"
            >
              <span className="tone-pink clay-tone flex h-10 w-10 items-center justify-center !rounded-full font-display text-lg font-black">
                H
              </span>
              <span className="text-left text-sm leading-tight">
                <span className="block font-bold text-ink">Led by {Config.Founder.Name}</span>
                <span className="text-muted">{Config.Founder.Role}</span>
              </span>
            </Link>
          </motion.div>
        </div>

        <HeroBoard />
      </div>
    </Container>
  );
}

export default Hero;
