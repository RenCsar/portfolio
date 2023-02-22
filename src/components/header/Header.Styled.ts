import styled from "styled-components";

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.header`
  ${flexCenter};
  justify-content: space-between;
  width: 100%;
  padding: 10px 25px;
  background-color: var(--preto-bg);

  & .logo-container {
    & img {
      height: 46px;
      width: 158px;
    }
  }

  & .nav-container {
    & ul {
      justify-content: space-between;
      display: flex;
      list-style-type: none;
      gap: 10px;
      width: 300px;

      & li {
        & .nav-item {
          cursor: pointer;
          color: white;
        }
      }
    }
  }
`;