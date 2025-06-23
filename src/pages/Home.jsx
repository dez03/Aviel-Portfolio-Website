import Landing from "../components/Landing.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Map from "../components/Map.jsx";
import SpotifyDisplay from "../components/SpotifyDisplay.jsx";
import MonkeyTypeDisplay from "../components/MonkeyType.jsx";
import CurrentlyAt from "../components/CurrentlyAt.jsx";
import GithubChart from "../components/GithubChart.jsx";
import CodingTimer from "../components/CodingTimer.jsx";

import "../styles/index.css";

const stats = [
  { title: "Next.js & React", note: "Production apps shipped", value: "92%" },
  { title: "AWS & DevOps", note: "Lambda, CI/CD", value: "80%" },
  { title: "Hackathons Run and Won", note: "800+ Participants, $250,000+ in Prizes, $7000+ Raised, 27 Sponsors", value: "7" },
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
            <CurrentlyAt />

          </div>
          <div className="w-full">
            <GithubChart />
          </div>
        </section>

        <section className="w-full max-w-[1080px] mx-auto mb-20">
          {/* ── Two‑column intro text ─────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
              I turn relentless curiosity into code that makes life easier—learning from every book, byte, and conversation along the way.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
              I'm a Computer&nbsp;Science &amp; Philosophy undergrad at <span className="whitespace-nowrap">UC&nbsp;Santa&nbsp;Cruz</span>, an Amazon Future Engineer scholar, and an incoming AWS SDE intern. Organizing 400‑person hackathons, shipping side‑projects like <em>bioTunes</em> and the award‑winning <em>Echo&nbsp;Journal</em>, and competing in D1A rugby have taught me to merge rigorous engineering with real‑world impact.
            </p>
          </div>

          {/* ── Stats cards + coding timer ───────────────────────── */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex flex-col gap-8 w-full md:w-auto">
              {stats.map(({ title, note, value }) => (
                <div
                key={title}
                className="sticky top-[120px] z-[${10 + index}] bg-[#E4FF1A] text-black rounded-2xl p-6 shadow-xl"
              >
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-lg">{note}</p>
                <div className="text-6xl font-extrabold mt-2">{value}</div>
              </div>
              ))}
            </div>

            {/* Coding timer sits to the right on desktop, below on mobile */}
            <CodingTimer />
          </div>
        </section>

        
      </div>
    </>
  );
}

export default Home;