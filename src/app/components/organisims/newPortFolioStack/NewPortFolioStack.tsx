"use client";

import React from "react";
import { NewPortFolioStackProps } from "@/app/types/NewPortFolioStackTypes";
import * as S from "./newPortFolioStack.style";

const NewPortFolioStack = ({ title }: NewPortFolioStackProps) => {
  //데이터 가져올 때는 3개까지 고정
  const test = [
    { id: 0, content: "기술 스택" },
    { id: 0, content: "기술 스택" },
    { id: 0, content: "기술 스택" },
  ];
  return (
    <S.NewPortFolioStackLayout>
      <S.NewPortFolioStackTitle> NEW {title} STACK </S.NewPortFolioStackTitle>
      <S.NewPortFolioStackBody>
        <S.NewPortFolioStackCardLayout>
          {test.map((data, idx) => {
            return (
              <S.NewPortFolioStackCard key={idx} className={`stackCard-${idx}`}>
                {data.content}
              </S.NewPortFolioStackCard>
            );
          })}
        </S.NewPortFolioStackCardLayout>
      </S.NewPortFolioStackBody>
    </S.NewPortFolioStackLayout>
  );
};

export default NewPortFolioStack;
