import styled from "styled-components";

export const Container = styled.div`
  & button {
    background-color: var(--azul);
    color: var(--branco);
    border: none;
    border-radius: 8px;
    height: 35px;
    padding: 0px 20px;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;
