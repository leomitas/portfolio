import styled from "styled-components";

export const Section = styled.section`
  padding: 20px;
  display: flex;
  background-color: var(--color-grey-3);
  h2 {
    color: var(--color-primary);
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  span {
    font-weight: 700;
  }
  p {
    font-size: 20px;
    color: white;
  }
  .about-me {
    color: var(--color-secundary);
  }
  .techs {
    display: flex;
    flex-direction: row;
    gap: 30px;
    color: var(--color-white);
    padding: 10px;
    align-items: center;
    @media (max-width: 500px) {
      overflow-x: scroll;
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .formation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    width: 100%;
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
