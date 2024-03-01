import styled from "styled-components";
import arrowIcons from "@styles/icons/arrowIcons.svg";
import arrowWhiteIcons from "@styles/icons/arrowIcons-white.svg";

export const PortFolioMyPageLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;
  padding: 0px 20px 20px 20px;
`;

export const PortFolioMyPageTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
`;

export const AuthIsFalse = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.background.auth};
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: not-allowed;
`;

export const AuthIsFalseText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
`;

export const PortFolioMyPageBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-left: 20px;
`;

export const MyPageCardContentBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 20px;
`;

export const PortFolioMyPortPolioCard = styled.div`
  position: relative;
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    .background-hover {
      background-color: ${(props) => props.theme.colors.black};
      opacity: 0.1;
      transition: all ease-in-out 0.8s;
    }

    p {
      color: ${(props) => props.theme.colors.white};
      transition: all ease-in-out 0.8s;
    }

    .hover-white {
      width: 35px;
      height: 35px;
      background-image: url(${arrowWhiteIcons.src});
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 2;
      transition: all ease-in-out 0.8s;
    }
  }
`;

export const CardBackgroundBlack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  top: 0;
  left: 0;
  border-radius: 10px;
  opacity: 0.4;
  z-index: 1;
  transition: all ease-in-out 0.8s;
`;

export const PortFolioMyPortPolioCardTextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  z-index: 3;
  transition: all ease-in-out 0.8s;
`;

export const IconDiv = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${arrowIcons.src});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 3;
`;

export const PortFolioMyTitle = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.point};
`;

export const PortFolioCardText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.point};
`;

export const PortFolioMyPageCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 10px;
`;
