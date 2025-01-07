import './styles/index.css'
import Map from "./components/Map.jsx"
import SpotifyDisplay from './components/SpotifyDisplay.jsx';

export default function App() {
  return (
    <>
    <div className="p-4 flex">
      <Map />
      <SpotifyDisplay />
    </div>
    </>
  );
}