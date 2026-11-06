import Hero from "./components/hero/Hero";
import StatsBand from "./components/stats/StatsBand";
import CatalogPreview from "./components/catalog/CatalogPreview";
import PipelinePreview from "./components/pipeline/PipelinePreview";
import { Demos, OpenSource } from "./components/demos/DemosAndOpenSource";
import FounderCard from "./components/founder/FounderCard";
import CtaCard from "./components/cta/CtaCard";
import Seo from "../../shared/Seo";

function Home() {
  return (
    <div className="Home">
      <Seo description="Octax is a product studio founded by Haitham Al-Abdullah. We design, build and run mobile apps, web platforms and open-source tools, including OneERP, Octax Solobill and Open Pass." />
      <Hero />
      <StatsBand />
      <CatalogPreview />
      <PipelinePreview />
      <Demos />
      <OpenSource />
      <FounderCard />
      <CtaCard />
    </div>
  );
}

export default Home;
