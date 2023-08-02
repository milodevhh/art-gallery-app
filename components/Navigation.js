import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">All Art Pieces</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  background-color: gray;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: white;
  text-decoration: none;
`;
