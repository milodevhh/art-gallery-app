import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces, artPiecesInfo, handleToggle }) {
  return (
    <>
      <Spotlight
        pieces={pieces}
        handleToggle={handleToggle}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
