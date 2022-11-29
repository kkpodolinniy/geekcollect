import React from "react";
import {
  CheckoutItemWrapper,
  ImageWrapper,
  Image,
  CardCheckoutTitle,
  CardCheckoutPrice,
} from "./styled";

function CheckoutItemCard({ title, price, photo }) {
  return (
    <CheckoutItemWrapper>
      <ImageWrapper>
        <Image
          src="https://picsum.photos/id/237/200/300"
          alt="card checkout image"
        />
      </ImageWrapper>
      <CardCheckoutTitle>Some epic card name</CardCheckoutTitle>
      <CardCheckoutPrice>$319</CardCheckoutPrice>
    </CheckoutItemWrapper>
  );
}

export default CheckoutItemCard;
