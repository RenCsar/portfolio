import styled from "styled-components";

export const Container = styled.div`
  & a {
    text-decoration: none;
  };

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px;
    border-radius: 16px;
    height: 35px;
    padding: 0px 20px;
    cursor: pointer;
    transition: 0.45s;

    &:hover {
      transform: scale(1.01);
    };

    &:active {
      transform: scale(0.98);
    };
  }
`;