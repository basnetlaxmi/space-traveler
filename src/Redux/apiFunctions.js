const rockets = 'https://api.spacexdata.com/v3/rockets';
const missions = 'https://api.spacexdata.com/v3/missions';

const loadRockets = async () => {
  const response = await fetch(rockets).then((res) => res.json()).then((allRockets) => allRockets);
  const rocketsArr = response.map((rocket) => (
    {
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      flickr_images: rocket.flickr_images,
    }
  ));
  return rocketsArr;
};

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
// fetchMissionsData();
export { loadRockets, fetchMissionsData };
