import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../Redux/Missions/Missions';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td><b>{mission.name}</b></td>
      <td>{mission.description}</td>
      <td>
        {mission.reserved ? <button type="button" className="member-btn text-center active-member">Active Member</button>
          : <button type="button" className="member-btn text-center">Not a member</button>}
      </td>
      {mission.reserved
        ? <td><button type="button" className="join-leave-btn leave-btn" onClick={() => dispatch(leaveMission(mission.id))}>Leave Mission</button></td>
        : <td><button type="button" className="join-leave-btn" onClick={() => dispatch(joinMission(mission.id))}>Join Mission</button></td>}

    </tr>
  );
};
Mission.propTypes = {
  mission: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  ).isRequired,
};
export default Mission;
