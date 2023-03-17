import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import style from './Profile.module.css';

const Profile = () => {
  const stateMissions = useSelector((state) => state.missions);
  const stateRockets = useSelector((state) => state.rockets);

  if (!stateMissions.missionsArray || !stateRockets.rocketsArray) {
    return <h1>Not allowed</h1>;
  }
  const filterMissions = stateMissions.missionsArray.filter((mission) => mission.reserved);
  const filterRockets = stateRockets.rocketsArray.filter((rocket) => rocket.reserved);

  return (
    <div className={style.mainContainer}>
      <div className={style.missionContainer}>
        <h2 className={style.h2}>My Missions</h2>
        <ul className={style.ul}>
          {filterMissions.length > 0
            ? filterMissions.map((mission) => (
              <li className={style.li} key={uuidv4()}>{mission.mission_name}</li>))
            : <li>No Missions Joined</li>}
        </ul>
      </div>
      <div className={style.missionContainer}>
        <h2 className={style.h2}>My Rockets</h2>
        <ul className={style.ul}>
          {filterRockets.length > 0
            ? filterRockets.map((rocket) => (
              <li className={style.li} key={uuidv4()}>{rocket.rocket_name}</li>))
            : <li>No Rockets Reserved</li>}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
