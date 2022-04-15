import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../../../Redux/Rockets/Rockets';

const Rocket = ({
  id, flickrImages, reserved, description, name,
}) => {
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

    <li className="rocket-card">
      <img alt="rocket img" src={flickrImages[0]} />
      <p className="rocket-name">{name}</p>
      <p className="rocket-description">
        <span className={`badge ${reserved ? '' : 'dn'}`}>
          Reserved
        </span>
        {description}
      </p>
      <button
        onClick={() => dispatch(reserveRocket(id))}
        style={reserved ? cancelReserveBtnStyle : reserveBtnStyle}
        type="button"
      >
        { reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
      </button>
    </li>

  );
};
Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  reserved: PropTypes.oneOf([true, false]).isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Rocket;
