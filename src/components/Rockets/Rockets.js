import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import './Rockets.css';
import { reserveRocket } from '../../Redux/Rockets/Rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets, shallowEqual);
  const dispatch = useDispatch();
  const reserveBtnStyle = {
    color: '#fff',
    border: '1px solid #007bff',
    background: '#007bff',
  };
  const cancelReserveBtnStyle = {
    color: '#6d757d',
    border: '1px solid #6d757d',
    background: '#fff',
  };
  return (
    <ul id="rocket-list">
      {
      rockets.map((rocket) => (
        <li key={rocket.id} className="rocket-card">
          <img alt="rocket img" src={rocket.flickr_images[0]} />
          <p className="rocket-name">{rocket.name}</p>
          <p className="rocket-description">
            <span className={`badge ${rocket.reserved ? '' : 'dn'}`}>
              Reserved
            </span>
            {rocket.description}
          </p>
          <button
            onClick={(e, id = rocket.id) => dispatch(reserveRocket(id))}
            style={rocket.reserved ? cancelReserveBtnStyle : reserveBtnStyle}
            type="button"
          >
            { rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </li>
      ))
    }
    </ul>
  );
};

export default Rockets;
