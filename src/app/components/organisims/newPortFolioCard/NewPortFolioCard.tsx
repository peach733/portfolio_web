"use client";

import React, { MouseEvent, useRef, useState } from "react";
import * as S from "./newPortFolioCard.style";
import { NewPortFolioCardProps } from "@/app/types/NewPortFolioCardTypes";
import rightArrowIcons from "@styles/icons/arrowIcons.svg";
import reactIcons from "@styles/icons/reactIcon.svg";
import typeScriptIcons from "@styles/icons/TypescriptIcon.svg";
import VsCodeIcons from "@styles/icons/VSCodeIcon.svg";
import Image from "next/image";

const NewPortFolioCard = ({ title }: NewPortFolioCardProps) => {
  const scrollRef: any = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);
  const [clickPoint, setClickPoint] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const test = [
    {
      id: 0,
      userName: "test1",
      useLang: [
        { id: 0, name: reactIcons },
        { id: 0, name: typeScriptIcons },
        { id: 0, name: VsCodeIcons },
      ],
    },
    {
      id: 0,
      userName: "test2",
      useLang: [
        { id: 0, name: reactIcons },
        { id: 0, name: typeScriptIcons },
      ],
    },
    {
      id: 0,
      userName: "test3",
      useLang: [
        { id: 0, name: reactIcons },
        { id: 0, name: typeScriptIcons },
      ],
    },
    {
      id: 0,
      userName: "test5",
      useLang: [
        { id: 0, name: reactIcons },
        { id: 0, name: typeScriptIcons },
      ],
    },
  ];

  const handleMouseDownEvent = (e: MouseEvent<HTMLDivElement>) => {
    setDragging(true);

    if (scrollRef.current) {
      setClickPoint(e.pageX);
      setScrollLeft(scrollRef.current?.scrollLeft);
      scrollRef.current?.classList.add("clickMouse");
    }
  };

  const handleMouseMoveEvent = (e: MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;

    e.preventDefault();

    if (scrollRef.current) {
      const walk = e.pageX - clickPoint;

      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <S.NewPortFolioCardLayout>
      <S.NewPortFolioCardTitle>NEW {title} PORTFOLIO</S.NewPortFolioCardTitle>
      <S.NewPortFolioCardBody>
        <S.NewPortFolioCardContentLayout ref={scrollRef}>
          <S.NewPortFolioCardContentBody
            onMouseDown={handleMouseDownEvent}
            onMouseLeave={() => setDragging(false)}
            onMouseUp={() => {
              setDragging(false);
              return scrollRef.current?.classList.remove("clickMouse");
            }}
            onMouseMove={handleMouseMoveEvent}
          >
            {test.map((data: any, idx: number) => {
              return (
                <S.NewPortFolioCardContent key={idx}>
                  <S.CardProfileImage />
                  <S.CardProfileLanguageBox>
                    {data.useLang.map((lang: any, id: number) => {
                      return (
                        <Image
                          key={id}
                          src={lang.name}
                          width={25}
                          height={25}
                          alt={id.toString()}
                        />
                      );
                    })}
                  </S.CardProfileLanguageBox>
                  <S.CardProfileUserName>{data.userName}</S.CardProfileUserName>
                </S.NewPortFolioCardContent>
              );
            })}
          </S.NewPortFolioCardContentBody>
        </S.NewPortFolioCardContentLayout>
        <S.NewPortFolioCardAll>
          <S.NewPortFoliloCardAllBody className="hoverDiv" />
          <S.NewPortFoliloCardAllLayout>
            <S.NewPortFolioCardAllTextBox>
              <S.NewPortFolioCardAllTitle> {title} </S.NewPortFolioCardAllTitle>
              <S.NewPortFoliloCardAllText>view all</S.NewPortFoliloCardAllText>
            </S.NewPortFolioCardAllTextBox>
            <img src={`${rightArrowIcons.src}`} width={40} />
          </S.NewPortFoliloCardAllLayout>
        </S.NewPortFolioCardAll>
      </S.NewPortFolioCardBody>
    </S.NewPortFolioCardLayout>
  );
};

export default NewPortFolioCard;
