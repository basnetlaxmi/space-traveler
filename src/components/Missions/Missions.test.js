import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/createStore';
import Missions from './Missions';
import Mission from './Mission';

describe('Missions', () => {
  const mission = {
    id: '12345',
    name: 'Telstar',
    description: 'This is a description of Telstar',
    reserved: false,
  };
  render(
    <Provider store={store}>
      <Mission mission={mission} />
    </Provider>,
  );
  const renderMissions = render(<Provider store={store}><Missions /></Provider>);
  test('Take snapshot for Missions', () => {
    expect(renderMissions).toMatchSnapshot();
    const table = screen.getAllByRole('row');
    expect(table[0]).toBeInTheDocument();
  });
});
