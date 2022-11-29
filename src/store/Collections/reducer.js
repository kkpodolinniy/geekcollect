import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../constants/api';
const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async function (_, { dispatch, rejectWithValue }) {
    const response = await fetch(`${baseUrl}/collections`);
    const data = await response.json();
    dispatch(addAllCollection(data));
  }
);

export const addCollectionToAPI = createAsyncThunk(
  'collections/addCollectionToAPI',
  async function (item, { dispatch, rejectWithValue }) {
    const preparedOption = createOption(item);
    const response = await fetch(`${baseUrl}/collections`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(preparedOption),
    });
    const data = await response.json();
    dispatch(addCollectionAction(data));
    return data;
  }
);

const collectionSlice = createSlice({
  name: 'collections',
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
