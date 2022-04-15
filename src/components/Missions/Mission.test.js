import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Table } from 'react-bootstrap';
import store from '../../Redux/createStore';
import Mission from './Mission';

test('test mission', () => {
  const mission = {
    id: '12345',
    name: 'Telstar',
    description: 'This is a description of Telstar',
    reserved: false,
  };
  const renderMission = render(
    <Provider store={store}>
      <Table>
        <tbody>
          <Mission mission={mission} />
        </tbody>
      </Table>
    </Provider>,
  );
  expect(renderMission).toMatchSnapshot();
  const joinMissions = screen.getAllByText('Join Mission');
  expect(joinMissions[0]).toBeInTheDocument();
});
