import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../constants/api";

export const fetchItems = createAsyncThunk(
  "collectionItems/fetchItems",
  async function ({ page, limit }, { rejectWithValue }) {
    try {
      const response = await fetch(`${baseUrl}/items`);
      if (!response.ok) {
        throw new Error("Server Error");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  "collectionItems/deleteItem",
  async function ({ id }, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${baseUrl}/items/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Server Error");
      }
      dispatch(deleteCollectionItem({ id }));
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeItem = createAsyncThunk(
  "collectionItems/changeItem",
  async function (item, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${baseUrl}/items/${item.id}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Server Error");
      }
      dispatch(changeCollectionItem({ item }));
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const addNewItem = createAsyncThunk(
  "collectionItems/addNewItem",
  async function (item, { dispatch, rejectWithValue }) {
    try {
      const response = await fetch(
        "https://62ce69c0066bd2b699345820.mockapi.io/api/v1/items",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        }
      );
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();

      dispatch(addCollectionItem(data));
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
const collectItemSlice = createSlice({
  name: "collectionItems",
  initialState: {
    сollectionItems: [],
    selectedItemId: null,
    status: null,
    error: null,
    deletedItem: {
      status: null,
      error: null,
      deletedItemFullInfo: {},
    },
  },
  reducers: {
    addCollectionItem(state, action) {
      state.сollectionItems.push({
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        collection: action.payload.collection,
        description: action.payload.description,
        photo: action.payload.photo,
      });
    },
    deleteCollectionItem(state, action) {
      state.сollectionItems = state.сollectionItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    changeCollectionItem(state, action) {
      state.сollectionItems = state.сollectionItems.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    },
    setSelectedItemIdAction(state, action) {
      state.selectedItemId = action.payload;
    },
    clearItemCollectionAction(state, _) {
      state.сollectionItems = [];
    },
    clearDeletedItemAction(state, _) {
      state.deletedItem = {};
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.сollectionItems = state.сollectionItems.concat(action.payload);
    },
    [fetchItems.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [deleteItem.pending]: (state, action) => {
      state.deletedItem.status = "loading";
      state.deletedItem.error = null;
    },
    [deleteItem.fulfilled]: (state, action) => {
      state.deletedItem.deletedItemFullInfo = action.payload;
      state.deletedItem.status = "resolved";
    },
    [deleteItem.rejected]: (state, action) => {
      state.deletedItem.status = "rejected";
      state.deletedItem.error = action.payload;
    },
  },
});

export const {
  addCollectionItem,
  deleteCollectionItem,
  changeCollectionItem,
  setSelectedItemIdAction,
  clearItemCollectionAction,
  clearDeletedItemAction,
} = collectItemSlice.actions;
export default collectItemSlice.reducer;
