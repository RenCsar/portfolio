import styled from "styled-components";
import { flexCenter } from "../../utils/globalStyledComponents";

export const Container = styled.footer`
  ${flexCenter}
  flex-direction: column;
  color: var(--branco);
  padding: 15px 0px;
  height: var(--footer-height);

  & .icon-container {
    ${flexCenter}
    gap: 10px;
    margin-top: 10px;

    & a {
      transition: 0.3s;
    }

    & :hover {
      transform: scale(1.015);
    }
  }
`;