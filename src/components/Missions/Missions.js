import { useSelector } from 'react-redux';
import './Missions.css';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  return (
    <div className="ma4 flex flex-column" style={{ gap: '1rem' }}>
      {missions.map((mission) => <Mission mission={mission} key={mission.id} />)}
    </div>
  );
};

export default Missions;
