import styled from "styled-components";

const gradiente = `
    background: -webkit-linear-gradient(#15cdcb, #5280e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const flex = `
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Container = styled.section`
  padding: var(--padding-central);
  padding-top: 100px;
  ${flex}
  height: 585px;
  gap: 20px;

  & h2 {
    margin-bottom: 20px;
    font-size: 32px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-image: -webkit-linear-gradient(#15cdcb, #5280e2) 1;
    ${gradiente};
  }

  & .content {
    ${flex}
    gap: 20px;

    & p {
      color: var(--branco);
    }

    & h3 {
      ${gradiente}
      font-size: 40px;
    }

    & .text-container {
      & :nth-child(1) {
        width: 600px;
        text-align: center;
        margin-bottom: 20px;
      }
    }

    & :nth-child(4) {
      ${gradiente};
    }
  }

  @media (max-width: 650px) {
    padding: var(--padding-400);   

    & .content {
      & h3 {
        font-size: 28px;
      }

      & .text-container {
        & :nth-child(1) {
          width: 95%;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: var(--padding-400);
    justify-content: center;
    height: 87vh;
  }

  @media (max-width: 400px) {
    padding: var(--padding-400);

    & .content {
      & h3 {
        font-size: 22px;
      }

      & .text-container {
        & :nth-child(1) {
          width: 95%;
        }
      }
    }
  }
`;