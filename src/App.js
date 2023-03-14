import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Header/Navbar";
import RocketList from "./components/rockets/RocketList";
import MissionsList from "./components/missions/MissionsList";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
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
