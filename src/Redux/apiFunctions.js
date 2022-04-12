const rockets = 'https://api.spacexdata.com/v3/rockets';
const missions = 'https://api.spacexdata.com/v3/missions';

const loadRockets = async () => rockets;

const fetchMissionsData = async () => missions;

export { loadRockets, fetchMissionsData };
