import styled from "styled-components";

const rep = `
    width: 800px;
    height: 500px;
    border-radius: 10px;
`;

const flexCenter = `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Container = styled.div`
  ${rep};
  user-select: none;

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
    ${flexCenter};

    & .container-geral {
      ${flexCenter};
      justify-content: flex-start;
      background-color: rgba(0, 0, 0, 0.6);
      height: 90%;
      width: 90%;
      border-radius: 10px;
      gap: 10px;

      & .title-container {
        > p {
          color: var(--branco);
          font-size: 32px;
          font-weight: 700;
        }
      }

      & .img-container {
        width: 500px;
        height: 300px;
        border-radius: 10px;

        > img {
          width: 500px;
          height: 300px;
          border-radius: 10px;
        }
      }

      & .tec-container {
        color: var(--branco);
        display: flex;
        gap: 10px;

        & .item-container {
          border: 1px solid var(--branco);
          padding: 1px 6px;
          border-radius: 16px;
          font-size: 14px;
        }
      }

      & .btn-container {
        display: flex;
        gap: 20px;
        margin-top: 10px;

        > a {
          color: var(--branco);
          background-color: var(--verde);
          padding: 5px 15px;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 700px) {
    & .slide {
      & .container-geral {
        .img-container {
          width: 95%;
          ${flexCenter};

          > img {
            width: 95%;
            height: 90%;
          }
        }

        & .tec-container {
          & .item-container {
            padding: 1px 5px;
            font-size: 12px;
          }
        }
      }
    }
  }
`;