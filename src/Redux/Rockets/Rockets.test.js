import '@testing-library/jest-dom';
import rocketsReducer, { rocketLoad, reserveRocket } from './Rockets';

describe('rocketLoad', () => {
  test('test rocketLoad function', () => {
    const result = rocketLoad();
    expect(typeof result).toBe('function');
  });
});

describe('reserveRocket', () => {
  test('test reserveRocket function', () => {
    const id = 2;
    const result = reserveRocket(id);
    expect(typeof result).toBe('object');
  });
});

describe('rocketsReducer', () => {
  test('test rocketsReducer empty action', () => {
    const initialState = {
      rockets: [],
    };
    const result = rocketsReducer(initialState, {});
    expect(result.rockets.length).toBe(0);
  });
  test('test rocketsReducer empty action', () => {
    const initialState = {
      rockets: [],
    };
    const result = rocketsReducer(initialState, {});
    expect(result.rockets.length).toBe(0);
  });
  test('test rocketsReducer wait rockets', () => {
    const initialState = {
      rockets: [],
    };
    const action = {
      type: 'space-traveler/Rockets/LOAD_ROCKETS',
    };
    const result = rocketsReducer(initialState, action);
    expect(result.wait).toBe(true);
  });
  test('test rocketsReducer rockets loaded', () => {
    const initialState = {
      rockets: [],
    };
    const action = {
      type: 'space-traveler/Rockets/ROCKETS_LOADED',
      payload: ['rocket1', 'rocket2', 'rocket3', 'rocket4'],
    };
    const result = rocketsReducer(initialState, action);
    expect(result.wait).toBe(false);
    expect(result.rockets.length).toBe(4);
  });

  test('test rocketsReducer rockets load failed', () => {
    const initialState = {
      rockets: [],
    };
    const action = {
      type: 'space-traveler/Rockets/LOAD_ROCKETS_FAILED',
      payload: 'error fetching data',
    };
    const result = rocketsReducer(initialState, action);
    expect(result.wait).toBe(false);
    expect(result.error).toBe('error fetching data');
  });

  test('test rocketsReducer reserve rocket', () => {
    const state = {
      rockets: [
        { id: 1, name: 'rocket 1', description: 'description 1' },
        { id: 2, name: 'rocket 2', description: 'description 2' },
        { id: 3, name: 'rocket 3', description: 'description 3' },
        { id: 4, name: 'rocket 4', description: 'description 4' },
      ],
    };
    const action = {
      type: 'space-traveler/Rockets/RESERVE_OR_CANCEL_ROCKET',
      payload: 2,
    };
    const result = rocketsReducer(state, action);
    expect(result.rockets[2].reserved).toBe(true);
  });

  test('test rocketsReducer cancel reserve rocket', () => {
    const state = {
      rockets: [
        { id: 1, name: 'rocket 1', description: 'description 1' },
        { id: 2, name: 'rocket 2', description: 'description 2' },
        {
          id: 3, name: 'rocket 3', description: 'description 3', reserved: true,
        },
        { id: 4, name: 'rocket 4', description: 'description 4' },
      ],
    };
    const action = {
      type: 'space-traveler/Rockets/RESERVE_OR_CANCEL_ROCKET',
      payload: 2,
    };
    const result = rocketsReducer(state, action);
    expect(result.rockets[2].reserved).toBe(false);
  });
});
