import styled from "styled-components";
import arrowWhiteIcons from "@styles/icons/arrowIcons-white.svg";
import personImage1 from "@styles/images/person1.jpg";
import personImage2 from "@styles/images/person2.jpg";
import personImage3 from "@styles/images/person3.jpg";
import personImage4 from "@styles/images/person4.jpg";
import personImage5 from "@styles/images/person5.jpg";
import personImage6 from "@styles/images/person6.jpg";
import personImage7 from "@styles/images/person7.jpg";
import personImage8 from "@styles/images/person8.jpg";

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

  background-image: ${(props) =>
    props.className === "personImage1"
      ? `url(${personImage1.src})`
      : props.className === "personImage2"
      ? `url(${personImage2.src})`
      : props.className === "personImage3"
      ? `url(${personImage3.src})`
      : props.className === "personImage4"
      ? `url(${personImage4.src})`
      : props.className === "personImage5"
      ? `url(${personImage5.src})`
      : props.className === "personImage6"
      ? `url(${personImage6.src})`
      : props.className === "personImage7"
      ? `url(${personImage7.src})`
      : props.className === "personImage8"
      ? `url(${personImage8.src})`
      : ""};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: background-image 0.15s ease;
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
