import Landing from "../components/Landing.jsx";
import Map from "../components/Map.jsx";
import SpotifyDisplay from "../components/SpotifyDisplay.jsx";
import MonkeyTypeDisplay from "../components/MonkeyType.jsx";

import "../styles/index.css";

const Home = () => {
  return (
    <>
      <div className="flex flex-col bg-[#121212]">
        <section className="mb-8">
          <Landing />
        </section>
        <section className="h-screen flex flex-col lg:flex-row space-x-8 justify-center">
          <Map />
          <SpotifyDisplay />
          <MonkeyTypeDisplay />


        </section>
      </div>
    </>
  );
}

export default Home;