import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieces({ pieces, handleToggle, artPiecesInfo }) {
  return (
    <>
      <h1> List of all Art Pieces</h1>
      <ul>
        {pieces.map((piece) => {
          return (
            <StyledListItem key={piece.slug}>
              <FavoriteButton
                slug={piece.slug}
                isFavorite={
                  artPiecesInfo.find(
                    (artPieceInfo) => piece.slug === artPieceInfo.slug
                  )?.isFavorite
                }
                handleToggle={handleToggle}
                artPiecesInfo={artPiecesInfo}
              />
              <Link href={`art-pieces/${piece.slug}`}>
                <Image
                  src={piece.imageSource}
                  height={300}
                  width={200}
                  alt={piece.name}
                />
                <h2>{piece.name}</h2>
                <h3>{piece.artist}</h3>
              </Link>
            </StyledListItem>
          );
        })}
      </ul>
    </>
  );
}

const StyledListItem = styled.li`
  position: relative;
  list-style: none;
  margin-bottom: 2rem;
`;
