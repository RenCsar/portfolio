import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 240px;
  height: 604px;

  & .text-container {
    width: 500px;
    display: flex;
    flex-direction: column;

    & p {
      color: var(--branco);
    }

    > :nth-child(1),
    > :nth-child(3) {
      font-size: 18px;
    }
    > :nth-child(2) {
      font-size: 42px;
      color: var(--verde);
    }

    > :nth-child(3) {
      font-weight: bold;
    }

    > .descricao {
      margin-top: 10px;
      font-size: 18px;
      width:450px;
    }

    & .button-container {
      margin-top: 40px;
    }
  }

  & .img-container {
    & .foto-container {
      display: flex;
      align-items: center;
      justify-content: center;

      & img {
        height: 310px;
        width: 320px;
      }
    }
  }

  @media (max-width: 1200px) {
    & .text-container {
      width: 450px;

      > :nth-child(1) {
        font-size: 15px;
      }
      > :nth-child(2) {
        font-size: 40px;
      }
      > .descricao {
        font-size: 14px;
      }
    }

    & .img-container {
      & .foto-container {
        height: 350px;

        & img {
          height: 350px;
          width: 370px;
        }
      }
    }
  }

  @media (max-width: 1150px) {
    & .text-container {
      width: 400px;
      > :nth-child(1) {
        font-size: 15px;
      }
      > :nth-child(2) {
        font-size: 35px;
      }
      > .descricao {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;

    & .text-container {
      width: 100%;
      margin-bottom: 30px;
    }

    & .img-container {
      & .foto-container {
        height: 320px;
        margin-top: 30px;

        & img {
          height: 320px;
          width: 340px;
        }
      }
    }
  }

  @media (max-width: 600px) {
    height: 600px;
    padding: var(--padding-600);

    & .text-container {
      margin-bottom: 80px;

      > :nth-child(1) {
        font-size: 15px;
      }
      > :nth-child(2) {
        font-size: 25px;
      }
      > .descricao {
        font-size: 12px;
      }
      & .button-container {
        text-align: center;
      }
    }

    & .img-container {
      margin-top: 30px;

      & .foto-container {
        height: 200px;

        & img {
          height: 200px;
          width: 220px;
        }
      }
    }
  }

  @media (max-width: 400px) {
    padding: var(--padding-400);
    height: 85vh;
    align-items: center;

    & .text-container {
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    & .img-container {
      margin-top: 10px;
      display: none;
    }
  }
`;