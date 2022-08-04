import React, { useEffect } from "react";
import Card from "../../containers/Card";
import { useSelector, useDispatch } from "react-redux";
import PageTitle from "../../components/PageTitle";
import {
  CollectionContainer,
  MockImage,
  EmptyCollectionContainer,
  EmptyTitle,
} from "./styled";
import noElementsImage from "../../assets/images/svg/father-and-daughter.svg";
import {
  collectionSelector,
  CollectionItemStatusSelector,
  CollectionItemErrorSelector,
} from "../../store/ItemsCollection/selectors";
import { allCollectionsSelector } from "../../store/Collections/selectors";
import { fetchItems } from "../../store/ItemsCollection/reducer";
import { fetchCollections } from "../../store/Collections/reducer";
import Loader from "../../components/Loader";

function Collection() {
  const collectionItemFetchStatus = useSelector(CollectionItemStatusSelector);
  const mappedCollections = collectionArrayToMap(
    useSelector(allCollectionsSelector)
  );
  const collectionItemFetchError = useSelector(CollectionItemErrorSelector);
  const collectionItems = useSelector(collectionSelector);

  const responsedEmptyCollection =
    collectionItemFetchStatus === "resolved" && collectionItems.length === 0;

  const responsedWithValue =
    collectionItemFetchStatus === "resolved" &&
    mappedCollections?.size > 0 &&
    collectionItems.length > 0;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  function collectionArrayToMap(arr) {
    if (arr.length) {
      let mappedCollection = new Map();

      for (let obj of arr) {
        mappedCollection.set(Number(obj.id), {
          label: obj.label,
          value: obj.value,
        });
      }
      return mappedCollection;
    }
  }

  if (collectionItemFetchStatus === "loading") {
    return <Loader />;
  }
  if (responsedEmptyCollection) {
    return (
      <EmptyCollectionContainer>
        <MockImage src={noElementsImage} alt="" />
        <EmptyTitle>Your collection is empty...</EmptyTitle>
      </EmptyCollectionContainer>
    );
  }
  if (collectionItemFetchError) {
    return <PageTitle>An error occured: {collectionItemFetchError}</PageTitle>;
  }
  if (responsedWithValue) {
    return (
      <CollectionContainer>
        {collectionItems.map((item) => {
          return (
            <Card
              price={item.price}
              collection={mappedCollections.get(item.collection).label}
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </CollectionContainer>
    );
  }
}

export default Collection;
