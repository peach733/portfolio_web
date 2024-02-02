import styled from "styled-components";

export const HeaderLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const HeaderTitle = styled.p`
  font-size: 5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.point};
`;

export const HeaderMenuText = styled.p`
  width: 100%;
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;
