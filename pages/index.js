import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces, artPiecesInfo, handleToggle }) {
  return (
    <>
      <h1>ART GALLERY</h1>
      <Spotlight
        pieces={pieces}
        handleToggle={handleToggle}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
