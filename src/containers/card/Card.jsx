import React from "react";
import {
  CardWrapper,
  CardImage,
  CardDescription,
  CardInfoWrapper,
  CardPrice,
  MainCardInfo,
  CardTitle,
} from "./styled";

function Card({ price, title, description, collection }) {
  return (
    <CardWrapper>
      <CardImage />
      <CardInfoWrapper>
        <MainCardInfo>
          <CardTitle>{title}</CardTitle>
          <CardPrice>{price ? price : "Not For Sale"}</CardPrice>
        </MainCardInfo>
        <CardDescription>{description}</CardDescription>
      </CardInfoWrapper>
    </CardWrapper>
  );
}

export default Card;
