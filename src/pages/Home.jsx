import Landing from "../components/Landing.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Map from "../components/Map.jsx";
import SpotifyDisplay from "../components/SpotifyDisplay.jsx";
import MonkeyTypeDisplay from "../components/MonkeyType.jsx";

import "../styles/index.css";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <section className="mb-20">
          <Landing />
        </section>

        <section className="mb-8">
          <AboutSection />
        </section>
        <section className="flex flex-col lg:flex-row space-x-8 justify-center">
          <Map />
          <SpotifyDisplay />
          <MonkeyTypeDisplay />


        </section>
      </div>
    </>
  );
}

export default Home;