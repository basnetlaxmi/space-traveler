import { useSelector } from 'react-redux';
import './Missions.css';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  return (
    <div className="ma4">
      <table className="table table-striped table-bordered">
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
      </table>
    </div>
  );
};

export default Missions;
