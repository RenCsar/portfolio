import { Link } from "react-scroll";
import styled from "styled-components";

export const NavContainer = styled.nav`
  & ul {
    justify-content: space-between;
    display: flex;
    list-style-type: none;
    gap: 10px;
    width: 300px;
  }
`;

export const StyledNavLink = styled(Link)`
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
`;