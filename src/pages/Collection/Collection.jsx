import React from "react";
import Card from "../../containers/Card";
import { useSelector } from "react-redux";
import {
  CollectionContainer,
  MockImage,
  EmptyCollectionContainer,
  EmptyTitle,
} from "./styled";
import noElementsImage from "../../assets/images/svg/father-and-daughter.svg";
import { collectionSelector } from "../../store/ItemsCollection/selectors";

function Collection() {
  const collectionItems = useSelector(collectionSelector);
  return (
    <CollectionContainer>
      {collectionItems.length ? (
        collectionItems.map((item) => {
          return (
            <Card
              price={item.price}
              collection={item.collection}
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })
      ) : (
        <EmptyCollectionContainer>
          <MockImage src={noElementsImage} alt="" />
          <EmptyTitle>Your collection is empty...</EmptyTitle>
        </EmptyCollectionContainer>
      )}
    </CollectionContainer>
  );
}

export default Collection;
