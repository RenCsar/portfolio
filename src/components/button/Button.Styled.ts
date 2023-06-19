import styled from "styled-components";
import { TLink } from "../../utils/types/types";

const Container = styled.div<TLink>`
  & button {
    background-color: ${(props) =>
    props.link == "" ? `var(--cinza)` : `var(--azul)`};
    color: var(--branco);
    border: none;
    border-radius: 5px;
    height: 35px;
    padding: 0px 20px;
    transition: 0.45s;

    cursor: ${(props) => (props.link == "" ? `not-allowed` : `pointer`)};

    &:hover {
      transform: ${(props) => (props.link == "" ? `scale(1)` : `scale(1.01)`)};
    }

    &:active {
      transform: ${(props) => (props.link == "" ? `scale(1)` : `scale(0.98)`)};
    }
  }
`;

export { Container };