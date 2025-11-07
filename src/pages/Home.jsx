import Landing from "../components/Landing.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Map from "../components/Map.jsx";
import SpotifyDisplay from "../components/SpotifyDisplay.jsx";
import MonkeyTypeDisplay from "../components/MonkeyType.jsx";
import CurrentlyAt from "../components/CurrentlyAt.jsx";
import GithubChart from "../components/GithubChart.jsx";
import CodingTimer from "../components/CodingTimer.jsx";
import TechStack from "../components/TechStack.jsx"
import NJOutline from "../assets/NJ-Outline.svg";

import "../styles/index.css";

const stats = [
  { title: "Next.js & React", note: "Production apps shipped", value: "92%" },
  { title: "AWS & DevOps", note: "Lambda, CI/CD", value: "80%" },
  { 
    title: "Hackathons Organized", 
    note: "800+ Participants, $349,204+ in Prizes, $7000+ Raised, 31 Sponsors, 130+ Project Submissions", 
    value: "2" 
  },
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

        <section className="flex flex-col items-center w-full max-w-[1080px] mx-auto gap-6 pb-8">
          <div className="grid w-full gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Map />
            <SpotifyDisplay />
            <MonkeyTypeDisplay />
            <CurrentlyAt />
            <TechStack />

          </div>
          <div className="w-full">
            <GithubChart />
          </div>
        </section>

        <section className="w-full max-w-[1080px] mx-auto mb-20">
          {/* ── Two‑column intro text ─────────────────────────────── */}
          <div className="max-w-3xl mx-auto text-center mb-12 px-4">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              I'm Aviel, a computer science & philosophy undergrad at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan font-semibold">UC&nbsp;Santa&nbsp;Cruz</span>. Originally from <span className="inline-flex items-center justify-center gap-1.5">New Jersey<img src={NJOutline} alt="New Jersey" className="inline-block h-[1.3em] w-auto font-semibold opacity-90" /></span>, I moved out to California to open up my world to a different atmosphere and new opportunities. 
            </p>

            {/* <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              I love to code, workout, read, and solve Rubik’s Cubes.
              an Amazon Future Engineer scholar, and a previous AWS SDE intern. Organizing 400‑person hackathons, shipping side‑projects like <em className="text-primary-400">bioTunes</em> and the award‑winning <em className="text-primary-400">Mindweave.org</em>, and competing in D1A rugby have taught me to merge rigorous engineering with real‑world impact.
            </p> */}
          </div>

          {/* ── Stats cards + coding timer ───────────────────────── */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="flex flex-col gap-6 w-full lg:w-auto">
              {stats.map(({ title, note, value }, index) => (
                <div
                  key={title}
                  className="sticky top-[120px] bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 z-10 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-4">{note}</p>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan text-5xl md:text-6xl font-extrabold">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coding timer sits to the right on desktop, below on mobile */}
            <div className="w-full lg:w-auto lg:max-w-md">
              <CodingTimer />
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
}

export default Home;