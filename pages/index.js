import Spotlight from "@/components/Spotlight";
import Navigation from "@/components/Navigation";

export default function SpotlightPage({ pieces }) {
  return (
    <>
      <h1>ART GALLERY</h1>
      <Spotlight pieces={pieces} />
      <h2>Just a famous Artist for you</h2>
      <Navigation />
    </>
  );
}
