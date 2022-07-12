import { createSelector } from "@reduxjs/toolkit";

const collectionSelector = (state) => state.сollectionItems.сollectionItems;
const collectionItemIdSelector = (state) =>
  state.сollectionItems.selectedItemId;
const selectedItemInfoSelector = createSelector(
  [collectionSelector, collectionItemIdSelector],
  (items, id) => items.find((item) => item.id === id)
);

export { collectionSelector, selectedItemInfoSelector };