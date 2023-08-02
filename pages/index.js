import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces, artPiecesInfo, handleToggle }) {
  const isFavorite = artPiecesInfo.find(
    (artPieceInfo) => pieces.slug === artPieceInfo.slug
  )?.isFavorite;
  return (
    <>
      <h1>ART GALLERY</h1>
      <Spotlight
        pieces={pieces}
        isFavorite={isFavorite}
        handleToggle={handleToggle}
      />
    </>
  );
}
