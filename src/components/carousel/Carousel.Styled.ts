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
        gap: 10px;

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

  @media (max-width: 1000px) {
    & .mySwiper {
      width: 600px;
      height: 600px;
    }

    & .slide {
      & .container-geral {
        flex-direction: column;
        justify-content: center;

        & .col-2 {
          width: 400px;
        }
      }
    }
  }

  @media (max-width: 700px) {
    & .mySwiper {
      width: 500px;
    }
  }

  @media (max-width: 600px) {
    & .mySwiper {
      width: 500px;
    }
  }

  @media (max-width: 500px) {
    & .mySwiper {
      width: 390px;
      height: 550px;

      & .swiper-button-next::after,
    .swiper-button-prev::after {
      color: var(--verde);
      display: none;
    }
    }

    & .container-geral {
      gap: 5px !important;
      justify-content: flex-start !important;

      & .col-1 {
        gap: 10px;
        & .img-container {
          height: 200px !important;
          width: 320px !important;

          > img {
            height: 200px !important;
            width: 320px !important;
          }
        }

        & .tec-container {
          gap: 10px;

          & .item-container {
            padding: 1px 6px;
            font-size: 14px;
          }
        }
      }

      & .col-2 {
        gap: 10px;
        width: 320px !important;

        & .title-container {
          > p {
            font-size: 20px !important;
          }
        }

        & .descricao {
          font-size: 13px !important;
          width: 320px !important;
        }
      }
    }
  }

  @media (max-width: 400px) {
    & .mySwiper {
      width: 340px;
    }

    & .container-geral {
      gap: 5px !important;

      & .col-1 {
        height: 230px !important;

        & .img-container {
          height: 150px !important;
          width: 270px !important;

          > img {
            height: 150px !important;
            width: 270px !important;
          }
        }

        & .tec-container {
          & .item-container {
            font-size: 11px !important;
          }
        }
      }

      & .col-2 {
        width: 270px !important;
        gap: 12px !important;

        & .title-container {
          > p {
            font-size: 18px !important;
          }
        }

        & .descricao {
          font-size: 13px !important;
          width: 270px !important;
        }
      }
    }
  }
`;