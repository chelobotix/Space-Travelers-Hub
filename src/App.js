import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, } from "react";
import { useDispatch } from "react-redux";
import { fetchMissions } from "../src/redux/features/missions/missionsSlice";
import { fetchRockets } from "../src/redux/features/rockets/rocketsSlice";
import "./App.css";
import Header from "./components/Header/Header";
import RocketList from "./components/rockets/RocketList";
import MissionsList from "./components/missions/MissionsList";
import Profile from "./components/Profile/Profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions())
    dispatch(fetchRockets())

  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<RocketList />} />
          <Route path="rockets" element={<RocketList />} />
          <Route path="missions" element={<MissionsList />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
