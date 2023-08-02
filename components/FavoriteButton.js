import { styled } from "styled-components";

export default function FavoriteButton({ isFavorite, handleToggle, slug }) {
  console.log(isFavorite);

  return (
    <StyledButton
      onClick={() => {
        handleToggle(slug);
      }}
      isFavorite={isFavorite}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
      </svg>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: absolute;
  right: 12em;
  width: 3rem;
  height: 3rem;
  border: none;
  background: transparent;
  & svg {
    stroke: lightcoral;
    fill: ${(props) => (props.isFavorite ? "lightcoral" : "transparent")};
    stroke-width: 0.1rem;
  }
`;
