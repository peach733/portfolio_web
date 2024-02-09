"use client";

import React from "react";
import * as S from "./header.style";
import { HeaderProps } from "@/app/types/HeaderTypes";

const Header = ({ title }: HeaderProps) => {
  return (
    <S.HeaderLayout className={title}>
      <S.HeaderTitleBox>
        <S.HeaderTitle> It's OUR </S.HeaderTitle>
        <S.HeaderTitle> PORTFOLIO. </S.HeaderTitle>
      </S.HeaderTitleBox>
      <S.HeaderMenuText className="Front-End"> Front-End </S.HeaderMenuText>
      <S.HeaderMenuText className="Back-End"> Back-End </S.HeaderMenuText>
      <S.HeaderMenuText className="Web-Publisher">
        Web-Publisher
      </S.HeaderMenuText>
      <S.HeaderMenuText> Login </S.HeaderMenuText>
    </S.HeaderLayout>
  );
};

export default Header;
