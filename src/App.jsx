import './styles/index.css'
import Map from "./components/Map.jsx"
import SpotifyDisplay from './components/SpotifyDisplay.jsx';

export default function App() {
  return (
    <>
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home</h1>

      
    </div>

    <Map />
    <SpotifyDisplay />
    </>
  );
}