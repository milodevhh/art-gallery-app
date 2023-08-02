import ArtPieces from "@/components/ArtPieces";

export default function FavoritePieces({
  pieces,
  handleToggle,
  artPiecesInfo,
}) {
  const onlyFavoritePieces = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );

  ///*  1. Ziel = Wir wollen wissen welche pieces sind favorite
  // Durchsuchen des Arrays (Datensatz) Key/Value Pärchen
  // Dieses Array wollen wir filtern
  // Im State haben wir die Info tur/False Heart SVG
  // Welche Pieces im Pieces Array haben True/False?
  // ArtPiecesInfo (State) mit .find suchen wir den piece
  // Wenn true dann gib Objekt aus
  // .filter wenn find ein undifined hat - das fällt weg */

  console.log(onlyFavoritePieces);
  return (
    <>
      {onlyFavoritePieces.length === 0 ? (
        "There are no favorites!"
      ) : (
        <ArtPieces
          pieces={onlyFavoritePieces}
          handleToggle={handleToggle}
          artPiecesInfo={artPiecesInfo}
        />
      )}
    </>
  );
}
