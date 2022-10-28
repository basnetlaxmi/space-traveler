import { useSelector, useDispatch } from 'react-redux';
import './Profile.css';
import { leaveMission } from '../../Redux/Missions/Missions';
import { reserveRocket } from '../../Redux/Rockets/Rockets';

const Profile = () => {
  const dispatch = useDispatch();
  const reservedRockets = useSelector(
    (state) => state.rocketsReducer.rockets.filter((rocket) => rocket.reserved === true),
  );
  const joinedMission = useSelector(
    (state) => state.missionReducer.missions.filter((mission) => mission.reserved === true),
  );
  return (
    <div className="flex justify-between flex-row-ns flex-column pl5-ns pr5-ns pl2-m pr2-m pl1 pr1">
      <div>
        <h2 className="tc mb0">My Rockets</h2>
        <ul className="reserved-rockets">
          {
         reservedRockets.length
           ? reservedRockets.map((rocket) => (
             (
               <li key={rocket.id} className="flex flex-row-ns flex-column-m flex-column justify-between items-center pa3" style={{ gap: '0.75rem' }}>
                 <p>{rocket.name}</p>
                 <button
                   onClick={() => dispatch(reserveRocket(rocket.id))}
                   className="cancel-rocket f6 pa1 pl2 pr2 btn-danger"
                   type="button"
                 >
                   Cancel Reservation
                 </button>
               </li>

             )

           ))
           : <li><p>{'You didn\'t reserve any Rocket yet.'}</p></li>
        }
        </ul>
      </div>
      <div className="joined-mission-container">
        <h2 className="tc">My Missions</h2>
        <ul className="joined-missions" style={{ maxHeight: '65vh', overflow: 'auto' }}>
          {
        joinedMission.length
          ? joinedMission.map((mission) => (

            <li
              className="flex flex-row-ns flex-column-m flex-column justify-between items-center pa3"
              style={{ gap: '0.75rem' }}
              key={mission.id}
            >
              <p>{mission.name}</p>
              <button type="button" className="profile-leave-btn f6 pa1 pl2 pr2 btn-danger" onClick={() => dispatch(leaveMission(mission.id))}>Leave Mission</button>
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
