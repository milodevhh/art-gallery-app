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
              <StyledButton>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
                </svg>
              </StyledButton>

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
  top: 0;
  position: absolute;
  width: 3rem;
  height: 3rem;
  border: none;
  background: transparent;
  & svg {
    fill: blue;
  }
`;
