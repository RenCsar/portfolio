import styled from "styled-components";

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.footer`
  ${flexCenter}
  flex-direction: column;
  color: var(--branco);
  padding: 15px 0px;

  & .icon-container {
    ${flexCenter}
    gap: 10px;
    margin-top: 10px;

    & a {
      transition: 0.3s;
    }
    
    & :hover {
      transform: scale(1.015);
    }
  }
`;