import Hero from "./components/hero/Hero";
import FeatureCards from "./components/feature_cards/FeatureCards";
import StatsBand from "./components/stats/StatsBand";
import BuildCards from "./components/build/BuildCards";
import StackCard from "./components/stack/StackCard";
import CtaCard from "./components/cta/CtaCard";

function Home() {
  return (
    <div className="Home pb-24">
      <Hero />
      <FeatureCards />
      <StatsBand />
      <BuildCards />
      <StackCard />
      <CtaCard />
    </div>
  );
}

export default Home;
