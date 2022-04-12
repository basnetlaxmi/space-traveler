import { useSelector, shallowEqual } from 'react-redux';
import './Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets, shallowEqual);
  return (
    <ul id="rocket-list">
      {rockets.map((rocket) => <li key={rocket.id}>{`${rocket.name} ${rocket.type} loaded`}</li>)}
    </ul>
  );
};

export default Rockets;
