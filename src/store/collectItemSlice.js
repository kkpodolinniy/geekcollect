import { createSlice } from "@reduxjs/toolkit";

const collectItemSlice = createSlice({
  name: "collectionItems",
  initialState: {
    сollectionItems: [],
  },
  reducers: {
    addCollectionItem(state, action) {
      console.log(state);
      console.log(action);
      state.сollectionItems.push({
        title: action.payload.title,
        collection: action.payload.collection,
        description: action.payload.description,
        photo: "https://picsum.photos/200/300",
      });
    },
    deleteCollectionItem(state, action) {},
  },
});

export const { addCollectionItem, deleteCollectionItem } =
  collectItemSlice.actions;
export default collectItemSlice.reducer;
