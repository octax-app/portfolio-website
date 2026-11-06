import Icon from "../../../../shared/Icon";
import Reveal from "../../../../shared/Reveal";
import { Section } from "../../../../shared/Section";
import { App as Config } from "../../../../config/AppConfig";

function CtaCard({ title, desc, button }) {
  const cta = Config.Home.Cta;
  const whatsapp = `https://wa.me/${Config.Contact.WhatsApp}`;

  return (
    <Section>
      <Reveal>
        <div className="tone-violet clay-tone relative overflow-hidden !rounded-[44px] p-8 text-center md:p-16">
          <span className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/15" />
          <span className="absolute -bottom-16 -right-8 h-64 w-64 rounded-full bg-[#ec4899]/40" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              {title || cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">{desc || cta.desc}</p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="clay-btn mt-8 bg-white !px-8 text-base text-[#5b21b6] shadow-[0_14px_26px_-10px_rgba(0,0,0,.35),inset_0_-5px_10px_rgba(91,33,182,.15)]"
            >
              <Icon name="whatsapp" size={20} />
              {button || cta.button}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default CtaCard;
