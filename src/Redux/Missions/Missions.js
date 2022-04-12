import { fetchMissionsData } from '../apiFunctions';
// Constant
const FETCH_MISSIONS = 'space-traveler/Missions/FETCH_MISSIONS';
// Action
export const fetchMission = () => async(dispatch) => {
  const response = await fetchMissionsData();
  dispatch({ type: FETCH_MISSIONS, payload: response });
 
};

// Reducers
const initialState = {
  missions: [],
};
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS :
        return {
            ...state,
            mission: action.payload
        }
    default:
      return state;
  }
};

export default missionReducer;
