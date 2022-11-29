import Collection from './Collection';
import {
  fireEvent,
  getByPlaceholderText,
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import * as reduxHooks from 'react-redux';
import thunk from 'redux-thunk';

import {
  collectionItemsInitialState,
  collectionsInitialState,
  mockCollections,
  mockItems,
} from '../../constants/testMockData.js';

const middlewares = [thunk];
const hooks = { ...reduxHooks };

describe('Test collection component', () => {
  const mockStore = configureStore(middlewares);
  const store = mockStore({
    collectionItems: collectionItemsInitialState,
    collections: collectionsInitialState,
  });

  const withStore = (element) => {
    return (
      <MemoryRouter>
        <Provider store={store}>{element}</Provider>
      </MemoryRouter>
    );
  };

  it('should create collection component', () => {
    collectionItemsInitialState.items = mockItems;
    collectionsInitialState.allCollections = mockCollections;
    render(withStore(<Collection />));
    expect(screen.getAllByTestId('card-component')).toHaveLength(4);
  });
  it('should render loader if "responsedWithValue" variable has falsy value', () => {
    collectionItemsInitialState.items = [];
    collectionsInitialState.allCollections = [];
    render(withStore(<Collection />));
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
