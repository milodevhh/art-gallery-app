import Image from "next/image";
import { styled } from "styled-components";

export default function ArtPieceDetails({ artPiece }) {
  return (
    <>
      <StyledArticle key={artPiece.slug}>
        <ImageWrapper>
          <StyledImage
            src={artPiece.imageSource}
            height={300}
            width={200}
            alt={artPiece.name}
          />
        </ImageWrapper>
        <p>{artPiece.name}</p>
        <p>{artPiece.artist}</p>
        <p>{artPiece.year}</p>
        <p>{artPiece.genre}</p>
      </StyledArticle>
    </>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  background-color: blue;
  width: 90%;
  height: 60vh;
`;
