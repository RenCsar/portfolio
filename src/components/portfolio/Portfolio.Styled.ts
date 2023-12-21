import styled from "styled-components";
import { flexCenter } from "../../utils/globalStyledComponents";

export const Section = styled.section`
  padding: var(--padding-central);
  ${flexCenter}
  flex-direction: column;
  background: url("https://i.imgur.com/XHHcits.png");
  min-height: 100vh;

  & h1 {
    color: var(--verde);
    font-size: 32px;
    border-bottom: 2px solid var(--verde);
    margin-bottom: 20px;
    margin-top: var(--header-height);
  }

  & .carousel-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    padding: var(--padding-600);
    justify-content: flex-start;
    height: 800px;
  }

  @media (max-width: 600px) {
    padding: var(--padding-400);
  }

  @media (max-width: 330px) {
    justify-content: center;
  }
`;