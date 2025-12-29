import Image from "next/image";
import Navigation from "./components/Nav/Navigation";
import Banner from "./components/Banner/Banner"
import Intro from "./components/Intro/Intro";
export default function Home() {
  return (
      <main>
      <Navigation />
      <Banner />
      <Intro />
      </main>
  );
}
