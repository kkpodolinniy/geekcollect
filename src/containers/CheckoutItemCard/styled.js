import styled from "styled-components";

export const CheckoutItemWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  border-radius: 4px;
  flex-basis: 50%;
  align-items: center;
  background: #f9fafb;
  height: max-content;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
  margin-top: 20px;
`;

export const ImageWrapper = styled.div`
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  height: fit-content;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 55px;
`;

export const CardCheckoutTitle = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

export const CardCheckoutPrice = styled.p`
  font-family: "Staatliches", cursive;
  font-size: 21px;
`;
