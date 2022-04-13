import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import './Rockets.css';
import { reserveRocket } from '../../Redux/Rockets/Rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets, shallowEqual);
  const dispatch = useDispatch();
  return (
    <ul id="rocket-list">
      {
      rockets.map((rocket) => (
        <li key={rocket.id} className="rocket-card">
          <img alt="rocket img" src={rocket.flickr_images[0]} />
          <p className="rocket-name">{rocket.name}</p>
          <p className="rocket-description">{rocket.description}</p>
          <button onClick={(e, id = rocket.id) => dispatch(reserveRocket(id))} type="button">
            Reserve Rocket
          </button>
        </li>
      ))
    }
    </ul>
  );
};

export default Rockets;
