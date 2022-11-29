import Card from './index';
import {
  fireEvent,
  getByPlaceholderText,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import * as reduxHooks from 'react-redux';
import * as actions from '../../store/ItemsCollection/reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const hooks = { ...reduxHooks };

describe('Test Card Component', () => {
  const mockStore = configureStore(middlewares);
  const store = mockStore({});
  const withStore = (element) => {
    return (
      <MemoryRouter>
        <Provider store={store}>{element}</Provider>
      </MemoryRouter>
    );
  };

  it('should create Card Component', () => {
    const cardPayload = {
      edited: false,
      price: '210.00',
      collection: 'Cats',
      id: '11',
      title: 'Dynamic Interactions Manager',
      description:
        'Quisquam dolor aliquam perspiciatis tempore blanditiis ipsum voluptatem.',
    };

    render(withStore(<Card {...cardPayload} />));

    expect(screen.getByText('Dynamic Interactions Manager')).toHaveTextContent(
      'Dynamic Interactions Manager'
    );
    expect(screen.getByText(/210.00/i)).toBeInTheDocument();
    expect(screen.getByText(/Cats/i)).toHaveTextContent('Collection: Cats');
    expect(screen.getByRole('menubar')).toBeInTheDocument();
  });

  it('should create Card Component without menubar if pass "edited" with value "true"', () => {
    render(
      withStore(
        <Card
          title={'some title'}
          description={'some description'}
          edited={true}
        />
      )
    );
    expect(screen.queryByRole('menubar')).not.toBeInTheDocument();
  });

  it('should render text: "Not For Sale if pass empty price prop"', () => {
    render(
      withStore(<Card title={'some title'} description={'some description'} />)
    );
    expect(screen.getByText('Not For Sale')).toBeInTheDocument();
  });

  it('should dispatch deleteItem action', () => {
    const dispatch = jest.fn();
    store.dispatch = dispatch;
    const mockedDispatch = jest.spyOn(hooks, 'useDispatch');
    mockedDispatch.mockReturnValue(dispatch);
    const mockedDeleteItem = jest.spyOn(actions, 'deleteItem');

    const cardPayload = {
      edited: false,
      price: '210.00',
      collection: 'Cats',
      id: '11',
      title: 'Dynamic Interactions Manager',
      description:
        'Quisquam dolor aliquam perspiciatis tempore blanditiis ipsum voluptatem.',
    };
    render(withStore(<Card {...cardPayload} />));

    expect(store.dispatch).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId('delete-item__icon'));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(mockedDeleteItem).toHaveBeenCalledWith({ id: '11' });
  });
});
