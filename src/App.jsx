import './styles/index.css'
import Map from "./components/Map.jsx"
import SpotifyDisplay from './components/SpotifyDisplay.jsx';

export default function App() {
  return (
    <>
      <div className="h-screen p-4 flex bg-[#09090b]">
        <Map />
        <SpotifyDisplay />
      </div>
    </>
  );
}