"use client";

import React from "react";
import * as S from "./header.style";

const Header = () => {
  return (
    <S.HeaderLayout>
      <S.HeaderTitleBox>
        <S.HeaderTitle> It's OUR </S.HeaderTitle>
        <S.HeaderTitle> PORTFOLIO. </S.HeaderTitle>
      </S.HeaderTitleBox>
      <S.HeaderMenuText> Front-End </S.HeaderMenuText>
      <S.HeaderMenuText> Back-End </S.HeaderMenuText>
      <S.HeaderMenuText> Web-Publisher </S.HeaderMenuText>
      <S.HeaderMenuText> Login </S.HeaderMenuText>
    </S.HeaderLayout>
  );
};

export default Header;
