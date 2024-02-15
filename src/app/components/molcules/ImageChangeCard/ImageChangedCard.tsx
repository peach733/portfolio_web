import React, { useEffect, useRef, useState } from "react";
import * as S from "./imageChangeCard.style";

const ImageChangedCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageArray = [
    "personImage1",
    "personImage2",
    "personImage3",
    "personImage4",
    "personImage5",
    "personImage6",
    "personImage7",
    "personImage8",
  ];

  const interval = useRef();

  //   useEffect(() => {
  //     interval.current = setInterval(() => {
  //       setCurrentImage((prev) => (prev + 1) % imageArray.length);
  //     }, 3000);

  //     return () => {
  //       clearInterval(interval.current);
  //     };
  //   }, [currentImage]);

  return (
    <S.ImageChangeCardLayout>
      <S.ImageChangeCardBody className={imageArray[currentImage]}>
        <S.CardTitleBox>
          <S.ImageChangeCardTitle> EDIT My Info </S.ImageChangeCardTitle>
          <S.IconDiv className="hover-white" />
        </S.CardTitleBox>
      </S.ImageChangeCardBody>
    </S.ImageChangeCardLayout>
  );
};

export default ImageChangedCard;
