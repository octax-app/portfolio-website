import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

import "./AppDetails.css";

import { App as Config } from "../../../config/AppConfig";
import Badge from "../../../shared/Badge";
import FallbackImage from "../../../shared/FallbackImage";
import StoreLinks from "../components/app_section/StoreLinks";

// Find a project anywhere in the Work config by its `label` (the URL segment).
function findProject(label) {
  for (const category of Config.Work.Categories) {
    const match = (category.projects || []).find((p) => p.label === label);
    if (match) return match;
  }
  return null;
}

function AppDetails() {
  const { app } = useParams();
  const project = findProject(app);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [app]);

  // Unknown label (e.g. /work/xxx) — send the visitor back to the Work page.
  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const {
    name,
    slug,
    tags = [],
    hasDark,
    screenshots = 0,
    appStore,
    playStore,
    huaweiStore,
  } = project;

  // Build one slide per screenshot the project actually has (see `screenshots`
  // in AppConfig). Light variants always; dark ones only when `hasDark`.
  const shot = (i, variant) =>
    `/static/images/work/apps/${app}/screenshot_${i}_${variant}.webp`;
  const range = Array.from({ length: screenshots }, (_, i) => i + 1);
  const slides = range
    .map((i) => shot(i, "light"))
    .concat(hasDark ? range.map((i) => shot(i, "dark")) : []);

  return (
    <div className="flex justify-center my-12">
      <div className="max-w-[944px] w-full select-none px-7 md:px-5 lg:px-0">
        <Link
          to="/work"
          className="inline-flex items-center gap-1 text-sm font-semibold transition-colors text-accent-500 hover:text-blue-500 dark:hover:text-primary"
        >
          ← Back to Work
        </Link>

        <h1 className="mt-4 text-3xl font-black md:text-4xl text-accent-700 dark:text-accent-300">
          {name}
        </h1>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        )}

        {slug && (
          <p className="max-w-2xl mt-4 text-lg text-accent-600 dark:text-accent-400">
            {slug}
          </p>
        )}

        {(appStore || playStore || huaweiStore) && (
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <StoreLinks
              appStore={appStore}
              playStore={playStore}
              huaweiStore={huaweiStore}
            />
          </div>
        )}

        {slides.length > 0 && (
          <>
            <div className="hidden mt-10 md:block">
              <Swiper
                slidesPerView={1}
                lazy
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 30 },
                }}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                modules={[Autoplay, Navigation]}
              >
                {slides.map((src, i) => (
                  <SwiperSlide key={src}>
                    <FallbackImage
                      src={src}
                      alt={`${name} screenshot ${i + 1}`}
                      label={name}
                      className="w-full h-auto rounded-2xl"
                      wrapperClassName="w-full aspect-[9/19]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="block mt-10 md:hidden">
              <Swiper
                className="myswiper"
                effect={"cards"}
                grabCursor={true}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                modules={[Autoplay, EffectCards]}
              >
                {slides.map((src, i) => (
                  <SwiperSlide key={src}>
                    <FallbackImage
                      src={src}
                      alt={`${name} screenshot ${i + 1}`}
                      label={name}
                      className="w-full h-auto rounded-2xl"
                      wrapperClassName="w-full aspect-[9/19]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AppDetails;
