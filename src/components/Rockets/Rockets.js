import { useSelector, shallowEqual } from 'react-redux';
import './Rockets.css';

import Rocket from './Rocket/Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets, shallowEqual);
  return (
    <ul className="flex flex-column pa4 w-100" style={{ gap: '1rem' }}>
      {
      rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          flickrImages={rocket.flickr_images}
          description={rocket.description}
          name={rocket.name}
          reserved={rocket.reserved ? rocket.reserved : false}
        />
      ))
    }
    </ul>
  );
};

export default Rockets;
