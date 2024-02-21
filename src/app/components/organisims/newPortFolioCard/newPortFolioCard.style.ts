import styled from "styled-components";
import CardBg from "@styles/images/cardBackground.jpg";
import testImage from "@styles/images/person1.jpg";

export const NewPortFolioCardLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 20px;
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
  display: grid;
  grid-template-areas: "content-view all-view";
  grid-template-columns: 3fr 1fr;
  gap: 20px;
`;

export const NewPortFolioCardContentLayout = styled.div`
  width: 100%;
  height: 100%;
  grid-area: content-view;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  cursor: grab;

  &.clickMouse {
    cursor: grabbing;
  }
`;

export const NewPortFolioCardContentBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 1px;
  padding: 12px;
`;

export const NewPortFolioCardContent = styled.div`
  width: 400px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.default};
  padding: 12px;
  gap: 12px;
`;

export const CardProfileImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${testImage.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

export const CardProfileLanguageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const CardProfileUserName = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: left;
`;

export const NewPortFolioCardAll = styled.div`
  height: 100%;
  grid-area: all-view;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  box-shadow: ${(props) => props.theme.shadow.default};
  background-image: url(${CardBg.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;

  &:hover {
    .hoverDiv {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.black};
      transition: all 0.8s ease-in-out;
      opacity: 0.1;
    }
    p {
      color: ${(props) => props.theme.colors.white};
      transition: all 0.8s ease-in-out;
    }

    img {
      z-index: 2;
      transition: all 0.8s ease-in-out;
      filter: invert(200%) sepia(100%) saturate(0%) hue-rotate(100deg)
        brightness(112%) contrast(200%);
    }
  }
`;

export const NewPortFoliloCardAllBody = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  z-index: 1;
  opacity: 0.65;
  transition: all 0.5s ease-in-out;
`;

export const NewPortFoliloCardAllLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  cursor: pointer;

  img {
    z-index: 2;
  }
`;

export const NewPortFolioCardAllTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 2px;
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;

export const NewPortFolioCardAllTitle = styled.p`
  font-size: 3rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.point};
`;

export const NewPortFoliloCardAllText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.point};
`;
