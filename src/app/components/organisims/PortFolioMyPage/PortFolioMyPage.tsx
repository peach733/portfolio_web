"use client";

import React from "react";
import * as S from "./portFolioMyPage.style";
import ImageChangedCard from "@molcules/ImageChangeCard/ImageChangedCard";

const NewPortFolioMyPage = () => {
  return (
    <S.PortFolioMyPageLayout>
      <S.PortFolioMyPageTitle> MY CONTENT </S.PortFolioMyPageTitle>
      <S.PortFolioMyPageBody>
        <S.MyPageCardContentBody>
          <S.PortFolioMyPortPolioCard>
            <S.CardBackgroundBlack className="background-hover" />
            <S.PortFolioMyPortPolioCardTextBox>
              <S.PortFolioMyTitle> My Portfolio </S.PortFolioMyTitle>
              <S.PortFolioCardText> view all </S.PortFolioCardText>
            </S.PortFolioMyPortPolioCardTextBox>
            <S.IconDiv className="hover-white" />
          </S.PortFolioMyPortPolioCard>
          <ImageChangedCard />
        </S.MyPageCardContentBody>
      </S.PortFolioMyPageBody>
    </S.PortFolioMyPageLayout>
  );
};

export default NewPortFolioMyPage;
