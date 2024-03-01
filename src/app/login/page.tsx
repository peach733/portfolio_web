"use client";

import React, { useState } from "react";
import Header from "@organisims/Header/Header";
import LoginPageTemplate from "@templates/LoginPageTemplate/LoginPageTemplate";
import { useSession } from "next-auth/react";

const Login = () => {
  const [isTitle, setIsTitle] = useState<string>("Login");
  const { data: sesstion } = useSession();

  const pageMoveHandler = (title: string) => {
    setIsTitle(title);
  };
  return (
    <>
      <Header
        title={isTitle}
        pageMoveHandler={(isTitle) => pageMoveHandler(isTitle)}
        session={sesstion}
      />
      <LoginPageTemplate />
    </>
  );
};

export default Login;
