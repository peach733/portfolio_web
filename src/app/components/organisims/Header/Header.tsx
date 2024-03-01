import React from "react";
import * as S from "./header.style";
import { HeaderProps } from "@/app/types/HeaderTypes";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Header = ({ title, pageMoveHandler, session }: HeaderProps) => {
  return (
    <S.HeaderBody className={title}>
      <S.HeaderTitleBox onClick={() => pageMoveHandler("Front-End")}>
        <Link href="/">
          <S.HeaderTitle> It's OUR </S.HeaderTitle>
          <S.HeaderTitle> PORTFOLIO. </S.HeaderTitle>
        </Link>
      </S.HeaderTitleBox>
      <S.HeaderMenuText
        className="Front-End"
        onClick={() => pageMoveHandler("Front-End")}
      >
        <Link href="/">Front-End</Link>
      </S.HeaderMenuText>
      <S.HeaderMenuText
        className="Back-End"
        onClick={() => pageMoveHandler("Back-End")}
      >
        <Link href="/">Back-End</Link>
      </S.HeaderMenuText>
      <S.HeaderMenuText
        className="Web-Publisher"
        onClick={() => pageMoveHandler("Web-Publisher")}
      >
        <Link href="/">Web-Publisher</Link>
      </S.HeaderMenuText>
      {session && (
        <S.HeaderMenuText className="Logout" onClick={() => signOut()}>
          <Link href="/">Logout</Link>
        </S.HeaderMenuText>
      )}
      {!session && (
        <S.HeaderMenuText className="Login">
          <Link href="/login">Login</Link>
        </S.HeaderMenuText>
      )}
    </S.HeaderBody>
  );
};

export default Header;
