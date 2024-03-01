import styled from "styled-components";
import kakaoIcon from "@styles/icons/kakaoIcon.svg";
import googleIcon from "@styles/icons/googleIcon.svg";
import githubIcon from "@styles/icons/githubIcon.svg";
import naverIcon from "@styles/icons/naverIcon.svg";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const LoginPageTemplateLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 75px;
`;

export const LoginPageTemplateTitle = styled.p`
  font-size: 5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.point};
  margin-top: 120px;
`;

export const LoginPageTemplateDivisionBar = styled.div`
  width: 90%;
  height: 1px;
  background: ${(props) => props.theme.background.gray};
`;

export const LoginPageTemplateText = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
`;

export const LoginPageTemplateBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
`;

export const LoginBox = styled.button`
  position: relative;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.className === "kakao"
      ? props.theme.background.kakao
      : props.className === "github"
      ? props.theme.background.github
      : props.className === "naver"
      ? props.theme.background.naver
      : props.theme.background.white};
  border: ${(props) =>
    props.className === "google"
      ? "1px solid" + props.theme.border.google
      : "none"};
  border-radius: 12px;
  padding: 18px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadow.default};
`;

export const LoginIcon = styled.div`
  position: absolute;
  left: 30px;
  width: 30px;
  height: 30px;
  background-image: ${(props) =>
    props.className === "kakao"
      ? `url(${kakaoIcon.src})`
      : props.className === "google"
      ? `url(${googleIcon.src})`
      : props.className === "github"
      ? `url(${githubIcon.src})`
      : `url(${naverIcon.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30px 30px;
`;

export const LoginText = styled.p`
  font-size: 3rem;
  font-weight: 500;
  color: ${(props) =>
    props.className === "google"
      ? props.theme.colors.black
      : props.className === "kakao"
      ? props.theme.colors.kakao
      : props.theme.colors.white};

  font-family: ${(props) =>
    props.className === "google" ? `var(--font-roboto)` : ""};
`;
