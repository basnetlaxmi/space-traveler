import loadRockets from '../apiFunctions';
//Constant
const FETCH_MISSIONS = 'space-traveler/Missions/FETCH_MISSIONS';
//Action
export const fetchMission = async(dispatch) => {
    dispatch({ type: FETCH_MISSIONS, payload: results });
}

//Reducers
const initialState = {
    missions : [],
}
const missionReducer = (state = initialState, action) => {
    switch(action.type) {

        default:
            return state;

    }
}

export default missionReducer;
