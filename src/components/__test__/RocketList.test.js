import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import RocketList from '../rockets/RocketList';
import store from '../../redux/app/store';

describe('RocketsList', () => {
  test('RocketsList Tree', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
