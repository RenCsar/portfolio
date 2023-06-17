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
  padding: var(--padding-central);
  height: 50px;

  & .logo-container {
    display: flex;
    align-items: center;

    & img {
      height: 35px;
      width: 120px;
    }
  }

  & .nav-container {
    & ul {
      & li {
        & .nav-item {
          cursor: pointer;
          color: white;
          user-select: none;

          &.active {
            color: var(--azul);
          }

          &:hover {
            color: var(--azul);
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    justify-content: center;

    & .logo-container {
      display: none;
    }
  }
`;