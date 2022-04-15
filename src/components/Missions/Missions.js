import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import './Missions.css';
import { joinMission } from '../../Redux/Missions/Missions';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  console.log(missions);
  const dispatch = useDispatch();
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
              {mission.reserved
                ? <td><button type="button" className="join-btn">Leave Mission</button></td>
                : <td><button type="button" className="leave-btn" onClick={() => dispatch(joinMission(mission.id))}>Join Mission</button></td>}

            </tr>
          ))}

        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
