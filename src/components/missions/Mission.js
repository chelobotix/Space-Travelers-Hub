import style from './Mission.module.css'

const Mission = (props) => {
  console.log(props.mission_name)
  const { mission_id, mission_name, description } = props.mission
  return (
    <>
      <td className={style.border}>{mission_name}</td>
      <td className={style.border}>{description}</td>
      <td className={style.border}>NOT A MEMBER</td>
      <td className={style.border}><button type="button">Join Mission</button></td>
    </>
  )
}

export default Mission
