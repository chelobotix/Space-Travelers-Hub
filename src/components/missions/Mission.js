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
      <td className={`${style.border} ${style.title}`}>
        {mission_name}
      </td>
      <td className={`${style.border} ${style.description}`}>
        {description}</td>
      <td className={`${style.border} ${style.status}`}>
        {!reserved ? <span className={style.status1}>NOT A MEMBER</span> : <span className={style.status2}>Active Member</span>}
      </td>
      <td className={`${style.border} ${style.status}`}>
        {!reserved ?
          <button className={style.btn1} onClick={() => handleJoinMission(mission_id)} type="button">Join Mission</button> :
          <button className={style.btn2} onClick={() => handleLeaveMission(mission_id)} type="button">Leave Mission</button>}
      </td>
    </>
  )
}

export default Mission
