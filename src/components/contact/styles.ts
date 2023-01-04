import styled from "styled-components";

export const ContactStyled = styled.div`
  display: flex;
  background-color: var(--color-grey-3);
  width: 100vw;
  padding: 10px 0;
  div {
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-white);
  }
`;
