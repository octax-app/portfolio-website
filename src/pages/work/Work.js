import AppSection from "./components/app_section/AppSection";

function Work() {
  return (
    <div className="Work">
      <AppSection
        name="SEA HORSE LINE"
        label="seahorseline"
        slug="a powerful cross-platform mobile application tailor-made for a leading car marine shipping company. This app offers a seamless shipping experience with its feature-rich design, including dark mode, support for six languages, an invoices section, and secure areas..."
        hasDark
        isDark={localStorage.theme === "dark"}
      />
      <AppSection
        name="EZ Card"
        label="ezcard"
        slug="a cutting-edge cross-platform e-commerce provide digital store cards. This dynamic application offers users a seamless shopping experience with an elegant dark mode interface. It boasts many secure payment methods including Apple Pay and Google Pay, allowing customers to pay with ease..."
        hasDark
        isDark={localStorage.theme === "dark"}
      />
      <AppSection
        name="FANAJEEN"
        label="fanajeen"
        slug="a sleek cross-platform e-commerce app, tailored for those who have a deep passion for coffee cups and it's accessories. With a user-friendly interface and seamless navigation, FANAJEEN makes shopping for your favorite coffee-related items a breeze..."
      />
    </div>
  );
}

export default Work;
