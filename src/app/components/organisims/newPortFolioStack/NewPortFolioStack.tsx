"use client";

import React from "react";
import { NewPortFolioStackProps } from "@/app/types/NewPortFolioStackTypes";
import * as S from "./newPortFolioStack.style";
import arrowViewIcon from "@styles/icons/arrowNavIcons.svg";
import Image from "next/image";

const NewPortFolioStack = ({ title }: NewPortFolioStackProps) => {
  //데이터 가져올 때는 3개까지 고정
  const test = [
    { id: 0, content: "기술 스택" },
    { id: 0, content: "기술 스택" },
    { id: 0, content: "기술 스택" },
  ];
  return (
    <S.NewPortFolioStackLayout>
      <S.NewPortFolioStackTitleBox>
        <S.NewPortFolioStackTitle> NEW {title} STACK </S.NewPortFolioStackTitle>
        <S.NewPortFolioStackAllViewBox>
          <S.allViewText> all view </S.allViewText>
          <Image src={arrowViewIcon} width={25} height={25} alt="" />
        </S.NewPortFolioStackAllViewBox>
      </S.NewPortFolioStackTitleBox>
      <S.NewPortFolioStackBody>
        <S.NewPortFolioStackCardLayout>
          {test.map((data, idx) => {
            return (
              <S.NewPortFolioStackCard key={idx}>
                {data.content}
                {idx}
              </S.NewPortFolioStackCard>
            );
          })}
        </S.NewPortFolioStackCardLayout>
      </S.NewPortFolioStackBody>
    </S.NewPortFolioStackLayout>
  );
};

export default NewPortFolioStack;
