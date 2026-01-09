import Navigation from "./components/Nav/Navigation";
import Banner from "./components/Banner/Banner";
import Intro from "./components/Intro/Intro";
import Projets from "./components/Projets/Projets"

export default function Home() {
  return (
      <main>
      <Navigation />
      <Banner />
      <Intro />
      <Projets />
      </main>
  );
}
