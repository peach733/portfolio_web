"use client";

import React from "react";
import * as S from "./mainPageTemplate.style";
import NewPortFolioCard from "@organisims/newPortFolioCard/NewPortFolioCard";

const MainPageTemplate = () => {
  return (
    <S.MainPageLayout>
      <NewPortFolioCard />
    </S.MainPageLayout>
  );
};

export default MainPageTemplate;
