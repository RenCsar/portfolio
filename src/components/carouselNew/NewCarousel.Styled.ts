import styled from "styled-components";

const rep = `
  width: 1000px;
  height: 400px;
  border-radius: 10px;
`;

const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

const imgSize = `
  height: 250px;
`;

const imgConfig = `
  ${imgSize}
  width: 400px;
  border-radius: 10px;
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
      justify-content: space-between;
      height: 100%;
      width: 90%;
      border-radius: 10px;
      gap: 25px;

      & .col-1,
      & .col-2 {
        ${flexCenter}
        flex-direction: column;
        width: 100%;
        height: 300px;
      }

      & .col-1 {
        gap: 10px;
        & .img-container {
          ${imgConfig}

          > img {
            ${imgConfig}
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
      }

      & .col-2 {
        ${imgSize}
        justify-content: flex-start;
        align-items: flex-start;

        & .title-container {
          > p {
            color: var(--branco);
            font-size: 32px;
            font-weight: 700;
          }
        }

        & .descricao {
          ${flexCenter}
          align-items: flex-start;
          color: var(--branco);
          font-size: 15px;
          width: 420px;
          min-height: 100px;
        }

        & .btn-container {
          display: flex;
          gap: 20px;

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