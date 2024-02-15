import React from "react";
import * as S from "./imageChangeCard.style";

const ImageChangedCard = () => {
  return (
    <S.ImageChangeCardLayout>
      <S.ImageChangeCardBody>
        <S.CardTitleBox>
          <S.ImageChangeCardTitle> EDIT My Info </S.ImageChangeCardTitle>
          <S.IconDiv className="hover-white" />
        </S.CardTitleBox>
      </S.ImageChangeCardBody>
    </S.ImageChangeCardLayout>
  );
};

export default ImageChangedCard;
