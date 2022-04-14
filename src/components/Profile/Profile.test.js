import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/createStore';
import Profile from './Profile';

test('test profile component', () => {
  const profile = render(<Provider store={store}><Profile /></Provider>);
  expect(profile).toMatchSnapshot();
  const message = screen.getByText('You didn\'t reserve any Rocket yet.');
  expect(message).toBeInTheDocument();
});
