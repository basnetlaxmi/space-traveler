import { useSelector } from 'react-redux';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  console.log(missions);
  return (
    <>
    </>
  );
};

export default Missions;
