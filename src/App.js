import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { rocketLoad } from './Redux/Rockets/Rockets';
import Navbar from './components/Navbar/Navbar';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import { fetchMission } from './Redux/Missions/Missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMission());
  }, []);
  useEffect(() => dispatch(rocketLoad()), []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
};
export default App;
