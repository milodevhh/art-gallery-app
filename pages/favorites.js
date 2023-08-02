import ArtPieces from "@/components/ArtPieces";

export default function FavoritePieces({
  pieces,
  handleToggle,
  artPiecesInfo,
}) {
  const OnlyFavoritePieces = artPiecesInfo.filter(
    (artPieceInfo) => artPieceInfo.isFavorite === true
  );
  return (
    <>
      {" "}
      {OnlyFavoritePieces.length === 0 ? (
        "There are no favorites!"
      ) : (
        <ArtPieces pieces={pieces} handleToggle={handleToggle} />
      )}
    </>
  );
}
