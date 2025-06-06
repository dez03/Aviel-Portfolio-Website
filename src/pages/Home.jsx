import Landing from "../components/Landing.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Map from "../components/Map.jsx";
import SpotifyDisplay from "../components/SpotifyDisplay.jsx";
import MonkeyTypeDisplay from "../components/MonkeyType.jsx";
import GithubChart from "../components/GithubChart.jsx";
import CodingTimer from "../components/CodingTimer.jsx";

import "../styles/index.css";

const stats = [
  { title: "Next.js & React", note: "Production apps shipped", value: "92%" },
  { title: "AWS & DevOps", note: "Lambda, CI/CD", value: "80%" },
  { title: "Hackathons run", note: "SimpliHacks + UnionHacks", value: "3" },
];


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
          <div className="grid w-full gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Map />
            <SpotifyDisplay />
            <MonkeyTypeDisplay />
          </div>
          <div className="w-full">
            <GithubChart />
          </div>
        </section>

        <section className="flex items-center justify-center w-full max-w-[1080px] mx-auto mb-20">
        <div className="flex flex-col gap-8">
          {stats.map(({ title, note, value }) => (
            <div
              key={title}
              className="flex justify-between items-center bg-[#E4FF1A] text-black rounded-2xl p-6"
            >
              <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-lg">{note}</p>
              </div>
              <div className="text-6xl font-extrabold">{value}</div>
            </div>
          ))}
        </div>
        <CodingTimer />
        </section>
      </div>
    </>
  );
}

export default Home;