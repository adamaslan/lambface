import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CanvasPanel from "./components/CanvasPanel";
import IdentityScreen from "./components/screens/IdentityScreen";
import SoundCloudScreen from "./components/screens/SoundCloudScreen";
import ShowsScreen from "./components/screens/ShowsScreen";
import MixcloudScreen from "./components/screens/MixcloudScreen";
import LeftBuildings from "./components/buildings/LeftBuildings";
import RightBuildings from "./components/buildings/RightBuildings";

/**
 * The main page component.
 *
 * This component renders the main page of the web application,
 * including the header, left and right buildings, the canvas panel,
 * and the footer.
 */
export default function Page() {
  return (
    <>
      <Head>
        <meta property="og:video" content="https://lambface.nuwrrrld.com/lamb2.mp4" />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
      </Head>

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
    </>
  );
}