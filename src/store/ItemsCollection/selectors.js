import { createSelector } from '@reduxjs/toolkit';

const StateSelector = (state) => state;
const collectionSelector = (state) => {
  return state.collectionItems.items;
};
const CollectionItemErrorSelector = (state) => state.collectionItems.error;
const CollectionItemStatusSelector = (state) => state.collectionItems.status;

const CollectionItemLoadFlagSelector = (state) =>
  state.collectionItems.meta.pagination.needToLoad;

const DeletedCollectionItemErrorSelector = (state) =>
  state.collectionItems.deletedItem.error;

const DeletedCollectionItemStatusSelector = (state) =>
  state.collectionItems.deletedItem.status;

const collectionItemIdSelector = (state) =>
  state.collectionItems.selectedItemId;

const DeletedCollectionItemItemDetail = (state) =>
  state.collectionItems.deletedItem.deletedItemFullInfo;

const selectedItemInfoSelector = createSelector(
  [collectionSelector, collectionItemIdSelector],
  (items, id) => items.find((item) => item.id === id)
);

export {
  StateSelector,
  collectionSelector,
  selectedItemInfoSelector,
  CollectionItemStatusSelector,
  CollectionItemErrorSelector,
  DeletedCollectionItemErrorSelector,
  DeletedCollectionItemStatusSelector,
  DeletedCollectionItemItemDetail,
  CollectionItemLoadFlagSelector,
};
