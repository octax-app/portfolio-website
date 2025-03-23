import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

import "./AppDetails.css";


import { useEffect } from "react";

function AppDetails() {
  const { app } = useParams();

  useEffect(() => {
    
  
  }, [])
  

  return (
    <div className="flex items-center justify-center my-12">
      <div className="max-w-[944px] w-full select-none px-5">
        <div className="hidden md:block">
          <Swiper
            slidesPerView={1}
            lazy
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
          >
            {Array.apply(null, { length: 3 }).map((e, i) => (
              <SwiperSlide>
                <img
                  src={`/static/images/work/${app}/screenshot_${
                    i + 1
                  }_light.png`}
                  alt={app}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
            {Array.apply(null, { length: 3 }).map((e, i) => (
              <SwiperSlide>
                <img
                  src={`/static/images/work/${app}/screenshot_${
                    i + 1
                  }_dark.png`}
                  alt={app}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="block md:hidden">
          <Swiper
            className="myswiper"
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCards]}
          >
            {Array.apply(null, { length: 3 }).map((e, i) => (
              <SwiperSlide>
                <img
                  src={`/static/images/work/${app}/screenshot_${
                    i + 1
                  }_light.png`}
                  alt={app}
                />
              </SwiperSlide>
            ))}
            {Array.apply(null, { length: 3 }).map((e, i) => (
              <SwiperSlide>
                <img
                  src={`/static/images/work/${app}/screenshot_${
                    i + 1
                  }_dark.png`}
                  alt={app}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default AppDetails;

