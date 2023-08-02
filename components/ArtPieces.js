import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieces({
  pieces,
  isFavorite,
  handleToggle,
  artPiecesInfo,
}) {
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

const StyledButton = styled.button`
  position: absolute;
  right: 12em;
  width: 3rem;
  height: 3rem;
  border: none;
  background: transparent;
  & svg {
    stroke: lightcoral;
    fill: none;
    stroke-width: 0.1rem;
  }
`;
