import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  div {
    display: flex;
    gap: 20px;
  }
  p:first-child {
    color: var(--color-white);
    background-color: var(--color-primary);
    padding: 5px;
    border-radius: 4px;
  }
  img {
    max-width: 300px;
  }
  .text {
    color: var(--color-white);
    font-size: 18px;
    width: 60%;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  .cv {
    cursor: pointer;
    font-weight: 500;
    border-radius: 4px;
    padding: 10px 22px;
    background-color: var(--color-secundary);
    color: var(--color-primary);
  }
  .cv:hover {
    background-color: var(--color-primary);
    color: var(--color-secundary);
  }
  .links {
    display: flex;
    flex-direction: row;
  }
`;
