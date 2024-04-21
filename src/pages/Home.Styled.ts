import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--preto-bg);
  width: 100%;
  height: 100%;

  & .header-container {
    position: sticky;
    top: 0;
    z-index: 9;
  }

  @media (max-width: 500px) {
    & .header-container {
    position: fixed;
    width: 100vw;
  }
  }
`;