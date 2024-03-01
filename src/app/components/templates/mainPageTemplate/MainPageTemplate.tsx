"use client";

import React from "react";
import * as S from "./mainPageTemplate.style";
import NewPortFolioCard from "@organisims/newPortFolioCard/NewPortFolioCard";
import NewPortFolioStack from "@organisims/newPortFolioStack/NewPortFolioStack";
import NewPortFolioMyPage from "../../organisims/PortFolioMyPage/PortFolioMyPage";
import { MainPageProps } from "@/app/types/MainPageTypes";

const MainPageTemplate = ({ title, session }: MainPageProps) => {
  return (
    <S.MainPageLayout>
      <NewPortFolioCard title={title} />
      <NewPortFolioStack title={title} />
      <NewPortFolioMyPage session={session} />
    </S.MainPageLayout>
  );
};

export default MainPageTemplate;
