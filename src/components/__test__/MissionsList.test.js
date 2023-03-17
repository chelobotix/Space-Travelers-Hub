import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MissionsList from '../missions/MissionsList';
import store from '../../redux/app/store';

describe('MissionsList', () => {
  test('MissionsList Tree', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MissionsList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
