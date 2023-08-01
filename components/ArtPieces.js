import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1> List of all Art Pieces</h1>
      <ul>
        {pieces.map((piece) => {
          return (
            <StyledListItem key={piece.slug}>
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
  list-style: none;
  margin-bottom: 2rem;
`;
