import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './Mission.module.css';
import { joinMission, leaveMission } from '../../redux/features/missions/missionsSlice';

const Mission = (props) => {
  const dispatch = useDispatch();
  const {
    // eslint-disable-next-line camelcase
    id, name, description, reserved,
  } = props;

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <>
      <td data-testid="titleTD" className={`${style.border} ${style.title}`}>
        {name}
      </td>
      <td className={`${style.border} ${style.description}`}>
        {description}
      </td>
      <td className={`${style.border} ${style.status}`}>
        {!reserved
          ? <span className={style.status1}>NOT A MEMBER</span>
          : <span className={style.status2}>Active Member</span>}
      </td>
      <td className={`${style.border} ${style.status}`}>
        {!reserved
          ? <button className={style.btn1} onClick={() => handleJoinMission(id)} type="button">Join Mission</button>
          : <button className={style.btn2} onClick={() => handleLeaveMission(id)} type="button">Leave Mission</button>}
      </td>
    </>
  );
};

Mission.defaultProps = {
  id: '', name: '', description: '', reserved: false,
};
Mission.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
};

export default Mission;
