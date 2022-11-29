import collectionItemSlice, {
  addCollectionItem,
  deleteCollectionItem,
  changeCollectionItem,
} from '../ItemsCollection/reducer';

const initialState = {
  items: [],
  selectedItemId: null,
  status: null,
  error: null,
  deletedItem: {
    status: null,
    error: null,
    deletedItemFullInfo: {},
  },
  meta: {
    pagination: {
      page: 1,
      limit: 10,
      needToLoad: true,
    },
  },
};

describe('collectionItemSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = collectionItemSlice(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('should add new collection item with "addCollectionItem" action', () => {
    const action = {
      type: addCollectionItem.type,
      payload: {
        createdAt: '2022-11-22T00:59:34.781Z',
        title: 'Some New Title',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/931.jpg',
        description: 'Some amazing description',
        collection: 4,
        price: '232',
        id: '48',
        photo: 'https://picsum.photos/200/300',
      },
    };

    const result = collectionItemSlice(initialState, action);
    expect(result.items[0].title).toBe('Some New Title');
  });
});
