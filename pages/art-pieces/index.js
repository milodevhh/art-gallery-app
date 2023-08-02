import ArtPieces from "@/components/ArtPieces";

export default function OverviewPage({ pieces, handleToggle, artPiecesInfo }) {
  return (
    <ArtPieces
      pieces={pieces}
      handleToggle={handleToggle}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
