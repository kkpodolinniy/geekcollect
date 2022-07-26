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
  const allCollections = useSelector(allCollectionsSelector);
  const collectionItemFetchError = useSelector(CollectionItemErrorSelector);
  const collectionItems = useSelector(collectionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  function getCollectionInfo(id) {
    const searchedCollection = allCollections.find(
      (collection) => Number(collection.id) === id
    );
    return searchedCollection.label;
  }
  return (
    <CollectionContainer>
      {collectionItemFetchStatus === "loading" && <Loader />}
      {collectionItemFetchStatus === "resolved" &&
        collectionItems.length === 0 && (
          <EmptyCollectionContainer>
            <MockImage src={noElementsImage} alt="" />
            <EmptyTitle>Your collection is empty...</EmptyTitle>
          </EmptyCollectionContainer>
        )}
      {collectionItemFetchError && (
        <PageTitle>An error occured: {collectionItemFetchError}</PageTitle>
      )}
      {collectionItemFetchStatus === "resolved" &&
        allCollections.length > 0 &&
        collectionItems.length > 0 &&
        collectionItems.map((item) => {
          return (
            <Card
              price={item.price}
              collection={getCollectionInfo(item.collection)}
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

export default Collection;

// (
//   <CollectionContainer>
//     {collectionItemFetchStatus === "loading" && <Loader />}
//     {collectionItemFetchError && (
//       <PageTitle>An error occured: {collectionItemFetchError}</PageTitle>
//     )}
//     {allCollections.length && collectionItems && collectionItems.length ? (
//       collectionItems.map((item) => {
//         return (
//           <Card
//             price={item.price}
//             collection={getCollectionInfo(item.collection)}
//             key={item.id}
//             id={item.id}
//             title={item.title}
//             description={item.description}
//           />
//         );
//       })
//     ) : (
//       <EmptyCollectionContainer>
//         <MockImage src={noElementsImage} alt="" />
//         <EmptyTitle>Your collection is empty...</EmptyTitle>
//       </EmptyCollectionContainer>
//     )}
//   </CollectionContainer>
// );
