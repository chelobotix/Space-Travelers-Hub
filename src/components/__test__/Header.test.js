import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../Header/Header';

describe('Header', () => {
  test('Check if render', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('Header Tree', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
