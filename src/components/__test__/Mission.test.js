import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Mission from '../missions/Mission';

const missionsArray = [
  {
    mission_id: '1',
    mission_name: 'Mission test',
    description: 'Description Test',
    reserved: false,
  },
];

const mockStore = configureStore([]);
const initialState = {
  missions: {
    missions: missionsArray,
  },
};

const store = mockStore(initialState);

describe('Mission', () => {
  test('Get Mission Title', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <tr>
              <Mission
                id={missionsArray[0].mission_id}
                name={missionsArray[0].mission_name}
                description={missionsArray[0].description}
                reserved={missionsArray[0].reserved}
              />
            </tr>
          </tbody>
        </table>
      </Provider>,
    );
    const td = screen.getByTestId('titleTD');
    expect(td).toHaveTextContent('Mission test');
  });

  test('Mission Tree', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <table>
          <tbody>
            <tr>
              <Mission
                id={missionsArray[0].mission_id}
                name={missionsArray[0].mission_name}
                description={missionsArray[0].description}
                reserved={missionsArray[0].reserved}
              />
            </tr>
          </tbody>
        </table>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Click button text', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <tr>
              <Mission
                id={missionsArray[0].mission_id}
                name={missionsArray[0].mission_name}
                description={missionsArray[0].description}
                reserved={missionsArray[0].reserved}
              />
            </tr>
          </tbody>
        </table>
      </Provider>,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button.textContent).toBe('Join Mission');
  });

  test('Click button listener', () => {
    const handleJoinMission = jest.fn();
    handleJoinMission.mockReturnValue(store.missionsArray);
    handleJoinMission();
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <tr>
              <Mission
                id={missionsArray[0].mission_id}
                name={missionsArray[0].mission_name}
                description={missionsArray[0].description}
                reserved={missionsArray[0].reserved}
              />
            </tr>
          </tbody>
        </table>
      </Provider>,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleJoinMission).toHaveBeenCalled();
  });
});
