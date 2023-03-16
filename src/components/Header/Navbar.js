import { NavLink } from "react-router-dom";
import planetImg from "../../assets/images/planet.png";
import style from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li>
          <NavLink to="/rockets" className={style.logo}>
            <img className={style.img} src={planetImg} alt="" />
            <p className={style.logoName}>Space Travelers' Hub</p>
          </NavLink>
        </li>
        <li className={style.right}>
          <NavLink
            to="/rockets"
            style={({ isActive }) => (isActive ? { color: "red" } : {})}
            className={style.normalLink}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            style={({ isActive }) => (isActive ? { color: "red" } : {})}
            className={style.normalLink}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => (isActive ? { color: "red" } : {})}
            className={`${style.normalLink} ${style.border}`}
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <hr className={`${style.hr}`}></hr>
    </nav>
  );
};

export default NavBar;
