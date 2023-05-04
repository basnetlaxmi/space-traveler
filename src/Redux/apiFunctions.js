const url = process.env.REACT_APP_CONTENTFUL_URL;
const apiKey = process.env.REACT_APP_AUTH_KEY;
const rocketsQuery = process.env.REACT_APP_ROCKETS_QUERY;
const missionsQuery = process.env.REACT_APP_MISSIONS_QUERY;
const loadRockets = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ query: rocketsQuery }),
  }).then((res) => res.json())
    .then((allRockets) => allRockets.data.spaceTravellerCollection.items[0].rockets);
  const rocketsArr = response.map((rocket) => (
    {
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
    }
  ));
  return rocketsArr;
};

const fetchMissionsData = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ query: missionsQuery }),
  }).then((res) => res.json())
    .then((result) => result.data.spaceTravellerCollection.items[0].missions);
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
