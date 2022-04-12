import {loadRockets} from '../apiFunctions';

const LOAD_ROCKETS = 'space-traveler/Rockets/LOAD_ROCKETS';
const ROCKETS_LOADED = 'space-traveler/Rockets/ROCKETS_LOADED';
const LOAD_ROCKETS_FAILED = 'space-traveler/Rockets/LOAD_ROCKETS_FAILED';

export const rocketLoad = (dispatch) => {
  dispatch({ type: loadRockets });
  loadRockets.then((result) => dispatch({ type: ROCKETS_LOADED, payload: result }))
    .catch((error) => dispatch({ type: LOAD_ROCKETS_FAILED, payload: error }));
};
const initialState = {
  rockets: [],
};

const rocketsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return state;
    case ROCKETS_LOADED:
      return state;
    case LOAD_ROCKETS_FAILED:
      return state;
    default:
      return state;
  }
};

export default rocketsReducer;
