import { createSelector } from "@reduxjs/toolkit";
//TODO add collectionArrayToMap
const allCollectionsSelector = (state) => state.collections.allCollections;
const collectionDetailSelector = createSelector(
  [
    (state) => state.collections.allCollections,
    (state, collectionLabel) => collectionLabel,
  ],
  (collections, collectionLabel) =>
    collections.find((collection) => collection.label === collectionLabel)
);

export { allCollectionsSelector, collectionDetailSelector };
