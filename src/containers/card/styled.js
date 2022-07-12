import styled, { css } from "styled-components";

const CardWrapper = styled.div`
  width: 385px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-bottom: 4px solid #f0af2d;
`;
const CardImage = styled.div`
  background-image: url("https://picsum.photos/id/237/200/300");
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  ${(props) =>
    props.edited &&
    css`
      &:hover {
        webkit-filter: blur(2px); /* Chrome, Safari, Opera */
        filter: blur(2px);
      }
    `}
`;
const CardInfoWrapper = styled.div`
  padding: 10px;
`;
const CardTitle = styled.p`
  font-family: "Staatliches", cursive;
  font-size: 21px;
  width: 50%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const CardDescriptionWrapper = styled.div`
  background-color: #eeeeee;
  padding: 5px;
  border-radius: 4px;
`;

const CardDescription = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 16px;
  overflow-wrap: break-word;
`;

const CardPrice = styled.p`
  font-family: "Staatliches", cursive;
  font-size: 21px;
`;

const MainCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconBar = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #f0af2d;
  padding: 10px;
  margin-bottom: 10px;

  & a,
  & a:link,
  & a:visited {
    color: white;
  }
`;

const CollectionName = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 18px;
  font-weight: 700;
`;
export {
  CardWrapper,
  CardImage,
  CardDescriptionWrapper,
  CardDescription,
  CardInfoWrapper,
  CardPrice,
  MainCardInfo,
  CardTitle,
  IconBar,
  CollectionName,
};
