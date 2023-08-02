import Image from "next/image";
import { styled } from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({
  artPiece,
  isFavorite,
  handleToggle,
}) {
  console.log(artPiece.slug);
  return (
    <>
      <StyledArticle key={artPiece.slug}>
        <ImageWrapper>
          <FavoriteButton
            handleToggle={handleToggle}
            slug={artPiece.slug}
            isFavorite={isFavorite}
          />
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
  position: relative;
  background-color: blue;
  width: 90%;
  height: 60vh;
`;
