const rockets = 'https://api.spacexdata.com/v3/rockets';
const missions = 'https://api.spacexdata.com/v3/missions';

const loadRockets = async () => rockets;

const fetchMissionsData = async () => {
  const response = await fetch(missions).then((res) => res.json()).then((result) => result);
  const missionArr = response.map((mission) => (
    {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }
  ));
  return missionArr;
};
export { loadRockets, fetchMissionsData };
