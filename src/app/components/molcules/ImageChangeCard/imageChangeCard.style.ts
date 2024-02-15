import styled from "styled-components";
import arrowWhiteIcons from "@styles/icons/arrowIcons-white.svg";
import myInfoCardBG from "@styles/images/myInfoBackground.gif";

export const ImageChangeCardLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageChangeCardBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 12px;

  background-image: url(${myInfoCardBG.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: background-image 0.15ms ease;
  cursor: pointer;
`;

export const CardTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageChangeCardTitle = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
`;

export const IconDiv = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${arrowWhiteIcons.src});
  background-repeat: no-repeat;
  background-size: cover;
`;
