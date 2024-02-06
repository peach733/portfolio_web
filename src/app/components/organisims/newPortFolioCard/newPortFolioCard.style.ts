import styled from "styled-components";
import CardBg from "@styles/assets/images/cardBackground.jpg";

export const NewPortFolioCardLayout = styled.div`
  width: 100%;
  height: 50%;
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
  grid-template-areas: "content-view all-view";
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 100%;
  gap: 20px;
`;

export const NewPortFolioCardContentLayout = styled.div`
  grid-area: content-view;
  max-width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  gap: 20px;

  .slick-slider {
    height: 100%;
    .slick-list {
      height: 100%;
    }
  }
`;

export const NewPortFolioCardContentBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const NewPortFolioCardContent = styled.div`
  display: flex;
  width: 400px;
  height: 450px;
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
