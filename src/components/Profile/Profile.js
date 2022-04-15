import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const reservedRockets = useSelector(
    (state) => state.rocketsReducer.rockets.filter((rocket) => rocket.reserved === true),
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
      <div className="reserved-rockets-container ms-5">
        <h2>My Missions</h2>
        <ul className="reserved-rockets">
          {
        reservedRockets.length
          ? reservedRockets.map((rocket) => <li key={rocket.id}><p>{rocket.name}</p></li>)
          : <li><p>{'You didn\'t reserve any Rocket yet.'}</p></li>
       }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
