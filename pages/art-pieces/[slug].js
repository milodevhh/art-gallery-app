import ArtPieceDetails from "@/components/ArtPieceDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledLink } from "@/components/Navigation";

export default function ArtPieces({ pieces }) {
  const router = useRouter();
  const artPiece = pieces.find(({ slug }) => slug === router.query.slug);

  console.log(artPiece);

  return (
    <>
      <ArtPieceDetails artPiece={artPiece} />
      <StyledLink href="/art-pieces">back to all pieces</StyledLink>
    </>
  );
}
