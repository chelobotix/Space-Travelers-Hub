import style from './Mission.module.css'
import { useDispatch } from 'react-redux'
import { joinMission, leaveMission } from '../../redux/features/missions/missionsSlice';

const Mission = (props) => {
  const dispatch = useDispatch();
  const { mission_id, mission_name, description, reserved } = props.mission

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  }

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  }

  return (
    <>
      <td className={style.border}>
        {mission_name}
      </td>
      <td className={style.border}>
        {description}</td>
      <td className={style.border}>
        {!reserved ? <p>NOT A MEMBER</p> : <p>ACTIVE MEMBER</p>}
      </td>
      <td className={style.border}>
        {!reserved ?
          <button onClick={() => handleJoinMission(mission_id)} type="button">Join Mission</button> :
          <button onClick={() => handleLeaveMission(mission_id)} type="button">Leave Mission</button>}
      </td>
    </>
  )
}

export default Mission
