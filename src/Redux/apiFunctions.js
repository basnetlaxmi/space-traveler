const rockets = 'https://api.spacexdata.com/v3/rockets';
const missions = 'https://api.spacexdata.com/v3/missions';

const loadRockets = async () => rockets;

const fetchMissionsData = async () => {
    const response = await fetch(missions).then((res) => res.json()).then((result)=> result);
    return response;
   
}
// fetchMissionsData();
export { loadRockets, fetchMissionsData };
