import ArtPieces from "@/components/ArtPieces";

export default function FavoritePieces({
  pieces,
  handleToggle,
  artPiecesInfo,
}) {
  const onlyFavoritePieces = artPiecesInfo.filter(
    (artPieceInfo) => artPieceInfo.isFavorite === true
  );
  console.log(onlyFavoritePieces);
  return (
    <>
      {onlyFavoritePieces.length === 0 ? (
        "There are no favorites!"
      ) : (
        <ArtPieces
          pieces={pieces}
          handleToggle={handleToggle}
          artPiecesInfo={onlyFavoritePieces}
        />
      )}
    </>
  );
}
