import './styles/index.css'
import Map from "./components/Map.jsx"
import SpotifyDisplay from './components/SpotifyDisplay.jsx';
import MonkeyTypeDisplay from "./components/MonkeyType.jsx"; // Adjust the path if necessary


export default function App() {
  return (
    <>
      <div className="h-screen p-4 flex bg-[#09090b]">
        <Map />
        <SpotifyDisplay />
        <MonkeyTypeDisplay />
      </div>
    </>
  );
}