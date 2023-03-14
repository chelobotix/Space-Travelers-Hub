import style from './Mission.module.css'
import { useDispatch } from 'react-redux'
import { joinMission } from '../../redux/features/missions/missionsSlice';

const Mission = (props) => {
  const dispatch = useDispatch();
  const { mission_id, mission_name, description, reserved } = props.mission
  console.log('render mission')
  const handleJoinMission = (id) => {
    console.log(id)
    dispatch(joinMission(id));
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
        <button onClick={() => handleJoinMission(mission_id)} type="button">
          {!reserved ? <p>Join Mission</p> : <p>Leave Mission</p>}
        </button>
      </td>
    </>
  )
}

export default Mission
