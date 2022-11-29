import {
  collectionSelector,
  StateSelector,
  DeletedCollectionItemStatusSelector,
} from '../ItemsCollection/selectors';

const someStore = {};
const collectionItems = {
  items: [
    {
      id: 2,
      title: 'some title',
      price: '2000.00',
      collection: 1,
      description: 'some description',
      photo:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/879.jpg',
    },
  ],
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

someStore.collectionItems = collectionItems;

describe('redux ItemsCollection selectors', () => {
  it('should select state object', () => {
    expect(StateSelector({ collectionItems })).toEqual({ collectionItems });
    expect(StateSelector({})).toEqual({});
  });

  it('should select collection item from state object', () => {
    const result = collectionSelector(someStore);
    expect(result).toEqual(collectionItems.items);
  });
  it('should select deleted item status and return nullable value', () => {
    const result = DeletedCollectionItemStatusSelector(someStore);
    expect(result).toBeNull();
  });
});
