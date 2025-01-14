import Landing from "../components/Landing.jsx";
import Map from "../components/Map.jsx";
import SpotifyDisplay from "../components/SpotifyDisplay.jsx";
import MonkeyTypeDisplay from "../components/MonkeyType.jsx";

export default function Home() {
  return (
    <>
      <div className='flex flex-col bg-[#09090b]'>
        <section className='mb-8'>
          <Landing />
        </section>
        <section className="h-screen p-4 flex space-x-8">
          <Map />
          <SpotifyDisplay />
          <MonkeyTypeDisplay />
        </section>
      </div>
    </>
  );
}