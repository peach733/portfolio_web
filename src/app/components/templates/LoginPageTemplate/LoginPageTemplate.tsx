"use client";

import React, { useState } from "react";
import * as S from "./loginPageTemplate.style";
import { signIn } from "next-auth/react";

const LoginPageTemplate = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInHandler = async (type: string) => {
    try {
      setIsLoading(true);
      await signIn(type, { callbackUrl: "/" });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.LoginPageTemplateLayout>
      <S.LoginPageTemplateTitle> Login </S.LoginPageTemplateTitle>
      <S.LoginPageTemplateDivisionBar />
      <S.LoginPageTemplateText>
        부가적인 서비스로 로그인하기
      </S.LoginPageTemplateText>
      <S.LoginPageTemplateBody>
        <S.LoginBox className="kakao" onClick={() => signInHandler("kakao")}>
          <S.LoginIcon className="kakao" />
          <S.LoginText className="kakao"> 카카오 로그인 </S.LoginText>
        </S.LoginBox>
        <S.LoginBox
          disabled={isLoading}
          className="google"
          onClick={() => signInHandler("google")}
        >
          <S.LoginIcon className="google" />
          <S.LoginText className="google"> Google 로그인 </S.LoginText>
        </S.LoginBox>
        <S.LoginBox className="github" onClick={() => signInHandler("github")}>
          <S.LoginIcon className="github" />
          <S.LoginText> Github 로그인 </S.LoginText>
        </S.LoginBox>
        <S.LoginBox className="naver" onClick={() => signInHandler("naver")}>
          <S.LoginIcon className="naver" />
          <S.LoginText> 네이버 로그인 </S.LoginText>
        </S.LoginBox>
      </S.LoginPageTemplateBody>
    </S.LoginPageTemplateLayout>
  );
};

export default LoginPageTemplate;
