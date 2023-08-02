import ArtPieceDetails from "@/components/ArtPieceDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledLink } from "@/components/Navigation";

export default function ArtPieces({ pieces, handleToggle, artPiecesInfo }) {
  const router = useRouter();
  const artPiece = pieces.find(({ slug }) => slug === router.query.slug);
  const isFavorite = artPiecesInfo.find(
    (artPieceInfo) => artPiece.slug === artPieceInfo.slug
  )?.isFavorite;

  return (
    <>
      <ArtPieceDetails
        artPiece={artPiece}
        handleToggle={handleToggle}
        isFavorite={isFavorite}
      />
      <StyledLink href="/art-pieces">back to all pieces</StyledLink>
    </>
  );
}
