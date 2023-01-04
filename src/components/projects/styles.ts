import styled from "styled-components";

export const ProjectsStyled = styled.div`
  width: 100vw;
  .border {
    width: 100%;
    border-bottom: 4px solid var(--color-primary);
  }
`;

export const Project = styled.div`
  display: flex;
  gap: 5px;
  color: var(--color-white);
  padding: 15px 0;
  img {
    width: 50%;
  }
  a {
    color: var(--color-primary);
    width: max-content;
  }
  .div-below {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }
  .list-disc {
    padding: 0 20px;
    li {
      list-style: disc;
    }
  }
  .w-50 {
    width: 50%;
  }
  .size-18 {
    font-size: 18px;
  }
  .color-silver {
    color: var(--color-secundary);
  }
  .github {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
  }
`;
