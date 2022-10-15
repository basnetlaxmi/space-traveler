import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../Redux/Missions/Missions';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3 style={{ padding: '6% 0.5%', wordSpacing: '-2.8px' }}>{mission.name}</h3>
      <p className="tc lh-copy" style={{ padding: '3.7% 1%' }}>{mission.description}</p>
      {mission.reserved ? <button type="button" className="member-btn text-center active-member">Active Member</button>
        : <button type="button" className="member-btn text-center">Not a member</button>}
      {
        mission.reserved
          ? (
            <button
              type="button"
              className="pointer join-leave-btn leave-btn"
              onClick={() => dispatch(leaveMission(mission.id))}
            >
              Leave Mission
            </button>
          )
          : (
            <button type="button" className="pointer join-leave-btn" onClick={() => dispatch(joinMission(mission.id))}>
              Join Mission
            </button>
          )
      }

    </div>
  );
};
Mission.propTypes = {
  mission: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.sdiving, PropTypes.bool]),
  ).isRequired,
};
export default Mission;
