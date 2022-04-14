import { fetchMissionsData } from '../apiFunctions';
// Constant
const FETCH_MISSIONS = 'space-traveler/Missions/FETCH_MISSIONS';
const JOIN_MISSION = 'space-traveler/Missions/JOIN_MISSION';
// Action
export const fetchMission = () => async (dispatch) => {
  const res = await fetchMissionsData();
  dispatch({ type: FETCH_MISSIONS, payload: res });
};

export const joinMission = (id) => async(dispatch) => {
  dispatch({type: joinMission, payload: id})
}

// Reducers
const initialState = {
  missions: [],

};
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        ...state,
        missions: action.payload,

      };
      case JOIN_MISSION:
        const findItem = state.missions.find((item) => item.id === action.payload.id)
        console.log(findItem);

    default:
      return state;
  }
};

export default missionReducer;
