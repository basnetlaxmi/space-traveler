import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/createStore';
import Rockets from './Rockets';
import Rocket from './Rocket/Rocket';

test('test Rockets', () => {
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
  render(
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
  const rockets = render(<Provider store={store}><Rockets /></Provider>);

  expect(rockets).toMatchSnapshot();
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
});
