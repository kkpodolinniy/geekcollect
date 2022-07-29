import { createSelector } from "@reduxjs/toolkit";

const collectionSelector = (state) => state.сollectionItems.сollectionItems;
const CollectionItemErrorSelector = (state) => state.сollectionItems.error;
const CollectionItemStatusSelector = (state) => state.сollectionItems.status;
const DeletedCollectionItemErrorSelector = (state) =>
  state.сollectionItems.deletedItem.error;
const DeletedCollectionItemStatusSelector = (state) =>
  state.сollectionItems.deletedItem.status;
const collectionItemIdSelector = (state) =>
  state.сollectionItems.selectedItemId;
const DeletedCollectionItemItemDetail = (state) =>
  state.сollectionItems.deletedItem.deletedItemFullInfo;

const selectedItemInfoSelector = createSelector(
  [collectionSelector, collectionItemIdSelector],
  (items, id) => items.find((item) => item.id === id)
);

export {
  collectionSelector,
  selectedItemInfoSelector,
  CollectionItemStatusSelector,
  CollectionItemErrorSelector,
  DeletedCollectionItemErrorSelector,
  DeletedCollectionItemStatusSelector,
  DeletedCollectionItemItemDetail,
};
