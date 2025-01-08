import './styles/index.css'
import Landing from "./components/Landing.jsx"
import Map from "./components/Map.jsx"
import SpotifyDisplay from './components/SpotifyDisplay.jsx';
import MonkeyTypeDisplay from "./components/MonkeyType.jsx"; // Adjust the path if necessary


export default function App() {
  return (
    <>
      <div className="h-screen p-4 flex space-x-8 bg-[#09090b]">
        <Landing />
        <Map />
        <SpotifyDisplay />
        <MonkeyTypeDisplay />
      </div>
    </>
  );
}