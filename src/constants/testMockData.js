const collectionItemsInitialState = {
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

const collectionsInitialState = {
  allCollections: [],
  collectionDetail: null,
};

const mockItems = [
  {
    createdAt: '2022-07-25T16:19:31.880Z',
    title: 'Corporate Functionality Manager',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/734.jpg',
    description: 'Voluptatum laboriosam nihil.',
    collection: 2,
    price: '416.00',
    id: '13',
  },
  {
    createdAt: '2022-07-25T19:12:17.412Z',
    title: 'Senior Web Administratorss',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/269.jpg',
    description: 'Qui porro voluptates nihil.',
    collection: 2,
    price: '44.00',
    id: '15',
  },
  {
    createdAt: '2022-07-25T08:09:23.322Z',
    title: 'Central Integration Facilitator',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/177.jpg',
    description: 'In velit consequatur pariatur ut sed quasi nisi illo est.',
    collection: 1,
    price: '78.00',
    id: '16',
  },
  {
    createdAt: '2022-07-26T00:20:28.701Z',
    title: 'Corporate Implementation Engineer',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/519.jpg',
    description: 'Architecto odio architecto est expedita quos.',
    collection: 3,
    price: '650.00',
    id: '19',
  },
];

const mockCollections = [
  {
    label: 'Cats',
    value: 'cats',
    id: '1',
  },
  {
    label: 'Dogs',
    value: 'dogs',
    id: '2',
  },
  {
    label: 'Frogs',
    value: 'frogs',
    id: '3',
  },
  {
    label: 'Dolls',
    value: 'dolls',
    id: '4',
  },
  {
    label: 'Toys',
    value: 'toys',
    id: '5',
  },
];

export {
  collectionItemsInitialState,
  collectionsInitialState,
  mockCollections,
  mockItems,
};
