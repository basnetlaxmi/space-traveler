import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import './Missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  console.log(missions);
  return (
    <div className="m-4">
      <Table striped bordered>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td><b>{mission.name}</b></td>
              <td>{mission.description}</td>
              <td><button type="button" className="member-btn text-center">Not a Member</button></td>
              <td><button type="button" className="join-btn">Join Mission</button></td>
            </tr>
          ))}

        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
