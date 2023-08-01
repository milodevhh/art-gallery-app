import Navigation from "./Navigation";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Container>{children}</Container>
      <Navigation />
    </>
  );
}

const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 60rem;
  flex-direction: column;
  padding: 5rem 1rem;
  gap: 1rem;
`;
