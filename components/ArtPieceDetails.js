import Image from "next/image";
import { styled } from "styled-components";
import FavoriteButton from "./FavoriteButton";
import CommentForm from "./CommentForm";

export default function ArtPieceDetails({
  artPiece,
  isFavorite,
  handleToggle,
  setArtPiecesInfo,
  artPiecesInfo,
}) {
  function handleSubmitComment(event) {
    event.preventDefault();

    const comment = event.target.commentInput.value;
    console.log(comment);
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, comment: comment } : info
        );
      }
    });
    console.log(artPiecesInfo);
  }

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
      <CommentForm onSubmitComment={handleSubmitComment} />
      {/*<Comments /> */}
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
