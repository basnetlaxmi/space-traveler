import { useSelector } from 'react-redux';
import './Missions.css';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  return (
    <section>
      <p>
        <span>Mission</span>
        <span>Description</span>
        <span>Status</span>
        <span>Action</span>
      </p>
      {missions.map((mission) => <Mission mission={mission} key={mission.id} />)}
    </section>
  );
};

export default Missions;
