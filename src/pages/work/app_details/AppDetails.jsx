import { useEffect, useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./AppDetails.css";

import { App as Config, findProject } from "../../../config/AppConfig";
import { graph, projectLd } from "../../../config/seo";
import Badge from "../../../shared/Badge";
import Gallery from "../../../shared/Gallery";
import Icon from "../../../shared/Icon";
import PipelineCard from "../../../shared/PipelineCard";
import ProjectCard from "../../../shared/ProjectCard";
import ProjectLinks from "../../../shared/ProjectLinks";
import ProjectThumb, { shotSrc } from "../../../shared/ProjectThumb";
import Reveal from "../../../shared/Reveal";
import { Container, Section, SectionHeading } from "../../../shared/Section";
import Seo from "../../../shared/Seo";
import { OpenSourcePill, StatusPill } from "../../../shared/StatusPill";
import useIsDark from "../../../shared/useIsDark";

function Screens({ project }) {
  const isDark = useIsDark();
  const { id, name, screenshots, hasDark } = project;
  const slides = Array.from({ length: screenshots }, (_, i) => shotSrc(id, i + 1, hasDark && isDark));

  return (
    <Section className="!mt-16">
      <SectionHeading eyebrow="Screens" tone={project.tone} title="A look inside." />
      <div className="mt-8 hidden md:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={28}
          breakpoints={{ 1024: { slidesPerView: 4, spaceBetween: 32 } }}
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="!overflow-visible !pb-6"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={src}>
              <img src={src} alt={`${name} screen ${i + 1}`} loading="lazy" className="w-full rounded-[28px] shadow-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-8 flex justify-center md:hidden">
        <Swiper className="myswiper" effect="cards" grabCursor autoplay={{ delay: 2200, disableOnInteraction: false }} modules={[Autoplay, EffectCards]}>
          {slides.map((src, i) => (
            <SwiperSlide key={src}>
              <img src={src} alt={`${name} screen ${i + 1}`} loading="lazy" className="w-full rounded-[22px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}

function AppDetails() {
  const { app } = useParams();
  const project = findProject(app);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [app]);

  const related = useMemo(
    () =>
      project
        ? Config.Catalog.filter((p) => p.id !== project.id && p.kind === project.kind).slice(0, 3)
        : [],
    [project],
  );
  const jsonLd = useMemo(() => (project ? graph(projectLd(project)) : null), [project]);

  // Unknown id → back to the catalog
  if (!project) return <Navigate to="/work" replace />;
  // Old id (e.g. a renamed product) → its current URL
  if (project.id !== app) return <Navigate to={`/work/${project.id}`} replace />;

  const { name, tagline, desc, tags = [], tone, status, openSource, milestones } = project;

  return (
    <div className="AppDetails">
      <Seo title={name} description={`${name}: ${tagline} ${desc}`.slice(0, 300)} jsonLd={jsonLd} />

      <Container className="mt-6 md:mt-10">
        <Link
          to="/work"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 font-display text-sm font-extrabold text-muted hover:text-ink"
        >
          <Icon name="arrow" size={16} strokeWidth={2.5} className="rotate-180" /> Back to work
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 24 }}
          className={`tone-${tone} clay mt-3 grid grid-cols-1 items-center gap-8 !rounded-[40px] p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr]`}
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <StatusPill status={status} size="md" />
              {openSource && <OpenSourcePill state={openSource} />}
            </div>
            <h1 className="mt-4 text-4xl font-black leading-tight text-ink md:text-6xl">{name}</h1>
            <p className="mt-3 font-display text-xl font-extrabold tone-text">{tagline}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted">{desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="mt-7">
              <ProjectLinks project={project} />
            </div>
          </div>
          <ProjectThumb project={project} height="h-72 md:h-80" />
        </motion.div>
      </Container>

      {project.screenshots > 0 && <Screens project={project} />}

      {project.gallery?.length > 0 && (
        <Section className="!mt-16">
          <SectionHeading
            eyebrow="Screenshots"
            tone={tone}
            title="A look inside."
            subtitle={`${project.gallery.length} screen${project.gallery.length > 1 ? "s" : ""}. Click any to enlarge.`}
          />
          <div className="mt-8">
            <Gallery project={project} />
          </div>
        </Section>
      )}

      {milestones?.length > 0 && (
        <Section className="!mt-16">
          <SectionHeading eyebrow="Roadmap" tone={tone} title="Where it's at." />
          <Reveal className="mt-8 max-w-2xl">
            <PipelineCard project={project} />
          </Reveal>
        </Section>
      )}

      {related.length > 0 && (
        <Section className="!mt-20">
          <SectionHeading eyebrow="More like this" tone="pink" title="Keep exploring." />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

export default AppDetails;
