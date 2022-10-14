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

    <li
      className="flex flex-row-ns flex-column-m flex-column items-start-ns
     items-center-m item-center w-100 mb4"
      style={{ gap: '1.5rem' }}
    >
      <img alt="rocket-img" className="br3 w-40-ns w-80-m w-100" src={flickrImages[0]} />
      <aside className="flex flex-column items-start-ns items-center-m items-center">
        <p className="rocket-name f3 ma0">{name}</p>
        <p className="rocket-description f4 tl-ns tc-m tc pl0-ns pr0-ns pl1 pr1">
          <span className={`badge ${reserved ? '' : 'dn'}`}>
            Reserved
          </span>
          {description}
        </p>
        <button
          className="reserve-btn f4 br3 pa2 pointer"
          onClick={() => dispatch(reserveRocket(id))}
          style={reserved ? cancelReserveBtnStyle : reserveBtnStyle}
          type="button"
        >
          { reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </aside>
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
