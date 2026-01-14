import Navigation from "./components/Nav/Navigation";
import Banner from "./components/Banner/Banner";
import Intro from "./components/Intro/Intro";
import Projets from "./components/Projets/Projets"
import Review from "./components/Review/Review";
import LogoSkills from "./components/LogoSkills/LogoSkills";
import Experience from "./components/Experience/Experience";
import Approche from "./components/Approche/Approche";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
      <main>
      <Navigation />
      <Banner />
      <Intro />
      <Projets />
      <Review />
      <LogoSkills />
      <Experience />
      <Approche />
      <Contact />
      <Footer />
      </main>
  );
}
