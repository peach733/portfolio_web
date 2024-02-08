"use client";

import React, { MouseEvent, useRef, useState } from "react";
import * as S from "./newPortFolioCard.style";
import { NewPortFolioCardProps } from "@/app/types/NewPortFolioCardTypes";

const NewPortFolioCard = ({ title }: NewPortFolioCardProps) => {
  const scrollRef: any = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);
  const [clickPoint, setClickPoint] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const test = [
    { id: 0, content: "야호" },
    { id: 0, content: "아니" },
    { id: 0, content: "진짜" },
    { id: 0, content: "왜" },
    { id: 0, content: "안 돼?" },
    { id: 0, content: "개빡치네" },
    { id: 0, content: "야호" },
    { id: 0, content: "야호" },
    { id: 0, content: "야호" },
    { id: 0, content: "야호" },
    { id: 0, content: "야호" },
    { id: 0, content: "야호" },
    { id: 0, content: "야호" },
    { id: 0, content: "야호" },
    { id: 0, content: "야호" },
    { id: 0, content: "야호" },
    { id: 0, content: "야호" },
    { id: 0, content: "야호" },
  ];

  const handleMouseDownEvent = (e: MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    if (scrollRef.current) {
      setClickPoint(e.pageX);
      setScrollLeft(scrollRef.current?.scrollLeft);
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
            onMouseUp={() => setDragging(false)}
            onMouseMove={handleMouseMoveEvent}
          >
            {test.map((data: any, idx: number) => {
              return (
                <S.NewPortFolioCardContent key={idx}>
                  {data.content}
                </S.NewPortFolioCardContent>
              );
            })}
          </S.NewPortFolioCardContentBody>
        </S.NewPortFolioCardContentLayout>
        <S.NewPortFolioCardAll>
          <p> {title} </p>
          <p> view all </p>
        </S.NewPortFolioCardAll>
      </S.NewPortFolioCardBody>
    </S.NewPortFolioCardLayout>
  );
};

export default NewPortFolioCard;
