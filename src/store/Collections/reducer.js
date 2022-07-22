import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCollections = createAsyncThunk(
  "collections/fetchCollections",
  async function (_, { dispatch, rejectWithValue }) {
    const response = await fetch(
      "https://62ce69c0066bd2b699345820.mockapi.io/api/v1/collections"
    );
    const data = await response.json();
    dispatch(addAllCollection(data));
  }
);
const collectionSlice = createSlice({
  name: "collections",
  initialState: {
    allCollections: [],
    collectionDetail: null,
  },
  reducers: {
    addAllCollection(state, action) {
      state.allCollections = action.payload;
    },
    addCollectionAction(state, action) {
      const existingValue = state.allCollections.some(
        (collection) => collection.value === action.payload.value
      );
      if (!existingValue) {
        state.allCollections.push(action.payload);
      }
    },
    setCollectionDetailAction(state, action) {
      state.collectionDetail = state.allCollections.find(
        (collection) => collection.value === action.payload
      );
    },
  },
});

export const {
  addCollectionAction,
  setCollectionDetailAction,
  addAllCollection,
} = collectionSlice.actions;
export default collectionSlice.reducer;
