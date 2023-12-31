import { styled } from "styled-components";
/* 2. Möglichkeit um das svg in spotlight einzubinden: 
function HeartIcon({ isFavorite }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="lightcoral"
      strokeWidth="0.1rem"
      fill={isFavorite ? "lightcoral" : "transparent"}
    >
      <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
    </svg>
  );
}
 */
export default function FavoriteButton({ isFavorite, handleToggle, slug }) {
  return (
    <StyledButton
      onClick={() => {
        handleToggle(slug);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="lightcoral"
        strokeWidth="0.1rem"
        fill={isFavorite ? "lightcoral" : "transparent"}
      >
        <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
      </svg>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: absolute;
  right: 0.5rem;
  width: 3rem;
  height: 3rem;
  border: none;
  background: transparent;
`;

// für 2.Möglichkeit: <HeartIcon isFavorite={isFavorite} />
