import { fetchMissionsData } from '../apiFunctions';
// Constant
const FETCH_MISSIONS = 'space-traveler/Missions/FETCH_MISSIONS';
const JOIN_MISSION = 'space-traveler/Missions/JOIN_MISSION';
// Action
export const fetchMission = () => async (dispatch) => {
  const res = await fetchMissionsData();
  dispatch({ type: FETCH_MISSIONS, payload: res });
};

export const joinMission = (id) => ({
  type: joinMission,
  payload: id,
});

// Reducers
const initialState = {
  missions: [],
  joined: [],

};
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        ...state,
        missions: action.payload,

      };
    case JOIN_MISSION:
    {
      const inJoined = state.joined.find((item) => item.id === action.payload);
      const findItem = state.missions.filter((item) => item.id === action.payload);
      console.log(findItem);
      return {
        ...state,
        missions: inJoined ? [...state.missions, { ...inJoined, reserved: false }]
          : [...state.missions, { ...findItem, reserved: true }],
      };
    }
    default:
      return state;
  }
};

export default missionReducer;
