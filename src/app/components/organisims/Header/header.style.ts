import styled, { css } from "styled-components";

export const HeaderLayout = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0 20px;

  ${(props) =>
    props.className === "Front-End"
      ? css`
          .Front-End {
            font-size: 2.4rem;
            font-weight: 700;
            color: ${(props) => props.theme.colors.point};
          }
        `
      : props.className === "Back-End"
      ? css`
          .Back-End {
            font-size: 2.4rem;
            font-weight: 700;
            color: ${(props) => props.theme.colors.point};
          }
        `
      : props.className === "Web-Publisher"
      ? css`
          .Web-Publisher {
            font-size: 2.4rem;
            font-weight: 700;
            color: ${(props) => props.theme.colors.point};
          }
        `
      : ""}
`;

export const HeaderTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const HeaderTitle = styled.p`
  font-size: 4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.point};
`;

export const HeaderMenuText = styled.p`
  width: 100%;
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  cursor: pointer;

  &:hover {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.point};
    transition: all ease-in-out 0.8s;
  }
`;
