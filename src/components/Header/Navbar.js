import { NavLink } from "react-router-dom";
import planetImg from "../../assets/images/planet.png"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/rockets"
            style={({ isActive }) => (isActive ? { color: "red" } : {})}
          >
            <img src={planetImg} alt="" />
            <p>Space Travelers' Hub</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rockets"
            style={({ isActive }) => (isActive ? { color: "red" } : {})}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            style={({ isActive }) => (isActive ? { color: "red" } : {})}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => (isActive ? { color: "red" } : {})}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;



