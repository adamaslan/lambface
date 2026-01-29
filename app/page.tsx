import Header from "./components/Header";
import Footer from "./components/Footer";
import CanvasPanel from "./components/CanvasPanel";
import IdentityScreen from "./components/screens/IdentityScreen";
import SoundCloudScreen from "./components/screens/SoundCloudScreen";
import ShowsScreen from "./components/screens/ShowsScreen";
import MixcloudScreen from "./components/screens/MixcloudScreen";
import LeftBuildings from "./components/buildings/LeftBuildings";
import RightBuildings from "./components/buildings/RightBuildings";

export default function Page() {
  return (
    <main className="min-h-screen relative bg-[#05050a]">
      <Header />

      <LeftBuildings />
      <RightBuildings />

      <CanvasPanel>
        <IdentityScreen />
        <SoundCloudScreen />
        <MixcloudScreen />
        <ShowsScreen />
      </CanvasPanel>

      <Footer />
    </main>
  );
}