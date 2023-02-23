import styled from "styled-components";

export const Section = styled.section`
  padding: var(--padding-central);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url("https://i.imgur.com/XHHcits.png");
  height: 800px;

  > h1 {
    color: var(--verde);
    font-size: 32px;
    border-bottom: 2px solid var(--verde);
    margin-bottom: 20px;
  }

  & .carousel-container {
    height: 530px;
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 1000px) {
    padding: var(--padding-600);
  }

  @media (max-width: 600px) {
    padding: var(--padding-400);
    height: 720px;
  }
`;