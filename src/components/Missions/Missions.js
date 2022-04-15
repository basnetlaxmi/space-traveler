import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import './Missions.css';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  return (
    <div className="m-4">
      <Table role="row" striped bordered>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => <Mission mission={mission} key={mission.id} />)}

        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
