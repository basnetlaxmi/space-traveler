const rockets = 'https://api.spacexdata.com/v3/rockets';

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

export default loadRockets;
