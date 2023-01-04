import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 1.25rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h2 {
    font-size: 22px;
    font-weight: 700;
    color: var(--color-primary);
  }
  nav {
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;
    a {
      color: var(--color-secundary);
      font-weight: 700;
      font-size: 1.125rem;
    }
    a:hover {
      color: var(--color-primary);
      border-bottom: 2px solid var(--color-primary);
    }
  }
`;
