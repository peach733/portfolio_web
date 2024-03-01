"use client";

import MainPageTemplate from "@templates/mainPageTemplate/MainPageTemplate";
import Header from "@organisims/Header/Header";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const [isTitle, setIsTitle] = useState<string>("Front-End");
  const { data: sesstion } = useSession();

  const pageMoveHandler = (title: string) => {
    setIsTitle(title);
  };

  return (
    <>
      <Header
        title={isTitle}
        session={sesstion}
        pageMoveHandler={(isTitle) => pageMoveHandler(isTitle)}
      />
      <MainPageTemplate title={isTitle} session={sesstion} />
    </>
  );
}
