import styled from "styled-components";

const rep = `
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const Container = styled.div`
  ${rep};

  & .mySwiper {
    ${rep};

    & .swiper-button-next::after,
    .swiper-button-prev::after {
      color: var(--verde);
    }

    & .swiper-pagination-bullet-active {
      background-color: var(--verde);
    }
  }

  & .slide {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & .tec-container {
      color: var(--branco);
      display: flex;
      gap: 10px;

      & .item-container {
        border: 1px solid var(--branco);
        padding: 1px 6px;
        border-radius: 16px;
      }
    }
  }
`;