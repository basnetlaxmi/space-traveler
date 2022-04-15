import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../Redux/createStore';
import Rocket from './Rocket';

test('test rocket component', () => {
  const props = {
    id: 1,
    description: 'rocket 1 description',
    name: 'Falcon 1',
    flickrImages: ['rocket 1 image'],
    reserved: false,
  };
  const {
    id, description, name, flickrImages, reserved,
  } = props;
  const rocket = render(
    <Provider store={store}>
      <Rocket
        id={id}
        description={description}
        name={name}
        flickrImages={flickrImages}
        reserved={reserved}
      />
    </Provider>,
  );
  expect(rocket).toMatchSnapshot();
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
