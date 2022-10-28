import { loadRockets } from '../apiFunctions';

const LOAD_ROCKETS = 'space-traveler/Rockets/LOAD_ROCKETS';
const ROCKETS_LOADED = 'space-traveler/Rockets/ROCKETS_LOADED';
const LOAD_ROCKETS_FAILED = 'space-traveler/Rockets/LOAD_ROCKETS_FAILED';

const RESERVE_OR_CANCEL_ROCKET = 'space-traveler/Rockets/RESERVE_OR_CANCEL_ROCKET';
export const rocketLoad = () => (dispatch) => {
  if (localStorage.getItem('rockets')) {
    dispatch({ type: ROCKETS_LOADED, payload: JSON.parse(localStorage.getItem('rockets')) });
    return;
  }
  dispatch({ type: LOAD_ROCKETS });
  loadRockets().then((result) => {
    localStorage.setItem('rockets', JSON.stringify(result));
    return dispatch({ type: ROCKETS_LOADED, payload: result });
  })
    .catch((error) => dispatch({ type: LOAD_ROCKETS_FAILED, payload: error }));
};

export const reserveRocket = (id) => ({ type: RESERVE_OR_CANCEL_ROCKET, payload: id - 1 });

const initialState = {
  rockets: [],
};

const rocketsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return { ...state, error: '', wait: true };
    case ROCKETS_LOADED:
      return { ...state, rockets: [...state.rockets, ...action.payload], wait: false };
    case LOAD_ROCKETS_FAILED:
      return { ...state, error: action.payload, wait: false };
    case RESERVE_OR_CANCEL_ROCKET:
      {
        const rockets = JSON.parse(localStorage.getItem('rockets'));
        rockets[action.payload].reserved = !state.rockets[action.payload].reserved;
        localStorage.setItem('rockets', JSON.stringify(rockets));
      }
      return {
        ...state,
        rockets: [
          ...state.rockets.slice(0, action.payload),
          { ...state.rockets[action.payload], reserved: !state.rockets[action.payload].reserved },
          ...state.rockets.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};

export default rocketsReducer;
