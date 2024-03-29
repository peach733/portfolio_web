"use client";

import React from "react";
import * as S from "./portFolioMyPage.style";
import ImageChangedCard from "@molcules/ImageChangeCard/ImageChangedCard";
import Image from "next/image";
import myPortFolioBG from "@styles/images/myPortFolioCardBackground.jpg";
import { MyPageProps } from "@/app/types/MyPageTypes";

const NewPortFolioMyPage = ({ session }: MyPageProps) => {
  return (
    <S.PortFolioMyPageLayout>
      <S.PortFolioMyPageTitle> MY CONTENT </S.PortFolioMyPageTitle>
      {!session && (
        <S.AuthIsFalse>
          <S.AuthIsFalseText> 로그인 후 접근 가능합니다. </S.AuthIsFalseText>
        </S.AuthIsFalse>
      )}
      <S.PortFolioMyPageBody>
        <S.MyPageCardContentBody>
          <S.PortFolioMyPortPolioCard>
            <S.CardBackgroundBlack className="background-hover" />
            <Image
              src={myPortFolioBG}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "10px" }}
              alt="portFolio"
            />
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
