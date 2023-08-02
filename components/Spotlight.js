import Image from "next/image";
import { styled } from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({ pieces, handleToggle, artPiecesInfo }) {
  const index = Math.floor(Math.random() * pieces.length);
  const isFavorite = artPiecesInfo.find(
    (artPieceInfo) => pieces[index].slug === artPieceInfo.slug
  )?.isFavorite;

  console.log(isFavorite);
  return (
    <StyledArticle key={pieces[index].slug}>
      <ImageWrapper>
        <FavoriteButton
          handleToggle={handleToggle}
          slug={pieces[index].slug}
          isFavorite={isFavorite}
        />
        <StyledImage
          src={pieces[index].imageSource}
          height={300}
          width={200}
          alt={pieces[index].name}
        />
      </ImageWrapper>
      <h3>{pieces[index].artist}</h3>
      <p>Just a famous Artist for you...</p>
    </StyledArticle>
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
