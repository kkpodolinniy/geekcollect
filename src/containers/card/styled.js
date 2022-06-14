import styled from "styled-components";

const CardWrapper = styled.div`
  padding: 10px;
  width: 400px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
const CardImage = styled.div`
  background-image: url("https://picsum.photos/id/237/200/300");
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
const CardInfoWrapper = styled.div``;
const CardTitle = styled.p`
  font-family: "Staatliches", cursive;
  font-size: 21px;
`;
const CardDescription = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 16px;
`;

const CardPrice = styled.p`
  font-family: "Staatliches", cursive;
  font-size: 21px;
`;

const MainCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
  CardWrapper,
  CardImage,
  CardDescription,
  CardInfoWrapper,
  CardPrice,
  MainCardInfo,
  CardTitle,
};
