import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Header/Navbar";
import RocketLists from "./components/rockets/RocketList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index element={<RocketLists />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
