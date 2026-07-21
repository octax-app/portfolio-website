import { App as Config } from "../../config/AppConfig";
import PageHeader from "../../shared/PageHeader";
import CategorySection from "./components/CategorySection";

function Work() {
  return (
    <div className="Work pb-24">
      <PageHeader
        eyebrow="Portfolio"
        title="Selected Work"
        subtitle={Config.Work.Intro}
      />

      {Config.Work.Categories.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Work;
