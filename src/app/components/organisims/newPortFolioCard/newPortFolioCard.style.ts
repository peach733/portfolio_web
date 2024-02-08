import styled from "styled-components";
import CardBg from "../../../styles/assets/images/cardBackground.jpg";

export const NewPortFolioCardLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 12px;
`;

export const NewPortFolioCardTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
`;

export const NewPortFolioCardBody = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  display: grid;
  grid-template-areas: "content-view content-view all-view";
  grid-template-columns: 2fr 2fr 1fr;
  gap: 20px;
`;

export const NewPortFolioCardContentLayout = styled.div`
  grid-area: content-view;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  overflow-x: scroll;
`;

export const NewPortFolioCardContentBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 1px;
`;

export const NewPortFolioCardContent = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.gray};
  box-shadow: ${(props) => props.theme.shadow.default};
`;

export const NewPortFolioCardAll = styled.div`
  grid-area: all-view;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadow.default};
  background-image: url(${CardBg.src});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;
