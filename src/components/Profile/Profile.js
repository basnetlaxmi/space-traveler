import { useSelector, useDispatch } from 'react-redux';
import './Profile.css';
import { leaveMission } from '../../Redux/Missions/Missions';

const Profile = () => {
  const dispatch = useDispatch();
  const reservedRockets = useSelector(
    (state) => state.rocketsReducer.rockets.filter((rocket) => rocket.reserved === true),
  );
  const joinedMission = useSelector(
    (state) => state.missionReducer.missions.filter((mission) => mission.reserved === true),
  );
  return (
    <div className="d-flex">
      <div className="reserved-rockets-container">
        <h2>My Rockets</h2>
        <ul className="reserved-rockets">
          {
         reservedRockets.length
           ? reservedRockets.map((rocket) => <li key={rocket.id}><p>{rocket.name}</p></li>)
           : <li><p>{'You didn\'t reserve any Rocket yet.'}</p></li>
        }
        </ul>
      </div>
      <div className="joined-mission-container">
        <h2>My Missions</h2>
        <ul className="joined-missions">
          {
        joinedMission.length
          ? joinedMission.map((mission) => (

            <li className="d-flex justify-content-between" key={mission.id}>
              <p>{mission.name}</p>
              <button type="button" className="profile-leave-btn ms-5 mt-1 me-2 btn-danger" onClick={() => dispatch(leaveMission(mission.id))}>Leave Mission</button>
            </li>

          ))
          : <li><p>{'You didn\'t join any mission yet.'}</p></li>
       }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
