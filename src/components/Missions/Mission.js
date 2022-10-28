import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../Redux/Missions/Missions';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-column pb4 items-start-ns items-center" style={{ gap: '0.75rem', borderBottom: '1px solid grey' }}>
      <p className="ma0"><b>{mission.name}</b></p>
      <p className="mb1 mt1 tl-ns tc">{mission.description}</p>
      {mission.reserved ? <button type="button" className="member-btn text-center active-member">Active Member</button>
        : <button type="button" className="member-btn text-center">Not a member</button>}
      {mission.reserved
        ? <button type="button" className="join-leave-btn pointer leave-btn" onClick={() => dispatch(leaveMission(mission.id))}>Leave Mission</button>
        : <button type="button" className="join-leave-btn pointer" onClick={() => dispatch(joinMission(mission.id))}>Join Mission</button>}
    </div>
  );
};
Mission.propTypes = {
  mission: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  ).isRequired,
};
export default Mission;
