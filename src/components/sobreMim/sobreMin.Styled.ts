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
      font-size: 28px;
      color: var(--verde);
    }

    > :nth-child(3) {
      font-weight: bold;
    }

    > .descricao {
      margin-top: 10px;
      font-size: 18px;
      width: 450px;
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

  @media (max-width: 1350px) {
    padding: 10px 180px;
  }

  @media (max-width: 1240px) {
    padding: 10px 160px;

    & .text-container {
      width: 450px;

      > :nth-child(1),
      > :nth-child(3),
      & .descricao {
        font-size: 16px;
      }
      > :nth-child(2) {
        font-size: 25px;
      }
    }

    & .img-container {
      & .foto-container {
        height: 350px;

        & img {
          height: 310px;
          width: 320px;
        }
      }
    }
  }

  @media (max-width: 1150px) {
    & .text-container {
      width: 400px;

      > :nth-child(1),
      > :nth-child(3),
      & .descricao {
        font-size: 16px;
      }
      > :nth-child(2) {
        font-size: 22px;
      }
    }

    & .img-container {
      & .foto-container {
        height: 300px;

        & img {
          height: 300px;
          width: 320px;
        }
      }
    }
  }

  @media (max-width: 1070px) {
    flex-direction: column-reverse;
    justify-content: center;
    height: 90vh;
    gap: 20px;

    & .text-container {
      width: 100%;
      margin-bottom: 30px;
    }

    & .img-container {
      & .foto-container {
        height: 300px;

        & img {
          height: 300px;
          width: 310px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    padding: 10px 110px;
  }

  @media (max-width: 600px) {
    padding: var(--padding-600);

    & .text-container {
      width: 450px;

      & .button-container {
        text-align: center;
      }
    }

    & .img-container {
      & .foto-container {
        height: 200px;

        & img {
          height: 200px;
          width: 210px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    padding: var(--padding-400);
    height: 100vh;
    align-items: center;

    & .text-container {
      width: 100%;

      > :nth-child(1),
      > :nth-child(3),
      & .descricao {
        font-size: 16px;
      }
      > :nth-child(2) {
        font-size: 18px;
      }
    }

    & .img-container {
      margin-top: 60px;
      & .foto-container {
        height: 200px;

        & img {
          height: 200px;
          width: 210px;
        }
      }
    }
  }

  @media (max-width: 330px) {
    height: 100%;
    & .img-container {      
      margin-top: 70px;
    }
  }
`;