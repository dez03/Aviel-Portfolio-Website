import Landing from "../components/Landing.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Map from "../components/Map.jsx";
import SpotifyDisplay from "../components/SpotifyDisplay.jsx";
import MonkeyTypeDisplay from "../components/MonkeyType.jsx";
import GithubChart from "../components/GithubChart.jsx";

import "../styles/index.css";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <section className="mb-20">
          <Landing />
        </section>

        {/* About Line Section */}
        <section className="mb-8">
          <AboutSection />
        </section>

        <section className="flex flex-col items-center w-full max-w-[1080px] mx-auto gap-8 pb-8">
          <div className="flex flex-wrap justify-center gap-8 w-full">
            <div className="flex-1 min-w-[280px] max-w-[350px]">
              <Map />
            </div>
            <div className="flex-1 min-w-[280px] max-w-[350px]">
              <SpotifyDisplay />
            </div>
            <div className="flex-1 min-w-[280px] max-w-[350px]">
              <MonkeyTypeDisplay />
            </div>
          </div>
          <div className="w-full">
            <GithubChart />



          </div>
        </section>
      </div>
    </>
  );
}

export default Home;