import Hero from "./components/hero/Hero";
import InfoCards from "./components/info_cards/InfoCards";
import Slug from "./components/big_slug/Slug";
import FirstSection from "./components/sections/FirstSection";
import SecondSection from "./components/sections/SecondSection";
import ThirdSection from "./components/sections/ThirdSection";

function Home() {
  return (
    <div className="Home ">
      <Hero />
      <InfoCards/>
      <Slug />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default Home;
