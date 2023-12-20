import styled from "styled-components";
import { flexCenter, gradiente } from "../../utils/globalStyledComponents";

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
          transition: 0.75s all;

          &.active {
            ${gradiente};
            text-shadow: 0 0 0.125em #15cdcb, 0 0 1em #5280e2;
          }

          &:hover {
            transition: 0.75s all;
            ${gradiente};
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