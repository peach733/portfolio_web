"use client";

import React from "react";
import * as S from "./newPortFolioCard.style";
import Slider from "react-slick";
import { NewPortFolioCardProps } from "@/app/types/NewPortFolioCardTypes";

const NewPortFolioCard = ({ title }: NewPortFolioCardProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    draggable: true,
    centerSlides: false,
    spaceBetween: 20,
  };

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
  return (
    <S.NewPortFolioCardLayout>
      <S.NewPortFolioCardTitle>NEW {title} PORTFOLIO</S.NewPortFolioCardTitle>
      <S.NewPortFolioCardBody>
        <S.NewPortFolioCardContentLayout>
          <Slider {...settings}>
            {test.map((data: any, idx: number) => {
              return (
                // <S.NewPortFolioCardBody key={idx}>
                <S.NewPortFolioCardContent>
                  {data.content}
                </S.NewPortFolioCardContent>
                // </S.NewPortFolioCardBody>
              );
            })}
          </Slider>
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
