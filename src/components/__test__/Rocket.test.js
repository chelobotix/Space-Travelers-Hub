import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Rocket from '../rockets/Rocket';

const rocketsArray = [
  {
    id: 1,
    rocket_name: 'Rocket Falcon 1',
    description: 'Description Test',
    image: ['image1.jpg', 'image2.jpg'],
    reserved: false,
  },
];

const mockStore = configureStore([]);
const initialState = {
  missions: {
    missions: rocketsArray,
  },
};

const store = mockStore(initialState);

describe('Rocket', () => {
  test('Get Rocket Name', () => {
    render(
      <Provider store={store}>
        <Rocket
          id={rocketsArray[0].id}
          name={rocketsArray[0].rocket_name}
          description={rocketsArray[0].description}
          image={rocketsArray[0].image}
          reserved={rocketsArray[0].reserved}
        />
      </Provider>,
    );
    const td = screen.getByTestId('rocketName');
    expect(td).toHaveTextContent('Rocket Falcon 1');
  });

  test('Rocket Tree', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rocket
          id={rocketsArray[0].id}
          name={rocketsArray[0].rocket_name}
          description={rocketsArray[0].description}
          image={rocketsArray[0].image}
          reserved={rocketsArray[0].reserved}
        />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Click button text', () => {
    render(
      <Provider store={store}>
        <Rocket
          id={rocketsArray[0].id}
          name={rocketsArray[0].rocket_name}
          description={rocketsArray[0].description}
          image={rocketsArray[0].image}
          reserved={rocketsArray[0].reserved}
        />
      </Provider>,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button.textContent).toBe('Reserve Rocket');
  });

  test('Click button listener', () => {
    const handleJoinMission = jest.fn();
    handleJoinMission.mockReturnValue(store.missionsArray);
    handleJoinMission();
    render(
      <Provider store={store}>
        <Rocket
          id={rocketsArray[0].id}
          name={rocketsArray[0].rocket_name}
          description={rocketsArray[0].description}
          image={rocketsArray[0].image}
          reserved={rocketsArray[0].reserved}
        />
      </Provider>,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleJoinMission).toHaveBeenCalled();
  });
});
