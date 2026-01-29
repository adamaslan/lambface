import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CanvasPanel from "./components/CanvasPanel";
import IdentityScreen from "./components/screens/IdentityScreen";
import SoundCloudScreen from "./components/screens/SoundCloudScreen";
import ShowsScreen from "./components/screens/ShowsScreen";
import MixcloudScreen from "./components/screens/MixcloudScreen";
import LeftBuildings from "./components/buildings/LeftBuildings";
import RightBuildings from "./components/buildings/RightBuildings";

export const metadata: Metadata = {
  title: "lambface",
  description: "lambface - Electronic Music Producer & DJ. Check here for mylatest releases, mixes, and upcoming shows.",
  openGraph: {
    title: "lambface",
    description: "lambface - Electronic Music Producer & DJ. Check here for my latest releases, mixes, and upcoming shows.",
    url: "https://lambface.nuwrrrld.com",
    type: "website",
    videos: [
      {
        url: "https://lambface.nuwrrrld.com/lamb2.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
      },
    ],
  },
};

/**
 * The main page component.
 *
 * This component renders the main page of the web application,
 * including the header, left and right buildings, the canvas panel,
 * and the footer.
 */
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