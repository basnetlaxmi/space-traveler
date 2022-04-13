import { fetchMissionsData } from '../apiFunctions';
// Constant
const FETCH_MISSIONS = 'space-traveler/Missions/FETCH_MISSIONS';
// Action
export const fetchMission = () => (dispatch) => {
  const res = fetchMissionsData();
  console.log(res);
};

// Reducers
const initialState = {
  missions: [],
};
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
        return {
            ...state,
            missions: action.payload
        }
    default:
      return state;
  }
};

export default missionReducer;
