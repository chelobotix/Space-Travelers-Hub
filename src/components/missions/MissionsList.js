import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Mission from './Mission';
import style from './MissionsList.module.css';

const MissionsList = () => {
  const state = useSelector((state) => state.missions);

  if (!state.missionsArray) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={style.tableContainer}>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.border}>Mission</th>
            <th className={style.border}>Description</th>
            <th className={style.border}>Status</th>
            <th className={style.border}>&nbsp;</th>

          </tr>
        </thead>
        <tbody>
          {state.missionsArray.map((mission) => (
            <tr key={uuidv4()}>
              <Mission
                id={mission.mission_id}
                name={mission.mission_name}
                description={mission.description}
                reserved={mission.reserved}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsList;
